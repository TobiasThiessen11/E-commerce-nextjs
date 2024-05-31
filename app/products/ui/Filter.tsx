import { fetchCategories, fetchMovies } from '@/lib/dataDB'
import React from 'react'


export default async function Filter() {

  const categories = await fetchCategories();
  const movies = await fetchMovies();

  return (
    <div className="md:flex flex-col md:flex-row gap-8  md:p-5  ">
        <div className='bg-neutral rounded-lg shadow-xl p-6 md:w-64 space-y-6'>
            <div className='flex flex-col text-center'>
                <h1 className='text-3xl font-bold'>CATEGORIAS</h1>

                {categories.map((category) => (
                    <div key={category.c_id}>
                    <label>
                        <button className='p-2 w-full selection:bg-black bg-white rounded-lg my-2'>{category.name}</button>
                    </label>
                    </div>
                ))}
                
            </div>

            <div className='flex flex-col text-center'>
                <h1 className='text-3xl font-bold'>PELÍCULAS</h1>

                {movies.map((movie) => (
                    <div key={movie.m_id}>
                    <label>
                        <button className='p-2 w-full selection:bg-black bg-white rounded-lg my-2'>{movie.name}</button>
                    </label>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
    
  )
}


