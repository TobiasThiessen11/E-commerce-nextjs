import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

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
        <section className="w-full py-12 md:py-10 lg:py-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8  md:px-6">
            <div className="rounded-lg overflow-hidden">
            <Image
                alt="Movie Poster"
                className="w-full h-[500px]  object-cover"
                height={900}
                src={image}
                style={{
                    aspectRatio: "1600/900", objectFit: "cover",
                }}
                width={1600}
          />
            </div>
            <div className="flex flex-col justify-center gap-4">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{movie}</h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                {description}
                </p>
                <span className="text-white-500 md:text-xl dark:text-gray-400"> {releaseDate} </span>
            </div>
                
            </div>
        </div>
    </section>
    );
}

export default MovieContent;
