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
  const ITEMS_PER_PAGE = 6;
  export async function fetchProductsByName(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const products = await sql<Product>`
      SELECT
        products.*,
        movies.name AS movie_title,
        categories.name AS category_name
        FROM products
        JOIN movies ON products.movie_id = movies.m_id
        JOIN categories ON products.category_id = categories.c_id
        WHERE
        products.name ILIKE ${`%${query}%`} OR
        movies.name ILIKE ${`%${query}%`} OR
        categories.name ILIKE ${`%${query}%`}
    `;
  
      return products.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products By Name.');
    }
  }

  export async function fetchProductsPages(query: string) {
    noStore();
    try {
      const count = await sql`SELECT COUNT(*)
      FROM products
        JOIN movies ON products.movie_id = movies.m_id
        JOIN categories ON products.category_id = categories.c_id
        WHERE
        products.name ILIKE ${`%${query}%`} OR
        movies.name ILIKE ${`%${query}%`} OR
        categories.name ILIKE ${`%${query}%`}
    `;
  
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      console.log(totalPages);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
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
