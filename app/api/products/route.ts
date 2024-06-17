"server only"
import { sql } from '@vercel/postgres';
import { Product } from '@/lib/definitions'; 
import { NextResponse } from 'next/server';

export async function GET (){
    const products = await sql<Product[]>`
        SELECT name,price,description FROM products
    `;
    const data = products.rows;
    return NextResponse.json({
        data
    })
}
