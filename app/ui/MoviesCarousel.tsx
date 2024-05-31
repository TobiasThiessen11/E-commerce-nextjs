"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React, { useEffect, useState } from 'react';
import MovieContent from './MovieContent';
import { fetchLatestAnimatedMovies } from '@/lib/data';

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTM4NzIyNDJkZTk5ZTE3YWI4YTBhY2UyMTk5OGYwMiIsInN1YiI6IjY2MzY5YWIzMDMyOGI5MDEyZGRiZTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjr273qiq2tf3JvCIl2FqXMNGpWdiKj-74q8e4VWB_I'
  }
};

interface MovieData {
  movie: string;
  image: string;
  description: string;
  videoTrailer: string;
  releaseDate: string;
}

const MoviesCarousel: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLatestAnimatedMovies(url, options);
      setMovies(data);
    };

    fetchData();
  }, []);

  return (
    <section className='bg-gray-800 text-white'>
      <Carousel className="relative w-full">
        <h2 className="text-center text-4xl py-2 tracking-tighter sm:text-4xl md:text-5xl">Películas Animadas en Cine</h2>
        <CarouselContent className="mb-2">
          {movies?.map((movie, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <div className="p-2">
                <MovieContent movie={movie.movie} image={movie.image} description={movie.description} videoTrailer={movie.videoTrailer} releaseDate={movie.releaseDate}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform  text-white bg-black p-2 cursor-pointer" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 cursor-pointer" />
      </Carousel>
    </section>
  );
}

export default MoviesCarousel;
