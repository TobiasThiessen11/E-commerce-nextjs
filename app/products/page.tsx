import React from 'react'
import Filter from './ui/Filter'
import Card from '../ui/Card'
import Banner from './ui/Banner'
import {fetchProducts, fetchProductsImages, findImage } from '@/lib/dataDB'
import { ProductImage } from '@/lib/definitions'
import notFound from '../not-found'

export default async function Products () {
  const products = await fetchProducts()
  
  const images: ProductImage[] = await fetchProductsImages()
    
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
                    image={findImage(product.p_id, images)}
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

