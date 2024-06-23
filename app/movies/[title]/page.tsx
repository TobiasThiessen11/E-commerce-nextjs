import Card from '@/app/ui/Card';
import { fetchProductByMovie, fetchProductsImages } from '@/lib/dataDB';
import { ProductImage } from '@/lib/definitions';
import { findImage } from '@/lib/utils';
import React from 'react'

export default async function Page({ params }: { params: { title: string } }) {
    const { title } = params;
    const decodedTitle = decodeURIComponent(title);
    const products = await fetchProductByMovie(decodedTitle);
    const images: ProductImage[] = await fetchProductsImages();
  return (
    <div>
          <section className=" py-12 h-full md:py-20 ">
            <h1 className='text-3xl font-bold mb-10 text-center tracking-tight md:text-4xl'>Estos son los productos de {decodedTitle}</h1>
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
              </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {products.map((product) => (
                  <Card 
                  name={product.name} 
                  image={findImage(product.p_id, images)} 
                  description={product.description} 
                  price={product.price} 
                  id={product.p_id}
                  key={product.p_id} 
                  />
                ))} 
              </div>
            </div>
          </section>
        </div>
  )
}


