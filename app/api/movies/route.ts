"server only"
import { sql } from '@vercel/postgres';
import { Movie } from '@/lib/definitions'; 
import { NextResponse } from 'next/server';

export async function GET (){
    const products = await sql<Movie[]>`
        SELECT name FROM movies
    `;
    const data = products.rows;
    return NextResponse.json({
        data
    })
}
