import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface MovieCardProps {
    title: string;
    image: string;
}
  

const NewsCard: React.FC<MovieCardProps> = ({ image,title}) => {
  return (
    <div className=''>
      <Link href={`/movies/${title}`}>
        <Image 
            src={image} 
            alt={title} 
            width={416} 
            height={416} 
            className='cursor-pointer' 
            
        />
        <h1 className='text-s text-center lg:text-xl lg:font-semibold'>{title}</h1>
        
      </Link>
    </div>
  )
}

export default NewsCard
