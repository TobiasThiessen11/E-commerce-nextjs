import React from 'react'
import Image from 'next/image'

interface MovieCardProps {
    movie: string;
    image: string;
    description: string;
    videoTrailer: string;
  }
  

const MovieContent: React.FC<MovieCardProps> = ({ movie, description, image, videoTrailer}) => {
  return (
    <div className='md:grid grid-flow-cols grid-cols-2'>
        <iframe 
            className='hidden md:block'
            width="1000" 
            height="720" 
            src={videoTrailer} 
            title="YouTube video player" 
         >
        </iframe>
        <div className='md:pl-20'>
            <h1 className='text-6xl text-center'>{movie}</h1>
            <p className='text-xl'>{description}</p>
            <Image src={image} width={400} height={600} alt={movie} className='w-64 justify-center items-center p-2' />
        </div>
    </div>
  )
}

export default MovieContent