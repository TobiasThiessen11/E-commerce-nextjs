const { db } = require('@vercel/postgres');
const {
  products,
  categories,
  ñ,
  sales,
} = require('../app/lib/placeholder-data.js');
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
        ON CONFLICT (id) DO NOTHING;
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
    m_id UUID NOT NULL FOREIGN KEY REFERENCES movies(m_id), --------TODO----------
    c_id UUID NOT NULL FOREIGN KEY REFERENCES categories(c_id), --------TODO----------
  );
`;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (p_id, name, price, description, state, m_ID, c_ID)
        VALUES (${product.p_id}, ${product.name}, ${product.price}, ${product.description}, ${product.state}, ${product.m_ID}, ${product.c_ID})
        ON CONFLICT (id) DO NOTHING;
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
        p_id UUID NOT NULL FOREIGN KEY REFERENCES products(p_id),
        asset_id VARCHAR(255) NOT NULL,     --------TODO----------
        image_url VARCHAR(255) NOT NULL     --------TODO----------
      );
    `;

    console.log(`Created "productsImages" table`);

    // Insert data into the "productsImages" table
    const insertedProductsImages = await Promise.all(
      productsImages.map(
        (productImages) => client.sql`
        INSERT INTO productsImages (pi_id, p_id, asset_id, image_url)
        VALUES (${productImages.pi_id}, ${productImages.p_id}, ${productImages.asset_id}, ${productImages.image_url})
        ON CONFLICT (id) DO NOTHING;
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
    // Create the "movies" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS movies (
        m_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
      );
    `;

    console.log(`Created "movies" table`);

    // Insert data into the "movies" table
    const insertedMovies = await Promise.all(
      movies.map(
        (movie) => client.sql`
        INSERT INTO movies (m_id, name)
        VALUES (${movie.m_id}, ${movie.name})
        ON CONFLICT (month) DO NOTHING;
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

async function seedCategories(client) {
  try {
    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        c_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
      );
    `;

    console.log(`Created "movies" table`);

    // Insert data into the "movies" table
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (c_id, name, description)
        VALUES (${category.c_id}, ${category.name}, ${category.description})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function seedSales(client) {
  try {
    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sales (
        s_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        date TIMESTAMP  NOT NULL,
        transaction_mp_id VARCHAR(255) NOT NULL,
        p_email TEXT NOT NULL,    
      );
    `;

    console.log(`Created "sales" table`);

    // Insert data into the "sales" table
    const insertedSales = await Promise.all(
      sales.map(
        (sale) => client.sql`
        INSERT INTO sales (s_id, date, transaction_mp_id, p_email)
        VALUES (${sale.s_id}, ${sale.date}, ${sale.transaction_mp_id}, ${sale.p_email})
        ON CONFLICT (month) DO NOTHING;
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

async function seedSalesDetails(client) {
  try {
    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS salesDetails (
        sd_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        price DECIMAL(10,2) NOT NULL,
        quantity INTEGER NOT NULL,
        subtotal DECIMAL(10,2) NOT NULL,
        s_id UUID NOT NULL FOREIGN KEY REFERENCES sales(s_id),
        p_id UUID NOT NULL FOREIGN KEY REFERENCES products(p_id),    
      );
    `;

    console.log(`Created "salesDetails" table`);

    // Insert data into the "sales" table
    const insertedSalesDetails = await Promise.all(
      salesDetails.map(
        (saleDetail) => client.sql`
        INSERT INTO sales (sd_id, price, quantity, subtotal, s_id, p_id)
        VALUES (${saleDetail.sd_id}, ${saleDetail.price}, ${saleDetail.quantity}, ${saleDetail.subtotal}, ${saleDetail.s_id}, ${saleDetail.p_id})
        ON CONFLICT (month) DO NOTHING;
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
  await seedProducts(client);
  await seedProductsImages(client);
  await seedMovies(client);
  await seedCategories(client);
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