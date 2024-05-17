import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import MovieContent from './MovieContent'

const products = [
    {
      movie: 'La Era del Hielo 3',
      image: '/img/laEraDelHielo.jpg',
      description: 'La Era de Hielo es una película de animación clave. Esta pelicula fue desarrollada por el estudio de animacion de DreamWorks Animation. ',
      videoTrailer: 'https://www.youtube.com/watch?v=wHhCZCdKZk8&ab_channel=20thCenturyStudiosHomeEntertainmentEspa%C3%B1a'
    },
    {
        movie: 'Madagascar 3',
        image: '/img/madagascar.jpg',
        description: 'Madagascar 3 es una película de animación de 2012 estrenada por Pixar Animation Studios. Es la tercera película animada de Walt Disney Animation Studios. ',
        videoTrailer: 'https://www.youtube.com/watch?v=QqVb9OoQh7g'
      },
  ];

export const MoviesCarousel = () => {
  return (
    <div className='bg-black text-white'>
        <Carousel className="w-full " >
        <h2 className="text-center text-5xl mb-4 py-2 tracking-tighter sm:text-4xl md:text-5xl">Películas en Cine</h2>
        <CarouselContent className=" mb-2">
        {products.map((product, index) => (
            <CarouselItem key={index} className=" md:basis-1/1 lg:basis-1/1">
            <div className="p-2">
                <MovieContent movie={product.movie} image={product.image} description={product.description} videoTrailer={product.videoTrailer}/>
            </div>
            </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  </div>
  )
}

export default MoviesCarousel