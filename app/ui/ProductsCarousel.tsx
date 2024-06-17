import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import Card from './Card'
import { fetchLeastExpensiveProducts, fetchProducts, fetchProductsImages } from '@/lib/dataDB';
import { ProductImage } from '@/lib/definitions';
import { findImage } from '@/lib/utils';

export default async function ProductsCarousel() {
    const products = await fetchLeastExpensiveProducts();
    const images: ProductImage[] = await fetchProductsImages();
  return (
    
    <section className="h-full md:py-24 py-5 bg-white lg:py-10 max-w-6xl mx-auto">
        <Carousel className="w-full " >
        <h2 className="text-center text-3xl mb-4 font-bold tracking-tighter sm:text-4xl md:text-5xl">Productos Destacados</h2>
        <CarouselContent className=" mb-2">
        {products.map((product) => (
            <CarouselItem key={product.p_id} className=" md:basis-1/3 lg:basis-1/4">
            <div className="p-2">
                <Card
                    key={product.p_id}
                    id={product.p_id}
                    name={product.name}
                    image={findImage(product.p_id, images)}
                    description={product.description}
                    price={product.price}
                />
            </div>
            </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    </section>
  )
}

