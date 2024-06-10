import type { NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { sql } from '@vercel/postgres';

const client = new MercadoPagoConfig({ accessToken: "TEST-5113519851838077-060615-2bbfd7b8a6495ed0b67f8f618bb0f4a3-272885138" });

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as { data: { id: string }, items: { id: string, name: string, price: number, quantity: number }[] });
  const payment = await new Payment(client).get({ id: body.data.id });

  const sale = {
    transaction_mp_id: payment.id,
    person_email: payment.payer?.email,
  };

  try {
    // Iniciar la transacción
    await sql`BEGIN`;

    // Insertar en la tabla sales
    const saleResult = await sql`
        INSERT INTO sales (date,transaction_mp_id, person_email)
        VALUES (CURRENT_DATE,${sale.transaction_mp_id}, ${sale.person_email})
        RETURNING s_id;

    `;

    // Insertar detalles de los productos en la tabla salesDetails
    // const items = body.items;
    // console.log(items);
    // for (const item of items) {
    //     await sql`
    //       INSERT INTO salesDetails (price, quantity, subtotal, sale_id, product_id)
    //       VALUES (${item.price}, ${item.quantity}, ${item.price * item.quantity}, ${saleResult.rows[0].s_id}, ${item.id});
    //     `;
    // }
    

    // Confirmar la transacción
    await sql`COMMIT`;
    return new Response('OK', { status: 200 });
  } catch (error) {
    // Revertir la transacción en caso de error
    await sql`ROLLBACK`;
    console.error('Error inserting into database:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
