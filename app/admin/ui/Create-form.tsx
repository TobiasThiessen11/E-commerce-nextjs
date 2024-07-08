'use client';
import { createProduct, uploadImages } from '@/lib/dataDB';
import { Movie,Category } from '@/lib/definitions';
import { Button } from '@nextui-org/react';
import { CheckIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';


export default function Form({ movies, categories }: { movies:Movie[], categories:Category[] }) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createProduct, initialState);
  return (
    <form className='md:mx-52 text-lg' action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-lg font-medium">
            Ingresa el nombre del producto
          </label>
          <input
                id="amount"
                name="name"
                type="string"
                placeholder="Ingresa el nombre del producto"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
              />
        </div>

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-lg font-medium">
            Ingresa la descripcion del producto
          </label>
          <input
                id="amount"
                name="description"
                type="string"
                placeholder="Ingresa la descripcion del producto"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
              />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-lg font-medium">
            Escoge el precio del producto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="price"
                type="number"
                step="0.01"
                placeholder="Ingresa el precio del producto"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="relative">
        <label htmlFor="amount" className="mb-2 block text-lg font-medium">
            Escoge la pelicula del producto
          </label>
            <select
              id="customer"
              name="movie_id"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
            >
              {movies.map((movie) => (
                <option key={movie.m_id} value={movie.m_id}>
                  {movie.name}
                </option>
              ))}
            </select>
        </div>

        <div className="relative">
        <label htmlFor="amount" className="mb-2 block text-lg font-medium">
            Escoge la categoria del producto
          </label>
            <select
              id="customer"
              name="category_id"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
            >
              {categories.map((category) => (
                <option key={category.c_id} value={category.c_id}>
                  {category.name}
                </option>
              ))}
            </select>
        </div>
        
        <fieldset>
          <legend className="mb-2 block text-lg font-medium">
            Setea el estado del producto
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="state"
                  type="radio"
                  value="1"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Activo <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="state"
                  type="radio"
                  value="0"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Inactivo <XIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4 mb-5">
        <Link
          href="/admin"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button className='border-2 p-2 rounded-lg' type="submit">Añadir el producto</Button>
      </div>

    </form>
);
}