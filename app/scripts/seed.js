const { db } = require('@vercel/postgres');
const {
  users,
  products,
  categories,
  productsImages,
  movies,
  sales,
  salesDetails,
} = require('../lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        u_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (u_id, name, lastname, email, password)
        VALUES (${user.u_id}, ${user.name}, ${user.lastname}, ${user.email}, ${hashedPassword})
        ON CONFLICT (u_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      p_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      description TEXT NOT NULL,
      state BIT NOT NULL,
      movie_id UUID NOT NULL,
      category_id UUID NOT NULL,
      FOREIGN KEY (movie_id) REFERENCES movies(m_id),
      FOREIGN KEY (category_id) REFERENCES categories(c_id)
    );
`;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (p_id, name, price, description, state, movie_ID, category_ID)
        VALUES (${product.p_id}, ${product.name}, ${product.price}, ${product.description}, ${product.state}, ${product.movie_id}, ${product.category_id})
        ON CONFLICT (p_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedProductsImages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "productImages" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS productsImages (
        pi_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID NOT NULL,
        asset_id VARCHAR(255) NOT NULL,  
        image_url VARCHAR(255) NOT NULL, 
        FOREIGN KEY (product_id) REFERENCES products(p_id) 
      );
    `;

    console.log(`Created "productsImages" table`);

    // Insert data into the "productsImages" table
    const insertedProductsImages = await Promise.all(
      productsImages.map(
        (productImages) => client.sql`
        INSERT INTO productsImages (pi_id, product_id, asset_id, image_url)
        VALUES (${productImages.pi_id}, ${productImages.product_id}, ${productImages.asset_id}, ${productImages.image_url})
        ON CONFLICT (pi_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedProductsImages.length} productImages`);

    return {
      createTable,
      productsImages: insertedProductsImages,
    };
  } catch (error) {
    console.error('Error seeding productImages:', error);
    throw error;
  }
}

async function seedMovies(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "movies" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS movies (
        m_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "movies" table`);

    // Insert data into the "movies" table
    const insertedMovies = await Promise.all(
      movies.map(
        (movie) => client.sql`
        INSERT INTO movies (m_id, name)
        VALUES (${movie.m_id}, ${movie.name})
        ON CONFLICT (m_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedMovies.length} movies`);

    return {
      createTable,
      movies: insertedMovies,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}



async function seedSales(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sales (
        s_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        date TIMESTAMP NOT NULL,
        transaction_mp_id VARCHAR(255) NOT NULL,
        person_email TEXT NOT NULL    
      );
    `;

    console.log(`Created "sales" table`);

    // Insert data into the "sales" table
    const insertedSales = await Promise.all(
      sales.map(
        (sale) => client.sql`
        INSERT INTO sales (s_id, date, transaction_mp_id, person_email)
        VALUES (${sale.s_id}, ${sale.date}, ${sale.transaction_mp_id}, ${sale.person_email})
        ON CONFLICT (s_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedSales.length} sales`);

    return {
      createTable,
      sales: insertedSales,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function seedCategories(client) {
  try {
    // Verificar y crear la extensión "uuid-ossp" si no existe
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Crear la tabla "categories" si no existe
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        c_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
      );
    `;

    console.log(`Created "categories" table`);

    // Insertar datos en la tabla "categories"
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (c_id, name, description)
        VALUES (${category.c_id}, ${category.name}, ${category.description})
        ON CONFLICT (c_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}


async function seedSalesDetails(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS salesDetails (
        sd_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        price DECIMAL(10,2) NOT NULL,
        quantity INTEGER NOT NULL,
        subtotal DECIMAL(10,2) NOT NULL,
        sale_id UUID NOT NULL,
        product_id UUID NOT NULL,  
        FOREIGN KEY (sale_id) REFERENCES sales(s_id), 
        FOREIGN KEY (product_id) REFERENCES products(p_id)
      );
    `;

    console.log(`Created "salesDetails" table`);

    // Insert data into the "sales" table
    const insertedSalesDetails = await Promise.all(
      salesDetails.map(
        (saleDetail) => client.sql`
        INSERT INTO salesDetails (sd_id, price, quantity, subtotal, sale_id, product_id)
        VALUES (${saleDetail.sd_id}, ${saleDetail.price}, ${saleDetail.quantity}, ${saleDetail.subtotal}, ${saleDetail.sale_id}, ${saleDetail.product_id})
        ON CONFLICT (sd_id) DO NOTHING;
      `,
      ),


    );

    console.log(`Seeded ${insertedSalesDetails.length} salesDetails`);

    return {
      createTable,
      salesDetails: insertedSalesDetails,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedMovies(client); 
  await seedCategories(client); 
  await seedProducts(client); 
  await seedProductsImages(client);
  await seedSales(client);
  await seedSalesDetails(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});