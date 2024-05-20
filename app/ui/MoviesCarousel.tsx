"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { useEffect, useState } from 'react'
import MovieContent from './MovieContent'
import fetch from 'node-fetch';


const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTM4NzIyNDJkZTk5ZTE3YWI4YTBhY2UyMTk5OGYwMiIsInN1YiI6IjY2MzY5YWIzMDMyOGI5MDEyZGRiZTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjr273qiq2tf3JvCIl2FqXMNGpWdiKj-74q8e4VWB_I'
  }
};

interface Movie {
  title: string;
  poster_path: string;
  overview: string;
  videoTrailer: string;
  release_date: string;
  genre_ids: number[];
}

interface MovieData {
  movie: string;
  image: string;
  description: string;
  videoTrailer: string;
  releaseDate: string;
}

export const MoviesCarousel = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.results && Array.isArray(json.results)){}
        const AnimatedMovies = json.results.filter((movie: Movie) => movie.genre_ids.includes(16));

        const firstFiveMovies = AnimatedMovies.slice(0, 5).map((movie: Movie) => ({
          movie: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          description: movie.overview,
          videoTrailer: `https://www.youtube.com/results?search_query=${movie.title} trailer`,
          releaseDate: movie.release_date
        }));
        setMovies(firstFiveMovies);
      })
      .catch((err) => console.error('error:' + err));
  }, []);

  return (
    <div className='bg-gray-800 text-white'>
      <Carousel className="w-full">
        <h2 className="text-center text-5xl mb-4 py-2 tracking-tighter sm:text-4xl md:text-5xl">Películas Animadas en Cine</h2>
        <CarouselContent className="mb-2">
          {movies.map((movie, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <div className="p-2">
                <MovieContent movie={movie.movie} image={movie.image} description={movie.description} videoTrailer={movie.videoTrailer} releaseDate={movie.releaseDate}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MoviesCarousel;