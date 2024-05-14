import React from 'react'
import Image from 'next/image'

interface MovieCardProps {
    title: string;
    image: string;
  }
  

const NewsCard: React.FC<MovieCardProps> = ({ image,title}) => {
  return (
    <div className=''>
        <Image 
            src={image} 
            alt={title} 
            width={416} 
            height={416} 
            className='cursor-pointer' 
        />
        <h1 className='text-s text-center lg:text-xl lg:font-semibold'>{title}</h1>
    </div>
  )
}

export default NewsCard
