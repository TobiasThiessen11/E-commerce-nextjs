"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Menu } from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className='h-6 text-xs lg:text-xl lg:h-9 justify-center pt-1 text-center bg-secondary text-white'>
        Inicia sesion y consegui un descuento del 20% en tu primera orden
      </div>
      <header className='flex items-center sticky top-0 z-50 justify-between bg-white'>
        <Link href={"/"} className='m-2 mt-3 pl-4 text-black text-3xl font-bold'>
          Movie Merch
        </Link>
        <nav className='gap-6 items-center hidden text-black font-semibold lg:flex'>
          <Link href={"/products"}>Productos</Link>
          <Link href={"/about"}>Oferta</Link>
          <Link href={"/contact"}>Nuevos Arrivos</Link>
          <div className='flex h-10 lg:ml-auto max-lg:w-full'>
            <div className='flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-2 rounded-full outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent'>
              <input
                type='text'
                placeholder='Busca a nemo...'
                className='w-full text-sm bg-transparent rounded-full outline-none pr-2'
              />
              <Search className='w-10 h-6' />
            </div>
          </div>
          <Link href={"/cart"}>Carrito(0)</Link>
          <Link href={"/login"} className='bg-secondary p-2 px-4 rounded-full text-white'>
            Login
          </Link>
        </nav>
        <Menu className='mr-2 w-10 p-0 h-auto cursor-pointer lg:hidden' onClick={toggleMobileMenu} />
      </header>
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white text-black p-4'>
          <Link href={"/products"} className='block py-2'>Productos</Link>
          <Link href={"/about"} className='block py-2'>Oferta</Link>
          <Link href={"/contact"} className='block py-2'>Nuevos Arrivos</Link>
          <Link href={"/cart"} className='block py-2'>Carrito(0)</Link>
          <Link href={"/login"} className='block py-2 bg-secondary p-2 px-4 rounded-full text-white'>
            Login
          </Link>
        </div>
      )}
    </>
  )
}

export default Header
