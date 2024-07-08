// ui/HeaderLogin.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export const HeaderLogin = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='h-6 text-xs lg:text-xl lg:h-9 justify-center pt-1 text-center bg-secondary text-white'>
        Bienvenido de nuevo, disfruta de tus compras
      </div>
      <header className='flex items-center sticky top-0 z-50 justify-between bg-white'>
        <Link href={"/"} className='m-2 mt-3 pl-4 text-black text-3xl font-bold'>
          Movie Merch
        </Link>
        <nav className='gap-6 items-center mx-3 hidden text-black font-semibold lg:flex'>
          <Link href={"/products"}>Productos</Link>
          <Link href={"/sale"}>Oferta</Link>
          <Link href={"/contact"}>Nuevos Arrivos</Link>
          <Link href={"/cart"}>Carrito</Link>
          <button onClick={logout} className='bg-secondary p-2 px-4 rounded-full text-white'>
            Logout
          </button>
        </nav>
        <Menu className='mr-2 w-10 p-0 h-auto cursor-pointer lg:hidden' onClick={toggleMobileMenu} />
      </header>
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white text-black p-4'>
          <Link href={"/products"} onClick={toggleMobileMenu} className='block py-2'>Productos</Link>
          <Link href={"/sale"} onClick={toggleMobileMenu} className='block py-2'>Oferta</Link>
          <Link href={"/contact"} onClick={toggleMobileMenu} className='block py-2'>Nuevos Arrivos</Link>
          <Link href={"/cart"} onClick={toggleMobileMenu} className='block py-2'>Carrito(0)</Link>
          <button onClick={() => { toggleMobileMenu(); logout(); }} className='block py-2 bg-secondary p-2 px-4 rounded-full text-white'>
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default HeaderLogin;
function useAuth(): { logout: any; } {
    throw new Error('Function not implemented.');
}

