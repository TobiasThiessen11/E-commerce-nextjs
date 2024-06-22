
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Banner {
    title: string;
    image: string;
    description: string;
}
  

const Banner: React.FC<Banner> = ({image,title,description}) => {
  return (
    <div className='md:flex '>
    <div className='md:w-2/3 bg-neutral p-5 flex justify-center items-center '>
        <div className='text-center'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <h3>{description}</h3>
            <Link href={"/products"}>
                <Button  className='rounded-md mt-4 bg-primary text-white'>Mirá las ofertas</Button>
            </Link>
        </div>
    </div>
        <div className='md:w-1/3'>
            <Image 
                src={image} 
                width={1202} 
                height={1400} 
                alt={title} 
                className=' md:block ' 
            />
        </div>
    </div>
  )
}


export default Banner