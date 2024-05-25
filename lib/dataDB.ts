import { sql } from '@vercel/postgres';
import {User, Product, Category, ProductImage, Movie, Sale, SaleDetail} from '../lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
    noStore();
    try {
  
      const data = await sql<Product>`SELECT * FROM products`;
   
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function fetchImageByProductId(id: string) {
    noStore();
    try {
      const data = await sql<ProductImage>`
        SELECT
          image_url
        FROM productsImages
        WHERE productsImages.product_id = ${id};
      `;
  
  
      return data.rows
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Images By id.');
    }
  }

  export function findImage(p_id: string, images: ProductImage[]): string {
    for (let i = 0; i < images.length; i++) {
      if (images[i].product_id === p_id) {
        return images[i].image_url
      }
    }
    return ''
  }

  export async function fetchProductsImages() {
    noStore();
    try {
  
      const data = await sql<ProductImage>`SELECT * FROM productsImages`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }
