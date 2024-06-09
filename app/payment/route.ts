import type {NextRequest} from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { Sale,SaleDetail } from '@/lib/definitions';

const client = new MercadoPagoConfig({ accessToken: "TEST-5113519851838077-060615-2bbfd7b8a6495ed0b67f8f618bb0f4a3-272885138" });

export async function POST(request: NextRequest) {
    const body = await request.json().then((data) => data as {data: {id:string}});
    const payment = await new Payment(client).get({id:body.data.id});
    
    console.log("Nuestro pago:", payment);
    const sale = {
        transaction_mp_id: payment.id,
        person_email: payment.payer?.email,
    }

    const saleDetail = {
        amount: payment.transaction_amount,

    }

    console.log("Nuestra venta:", sale);
    return new Response('OK', { status: 200 });
}