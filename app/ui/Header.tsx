import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="w-full m-0 bg-[#4099bf]">
        <div className=" px-4 md:px-6 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
            <span className="font-bold text-lg mt-2 mb-2">Movie Merch</span>
        </Link>
        <nav className="flex items-center gap-4">
            <Link className="hover:underline" href="#">
            Shop
            </Link>
            <Link className="hover:underline" href="#">
            About
            </Link>
            <Link className="hover:underline" href="#">
            Contact
            </Link>
        </nav>
        </div>
    </header>
  )
}

export default Header
