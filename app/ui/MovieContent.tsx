import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
    movie: string;
    image: string;
    description: string;
    videoTrailer: string;
    releaseDate: string;
}

const MovieContent: React.FC<MovieCardProps> = ({ movie, description, image, videoTrailer, releaseDate }) => {

    const embedUrl = videoTrailer.includes('embed') ? 
    videoTrailer : `https://www.youtube.com/embed/${videoTrailer.split('v=')[1]}`;

    return (
        <div className='md:flex'>
            <iframe 
                className='hidden md:flex'
                width="900" 
                height="620" 
                src={embedUrl} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
            <div className=' flex-1 flex flex-col items-center md:mt-3'>
                <h1 className='md:text-6xl text-4xl text-center'>{movie}</h1>
                <div className='md:flex md:mt-3'>
                    <div>
                        <Image src={image} width={400} height={600} alt={movie} className='md:w-80 mt-2' />
                    </div>
                    <div className='md:flex-1 text-center md:p-2 md:pl-4'>
                        <span className='text-4xl'>Descripcion: </span>
                        <p className='md:text-2xl text-l flex-1 text-center'>{description}</p>
                        <h3 className='md:text-2xl text-center md:text-center md:mt-2'>Disponible a partir del dia: {releaseDate}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieContent;
