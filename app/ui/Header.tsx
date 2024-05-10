import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'

export const Header = () => {
  return (
  <header className='flex items-center justify-between px-2 bg-secondary'>
    <Link href={"/"} className='m-2 mt-3 text-white text-3xl font-bold'>Movie Merch</Link>
    <nav className='flex gap-6 items-center text-white font-semibold'>
        <Link href={"/"}>Productos</Link>
        <Link href={"/about"}>Outlet</Link>
        <Link href={"/contact"}>Contactanos</Link>
        <Link href={"/cart"}>Carrito(0)</Link>
        <Link href={"/login"} className='bg-primary p-2 px-4 rounded-full'>Login</Link>
    </nav>
  </header>
  )
}

export default Header