import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
    title: string;
    image: string;
  }
  

const NewsCard: React.FC<NewsCardProps> = ({ image,title}) => {
  return (
    <div className='pb-5 p-3'>
      <Link href={`/news/${title}`}>
        <Image 
            src={image} 
            alt={title} 
            width={560} 
            height={560} 
            className='h-full cursor-pointer hover:scale-105 lg:mb-3 transition-transform duration-300 ease-in-out' 
        />
        <h1 className='text-xs text-center lg:text-xl lg:font-semibold'>{title}</h1>
        </Link>
    </div>
    
  )
}

export default NewsCard
