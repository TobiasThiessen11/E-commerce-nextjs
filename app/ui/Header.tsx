import React from 'react'
import Link from 'next/link'
import { Search, Menu} from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
  return (
  <>
    <div className='h-6 text-xs justify-center pt-1 text-center bg-secondary text-white'>Inicia sesion y consegui un descuento del 20% en tu primera orden</div>
    <header className='flex items-center sticky top-0 z-50 justify-between bg-gray-200 '>
    <Link href={"/"} className='m-2 mt-3 pl-4 text-black text-3xl font-bold'>Movie Merch</Link>
    <nav className='gap-6 items-center hidden text-black font-semibold lg:flex '>
        <Link href={"/"}>Productos</Link>
        <Link href={"/about"}>Oferta</Link>
        <Link href={"/contact"}>Nuevos Arrivos</Link>
        <div className='flex h-10 lg:ml-auto max-lg:w-full'>
          <div className='flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-2 rounded-full outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent'>
            <input type='text' placeholder='Busca a nemo...'className='w-full text-sm bg-transparent rounded-full outline-none pr-2' />
            <Search className='w-10 h-6' />
          </div>
        </div>
      <Link href={"/cart"}>Carrito(0)</Link>
        <Link href={"/login"} className='bg-primary p-2 px-4 rounded-full text-white'>Login</Link>
    </nav>
    <Menu className='mr-2 w-10 p-0 h-auto cursor-pointer lg:hidden'/>
  </header>
  </>

  )
}

export default Header