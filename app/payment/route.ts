import type { NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { sql } from '@vercel/postgres';

const client = new MercadoPagoConfig({ accessToken: "TEST-5113519851838077-060615-2bbfd7b8a6495ed0b67f8f618bb0f4a3-272885138" });

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as {data: {id:string}});
  const payment = await new Payment(client).get({id:body.data.id});

  console.log("external_reference:", payment.external_reference);

  try{
    await sql`UPDATE sales SET transaction_mp_id=${payment.id} WHERE s_id=${payment.external_reference}`;
  }catch(e){
    console.error(e);
    return new Response('Internal server error', { status: 500 });
  }

  return new Response('OK', { status: 200 });
}