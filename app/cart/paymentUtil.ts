"use server";
import { sql } from '@vercel/postgres';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

interface Item {
  p_id: string
  name: string
  quantity: number
  price : number

}

export async function payment(items:Item[], email:string) {
    
    const { rows } = await sql`INSERT INTO sales (date, transaction_mp_id, person_email) VALUES (NOW(), 1, ${email}) RETURNING s_id`;
    const s_id = rows[0].s_id;
    
    for (const item of items) {
      await sql`
      INSERT INTO salesDetails
        (price,quantity,subtotal,sale_id,product_id) 
      VALUES (${item.price},${item.quantity},${item.price * item.quantity},${s_id},${item.p_id})`;
    }

    const title = "MovieMerch"
           
    if (process.env.NODE_ENV === "development") {
      const preference = await new Preference(client).create({
        body: {
          items: [
            {
              title,
              description: "MovieMerch",
              unit_price: getSuma(items),
              quantity: getQuantity(items),
              id: s_id,
  
            },
          ],
          external_reference: s_id,
          back_urls: {
            success: "http://localhost:3000/cart/succes ",
            failure: "http://localhost:3000/cart",
          },
          auto_return: "approved",
        },
  
      });
      redirect(preference.init_point!);
    }
    else {
      const preference = await new Preference(client).create({
        body: {
          items: [
            {
              title,
              description: "MovieMerch",
              unit_price: getSuma(items),
              quantity: getQuantity(items),
              id: s_id,
  
            },
          ],
          external_reference: s_id,
          back_urls: {
            success: "https://moviemerch.vercel.app/cart/succes ",
            failure: "https://moviemerch.vercel.app/cart",
          },
          auto_return: "approved",
        },
  
      });
      redirect(preference.init_point!);
    }
}

function getSuma(items: Item[]): number {
  
  let suma = 0;
  items.map((item) => {
    suma += item.price * item.quantity;
  });
  return suma;
}

function getQuantity(items: Item[]): number {
  
  let quantity = 0;
  items.map((item) => {
    quantity += item.quantity;
  });
  return quantity;
}
