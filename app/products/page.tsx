import React from 'react'
import Filter from './ui/Filter'
import Card from '../ui/Card'
import Banner from './ui/Banner'
import {fetchProducts, fetchProductsImages } from '@/lib/dataDB'
import { ProductImage } from '@/lib/definitions'

export default async function Products () {
  const products = await fetchProducts() 
  const images: ProductImage[] = await fetchProductsImages()
    
  function findImage(p_id: string): string {
    for (let i = 0; i < images.length; i++) {
      if (images[i].product_id === p_id) {
        console.log(images[i].image_url)
        return images[i].image_url
      }
    }
    return ''
  }

  return (
    <div>

            <Banner image="/img/banner.png" title="Clasicos" description="Hasta un -40%"/>
            <div className='md:flex'>
                <Filter />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 m-5">
                {products.map((product) => (
                <Card
                    key={product.p_id}
                    id={product.p_id}
                    name={product.name}
                    image={findImage(product.p_id)}
                    description={product.description}
                    price={product.price}
                />
            ))}
            </div>
            
        </div>
        <section className="w-auto m-5 h-full text-center text-xl">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi deleniti, beatae nesciunt quisquam veritatis expedita 
                    nostrum numquam sequi pariatur. Distinctio explicabo offi
                    cia amet beatae ipsum vel praesentium sunt veniam architecto.</p>
            </section>
    </div>
  )
}

