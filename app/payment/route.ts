import { NextResponse, type NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { sql } from '@vercel/postgres';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  try{
  const body = await request.json();

  const payment = await new Payment(client).get({ id: body.data.id });

  if (payment && payment.status === "approved") {
    await sql`UPDATE sales SET transaction_mp_id=${payment.id} WHERE s_id=${payment.external_reference}`;
    return NextResponse.json({ success: true });
  }
  else{
    return NextResponse.json({ success: false });
  }
  }catch (error: any) {
    console.error("Error processing payment:", error);
    return Response.json({ success: false, error: error.message });
  }
}