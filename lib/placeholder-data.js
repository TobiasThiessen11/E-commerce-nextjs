  const users = [
      {
        u_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'Tobias',
        lastname: 'Thiessen',
        email: 'user@nextmail.com',
        password: '123456',
      },
  ];

  const categories = [
    {
      c_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Peluche',
      description: 'Los peluches son GODDAMN cool',
    },
  ];
    
  const products = [
    {
      p_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Muñeca Rapunzel',
      price: '$20.310',
      description: 'Muñeca de Rapunzel',
      state : 'active',
      m_id : movies[0].m_id,
      c_id: categories[0].c_id,
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