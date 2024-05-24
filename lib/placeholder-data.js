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
      c_id: '41824b2-4201-4271-9855-fec4b6a6442a',
      name: 'Peluches',
      description: 'Los peluches de tus personajes favoritos. Los más suavecitos del mercado! ',
    },
    {
      c_id: '41834b2-4201-4271-9855-fec4b6a6442a',
      name: 'Juguetes',
      description: 'Juguetes para niños y adultos. Por que nunca es tarde. ',
    },
    {
      c_id: '41844b2-4201-4271-9855-fec4b6a6442a',
      name: 'Coleccionables',
      description: 'Encontra los Coleccionables de tus peliculas favoritas. ',
    },
    {
      c_id: '41854b2-4201-4271-9855-fec4b6a6442a',
      name: 'Ropa',
      description: 'Vestite como si fueses el protagonista de tu pelicula favorita',
    },

  ];
    
  const products = [
    {
      p_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Muñeca Rapunzel',
      price: '$20.310',
      description: 'Muñeca de Rapunzel',
      state : 'active',
      movie_id  : movies[0].m_id,
      category_id : categories[0].c_id,
    },
  ];

  const productsImages = [
    {
      pi_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      p_id: products[0].p_id,
      asset_id: 'asset_id',
      image_url: 'image_url',
    },
  ];
  
  const sales = [
    {
      s_id : '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      date : '2022-01-01 00:00:00',
      transaction_mp_id : '123456',
      p_email : 'user@nextmail.com',
    }
  ];

  const salesDetails = [
    {
      sd_id : '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      price : '$20.310',
      quantity : '1',
      subtotal : '$20.310',
      s_id : sales[0].s_id,
      p_id : products[0].p_id,
    }
  ];

  const movies = [
    {
      m_id : '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name : 'Rapunzel',
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