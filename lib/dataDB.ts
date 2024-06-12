import { sql } from '@vercel/postgres';
import {User, Product, Category, ProductImage, Movie, Sale, SaleDetail} from '../lib/definitions';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

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

  const ITEMS_PER_PAGE = 8;
  export async function fetchFilteredProducts(
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
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
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
      const count = await sql` SELECT COUNT(*)
      FROM products
      JOIN movies ON products.movie_id = movies.m_id
      JOIN categories ON products.category_id = categories.c_id
      WHERE
          products.name ILIKE ${`%${query}%`} OR
          movies.name ILIKE ${`%${query}%`} OR
          categories.name ILIKE ${`%${query}%`}

    `;
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
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

  export async function fetchMostSoldProducts() {
    try {
        const products = await sql`
        SELECT
            p.p_id,
            p.*,
            SUM(sd.quantity) AS total_sales
        FROM
            SalesDetails sd
        INNER JOIN
            Products p ON sd.product_id = p.p_id
        GROUP BY
            p.p_id, p.name 
        ORDER BY
            total_sales DESC
        LIMIT 5`;
        return products.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch most sold products.');
    }
}

export async function fetchProductByMovie(title: string) {
  noStore();
  try {
    const products = await sql`
    SELECT 
      p.*
    FROM 
      products p
    JOIN 
      movies m ON p.movie_id = m.m_id
    WHERE 
      m.name ILIKE ${`%${title}%`}
  `;
    return products.rows
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Product By movie.');
  }
}

export async function fetchLeastExpensiveProducts() {
  try {
      const products = await sql`
      SELECT
          p.*
      FROM
          Products p
      ORDER BY
          p.price ASC
      LIMIT 8;`;
      return products.rows;
  } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch most sold products.');
  }
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM products WHERE p_id = ${id}`;
    revalidatePath('/admin');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

