  const users = [
      {
        u_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'Fernando',
        lastname: 'IAW-2024',
        email: 'admin@admin.com',
        password: 'admin',
      },
  ];

  const categories = [
    {
      c_id: '410620b2-4001-4271-9855-fec4b6a6442a',
      name: 'Peluches',
      description: 'Los peluches de tus personajes favoritos. Los más suavecitos del mercado! ',
    },
    {
      c_id: '410621b2-4001-4271-9855-fec4b6a6442a',
      name: 'Juguetes',
      description: 'Juguetes para niños y adultos. Por que nunca es tarde. ',
    },
    {
      c_id: '410622b2-4001-4271-9855-fec4b6a6442a',
      name: 'Coleccionables',
      description: 'Encontra los Coleccionables de tus peliculas favoritas. ',
    },
    {
      c_id: '410623b2-4001-4271-9855-fec4b6a6442a',
      name: 'Ropa',
      description: 'Vestite como si fueses el protagonista de tu pelicula favorita',
    },

  ];

  const movies = [
    {
      m_id : '4010dc9e-712f-4377-85e9-fec4b6a6442a',
      name : 'Rapunzel',
    },
    {
      m_id : '4011dc9e-712f-4377-85e9-fec4b6a6442a',
      name : 'Star Wars',
    },
    {
      m_id : '4012dc9e-712f-4377-85e9-fec4b6a6442a',
      name : 'Lilo y Stitch',
    },
    {
      m_id : '4013dc9e-712f-4377-85e9-fec4b6a6442a',
      name : 'Toy Story',
    },
    {
      m_id : '4014dc9e-712f-4377-85e9-fec4b6a6442a',
      name : 'Wall-E',
    }
  ];
    
  const products = [
    {
      p_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Muñeca Rapunzel',
      price: '29999.99',
      description: 'Muñeca de la pelicula rapunzel',
      state : '1',
      movie_id  : movies[1].m_id,
      category_id : categories[0].c_id,
    },
    {
      p_id: '3959dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Muñeco de BD-1',
      price: '49999.99',
      description: 'Juguete robot de pelicula Star-Wars',
      state : '1',
      movie_id  : movies[1].m_id,
      category_id : categories[2].c_id,
    },
    {
      p_id: '3960dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Peluche Stitch',
      price: '39999.99',
      description: 'Peluche de felpa de la pelicula Lilo y Stitch',
      state : '1',
      movie_id  : movies[2].m_id,
      category_id : categories[0].c_id,
    },
    {
      p_id: '3961dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Woody',
      price: '34000',
      description: 'Figura de accion de Woody, (Hay una serpiente en mi bota)',
      state : '0',
      movie_id  : movies[3].m_id,
      category_id : categories[1].c_id,
    },
    {
      p_id: '3962dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Buzz lightyear',
      price: '38000',
      description: 'Figura de accion de Buzz Lightyear, (No puede volar)',
      state : '1',
      movie_id  : movies[3].m_id,
      category_id : categories[1].c_id,
    },
    {
      p_id: '3963dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Peluche Walle-E',
      price: '27000',
      description: 'Peluche de la pelicula Walle-E',
      state : '1',
      movie_id  : movies[4].m_id,
      category_id : categories[0].c_id,
    },
    {
      p_id: '3964dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Nave Lego Star-Wars',
      price: '67000',
      description: 'La mejor nave de lego que vas a encontrar',
      state : '1',
      movie_id  : movies[1].m_id,
      category_id : categories[1].c_id,
    },
  ];

  const productsImages = [
    {
      pi_id: '5010dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[0].p_id,
      asset_id: 'fee2fa18c1863ea19d0de9e8554e5ec0',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716386362/MovieMerch/rapunzel_lkgoox.png',
    },
    {
      pi_id: '5012dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[1].p_id,
      asset_id: '6050004ce6d3452e8524186eaf889209',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716562376/products/BD-1_sqe6bc.png',
    },
    {
      pi_id: '5013dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[2].p_id,
      asset_id: '2848e7aa780ebcfed96860346717e3ce',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716386363/MovieMerch/Stitch_ldga3t.png',
    },
    {
      pi_id: '5014dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[3].p_id,
      asset_id: 'e0777586021a801f58d504846d1ab924',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716386363/MovieMerch/woody_gocztm.png',
    },
    {
      pi_id: '5015dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[4].p_id,
      asset_id: '23b749661159f7f600790be661811129',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716562373/products/buzz_qisgfd.png',
    },
    {
      pi_id: '5014dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[5].p_id,
      asset_id: 'b32da9320f8137d42ede1d988679ba3b',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716386361/MovieMerch/peluche-walle_xz0blf.png',
    },
    {
      pi_id: '5014dc9e-712f-4377-85e9-fec4b6a6442a',
      product_id: products[6].p_id,
      asset_id: 'b994a87a75a5dc15b553ec1e95f86ba1',
      image_url: 'https://res.cloudinary.com/dt1dczvkq/image/upload/v1716386360/MovieMerch/lego-starwars_butepj.png',
    },
  ];
  
  const sales = [
    {
      s_id : '3990ac9e-712f-4377-85e9-fec4b6a6442a',
      date : '2022-01-01 00:00:00',
      transaction_mp_id : '123456',
      person_email : 'user@nextmail.com',
    }
  ];

  const salesDetails = [
    {
      sd_id : '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      price : '20310',
      quantity : '1',
      subtotal : '20310',
      sale_id : sales[0].s_id,
      product_id : products[0].p_id,
    }
  ];

  
  
  module.exports = {
    users,
    categories,
    products,
    productsImages,
    sales,
    salesDetails,
    movies
  };