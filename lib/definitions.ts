
export type User = {
    u_id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
  };
  
  export type Category = {
    c_id: string;
    name: string;
    description: string;
  };
  
  export type Movie = {
    m_id: string;
    name: string;
  };
  
  export type Product = {
    p_id: string;
    name: string;
    price: number;
    description: string;
    state : '0'|'1'; // ---> REVISAR
    movie_id  : string;
    category_id : string;
  };
  
  export type ProductImage = {
    pi_id: string;
    product_id: string;
    asset_id: string;
    image_url: string;
  };
    
  export type Sale = {
    s_id : string;
    date : string;
    transaction_mp_id : string;
    person_email : string;
  };
  
  export type SaleDetail = {
    sd_id : string;
    price : number;
    quantity : number;
    subtotal : number;
    sale_id : string;
    product_id : string;
  };
  
  export type ProductForm = {
    p_id: string;
    name: string;
    price: number;
    description: string;
    state : '0'|'1'; // ---> REVISAR
    movie_id  : string;
    category_id : string;
  };

  export type ProductImageForm = {
    pi_id: string;
    product_id: string;
    asset_id: string;
    image_url: string;
  };