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
      throw new Error('Failed to fetch products.');
    }
  }

  export async function fetchCategories() {
    noStore();
    try {
  
      const data = await sql<Category>`SELECT * FROM categories`;
   
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch categories.');
    }
  }
  export async function fetchMovies() {
    noStore();
    try {
  
      const data = await sql<Movie>`SELECT * FROM movies`;
   
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch categories.');
    }
  }

  export async function fetchProductById(id: string): Promise<Product> {
    noStore();
    try {
      const data = await sql<Product>`
        SELECT
          *
        FROM products
        WHERE products.p_id = ${id};
      `;
      
      return data.rows[0]
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch product By id.');
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
