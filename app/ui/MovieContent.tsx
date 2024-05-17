import React from 'react'
import Image from 'next/image'

interface MovieCardProps {
    movie: string;
    image: string;
    description: string;
    videoTrailer: string;
  }
  

  const MovieContent: React.FC<MovieCardProps> = ({ movie, description, image, videoTrailer }) => {
    return (
      <div className='md:flex'>
          <iframe 
              className='hidden md:flex md:px-4'
              width="900" 
              height="620" 
              src={videoTrailer} 
              title="YouTube video player" 
          >
          </iframe>
          <div className='p-2 flex-1 flex flex-col items-center '>
              <h1 className='md:text-6xl text-4xl text-center'>{movie}</h1>
              <div className='md:flex'>
                <div className=''>
                    <Image src={image} width={400} height={600} alt={movie} className='p-6 md:w-96 ' />
                </div>
                <p className='md:text-2xl text-l flex-1 text-center md:text-left md:mt-2'>{description}</p>
              </div>
          </div>
      </div>
    )
  }

export default MovieContent