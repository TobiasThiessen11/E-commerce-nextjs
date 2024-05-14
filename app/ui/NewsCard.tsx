import React from 'react'
import Image from 'next/image'

interface NewsCardProps {
    title: string;
    image: string;
  }
  

const NewsCard: React.FC<NewsCardProps> = ({ image,title}) => {
  return (
    <div className='pb-5 p-3'>
        <Image 
            src={image} 
            alt={title} 
            width={600} 
            height={600} 
            className='h-full cursor-pointer hover:scale-105 lg:mb-3 transition-transform duration-300 ease-in-out' 
        />
        <h1 className='text-s text-center lg:text-xl lg:font-semibold'>{title}</h1>
    </div>
  )
}

export default NewsCard
