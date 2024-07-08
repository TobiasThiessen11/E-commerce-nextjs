"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Filter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la visibilidad en móviles

    const categories = [
        "Peluches",
        "Juguetes",
        "Coleccionables",
        "Tecnologia",
        "Ropa",
    ];  

    const movies = [
        "Rapunzel",
        "Star Wars",
        "Lilo y Stitch",
        "Toy Story",
        "Wall-E",
        "Mickey Mouse",
    ]; 

    const handleSearch = useDebouncedCallback((term) => {
        toggleFilters();
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
          params.set('query', term);
        } else {
          params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
      }, 300);

    const toggleFilters = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="md:flex flex-col md:flex-row gap-8 md:p-5">
            <div className={`bg-neutral rounded-lg shadow-xl p-6 md:w-64 space-y-6 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                <div className='flex flex-col text-center'>
                    <h1 className='text-3xl font-bold'>CATEGORIAS</h1>
                    {categories.map((category) => (
                        <div key={category}>
                            <label>
                                <button className='p-2 w-full selection:bg-black bg-white rounded-lg my-2' onClick={() => handleSearch(category)}>
                                    {category}
                                </button>
                            </label>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col text-center'>
                    <h1 className='text-3xl font-bold'>PELÍCULAS</h1>
                    {movies.map((movie) => (
                        <div key={movie}>
                            <label>
                                <button className='p-2 w-full selection:bg-black bg-white rounded-lg my-2' onClick={() => handleSearch(movie)}>
                                    {movie}
                                </button>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón para expandir/recolapsar en móviles */}
            <div className="md:hidden text-center mt-4">
                <button
                    className="bg-secondary  text-white py-2 px-4 rounded-lg"
                    onClick={toggleFilters}
                >
                    {isExpanded ? 'Cerrar Filtros' : 'Abrir Filtros'}
                </button>
            </div>
        </div>
    );
}
