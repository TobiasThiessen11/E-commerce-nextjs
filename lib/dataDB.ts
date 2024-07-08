"use server";
import { sql } from '@vercel/postgres';
import {User, Product, Category, ProductImage, Movie, Sale, SaleDetail} from '../lib/definitions';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod';


type State = {
  errors: {
    category_id?: string[];
    movie_id?: string[];
    price?: string[];
    state?: string[];
    name?: string[];
    description?: string[];
  };
  message: string | null;
};

const FormSchema = z.object({
  p_id: z.string(),
  category_id: z.string({
    invalid_type_error: 'Por favor seleccione una categoria.',
  }),
  movie_id: z.string({
    invalid_type_error: 'Por favor selecciona una pelicula.',
  }),
  price: z.coerce
    .number()
    .gt(0, { message: 'Por favor ingrese un valor mayor a $0.' }),
  state: z.enum(['1', '0'], {
    invalid_type_error: 'Por favor seleccione un estado.',
  }),
  name: z.string({
    invalid_type_error: 'Por favor ingrese un nombre.',
  }),
  description: z.string({
    invalid_type_error: 'Por favor ingrese una descripcion.',
  }),
});
 
const CreateProduct = FormSchema.omit({p_id: true});
const UpdateProduct = FormSchema.omit({p_id: true});

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

  export async function fetchAllInfoImageByProductId(id: string) {
    noStore();
    try {
      const data = await sql<ProductImage>`
        SELECT
          *
        FROM productsImages
        WHERE productsImages.product_id = ${id};
      `;
      return data.rows
      
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Images By id.');
    }
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
        AND products.state = B'1'
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
  
      return products.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products By Name.');
    }
  }

  export async function fetchActiveFilteredProducts(
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
        (products.name ILIKE ${`%${query}%`} OR
        movies.name ILIKE ${`%${query}%`} OR
        categories.name ILIKE ${`%${query}%`})
        AND products.state = B'1'
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
  
      return products.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products By Name.');
    }
  }
  

  export async function fetchActiveProductsPages(query: string) {
    noStore();
    try {
      const count = await sql` SELECT COUNT(*)
      FROM products
      JOIN movies ON products.movie_id = movies.m_id
      JOIN categories ON products.category_id = categories.c_id
      WHERE
          products.state = B'1' AND (
            products.name ILIKE ${`%${query}%`} OR
            movies.name ILIKE ${`%${query}%`} OR
            categories.name ILIKE ${`%${query}%`}
          )
           

    `;
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of products.');
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
      throw new Error('Failed to fetch total number of products.');
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

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM products WHERE p_id = ${id}`;
    revalidatePath('/admin');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function fetchMovieNameById(id:string) {
  try {
    const movie = await sql`
      SELECT
        name
      FROM
        Movies m
      WHERE
        m.m_id = ${id};`;
    
    if (movie.rows.length === 0) {
      throw new Error('Movie not found');
    }

    return movie.rows[0].name;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch movie name.');
  }
}

export async function fetchCategoryNameById(id:string) {
  try {
    const category = await sql`
      SELECT
        c.name
      FROM
        Categories c
      WHERE
        c.c_id = ${id};`;
    
    if (category.rows.length === 0) {
      throw new Error('Category not found');
    }

    return category.rows[0].name;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch category name.');
  }
}

export async function updateProduct(
  p_id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = UpdateProduct.safeParse({
    name: formData.get('name') ?? '',
    description: formData.get('description') ?? '',
    price: Number(formData.get('price')) || 1,
    state: formData.get('state') === '1' ? "1" : "0", 
    movie_id: formData.get('movie_id') ?? '',
    category_id: formData.get('category_id') ?? '',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { name, description, price, state, movie_id, category_id } = validatedFields.data;
  try {
    await sql`
      UPDATE products
      SET 
          name = ${name},
          price = ${price},
          description = ${description},
          state =  ${state}::bit,
          movie_id = ${movie_id},
          category_id = ${category_id}
      WHERE p_id = ${p_id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return { errors: {}, message: 'Database Error: Failed to Update Product.' };
  }

  console.log('Product Updated Successfully.');
  revalidatePath('/admin');
  redirect('/admin');
}

export async function createProduct(
  prevState: State,
  formData: FormData
): Promise<State> { 
  const validatedFields = CreateProduct.safeParse({
    name: formData.get('name') ?? '',
    description: formData.get('description') ?? '',
    price: Number(formData.get('price')) || 1,
    state: formData.get('state') === '1' ? '1' : '0',
    movie_id: formData.get('movie_id') ?? '',
    category_id: formData.get('category_id') ?? '',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.',
    };
  }

  const { name, description, price, state, movie_id, category_id } = validatedFields.data;

  try {
    await sql`
      INSERT INTO products (name, description, price, state, movie_id, category_id)
      VALUES (
        ${name},
        ${description},
        ${price},
        ${state}::bit,
        ${movie_id},
        ${category_id}
      )
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return {
      errors: {},
      message: 'Database Error: Failed to Create Product.',
    };
  }
  console.log('Product Created Successfully.');
  revalidatePath('/admin');
  redirect('/admin');
}

export async function uploadImages(
  product_id: string,
 asset_id: string,
 image_url: string
) { 
  console.log('Uploading Image:', product_id, asset_id, image_url)
  try {
    await sql`
      INSERT INTO productsImages (product_id, asset_id, image_url)
      VALUES (
        ${product_id},
        ${asset_id},
        ${image_url}
      )
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return {
      errors: {},
      message: 'Database Error: Failed to Create Product.',
    };
  }
  console.log('Image Uploaded Successfully.');
  revalidatePath(`/admin/${product_id}/edit/images`);
  redirect(`/admin/${product_id}/edit/images`);
}

export async function deleteImageById(pi_id: string) {
  console.log('Deleting Image:', pi_id)
  try {
    await sql`
      DELETE FROM productsImages
      WHERE pi_id = ${pi_id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return {
      errors: {},
      message: 'Database Error: Failed to Delete Image.',
    };
  }
  console.log('Image Deleted Successfully.');
  revalidatePath('/admin');
  redirect('/admin');
}