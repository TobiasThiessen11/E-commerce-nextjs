import { sql } from '@vercel/postgres';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { NextRequest, NextResponse } from 'next/server';

const client = new MercadoPagoConfig({ accessToken: "TEST-5113519851838077-060615-2bbfd7b8a6495ed0b67f8f618bb0f4a3-272885138" });

export async function POST(request: NextRequest) {
  try {
    const { items,email } = await request.json();
    if (!items || items.length === 0) {
      return NextResponse.json({ message: 'No items provided' }, { status: 400 });
    }

    const { rows } = await sql`INSERT INTO sales (date, transaction_mp_id, person_email) VALUES (NOW(), 1, ${email}) RETURNING s_id`;
    const s_id = rows[0].s_id;
    
    for (const item of items) {
      await sql`
      INSERT INTO salesDetails
        (price,quantity,subtotal,sale_id,product_id) 
      VALUES (${item.price},${item.quantity},${item.price * item.quantity},${s_id},${item.p_id})`;
    }

    const preference = new Preference(client);

    
    const response = await preference.create({
      body: {
        external_reference: s_id,
        items: items.map((item: { name: string; quantity: number; price: number }) => ({
          title: item.name,
          quantity: item.quantity,
          unit_price: Number(item.price) ,
        }))
      }
    });

    return NextResponse.json({ preferenceId: response.id, s_id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}