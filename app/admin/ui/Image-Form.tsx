"use client";
import { ProductForm, ProductImage, ProductImageForm } from '@/lib/definitions';
import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react';
import { deleteImageById, uploadImages } from '@/lib/dataDB';
import { Button } from '@nextui-org/react';
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from 'next-cloudinary';

export default function EditProductForm({
    product,
    images
}: {
  product: ProductForm;
  images: ProductImage[];
}) {
    const [resource, setResource] = useState();

    async function handleOnClick(p_id: string, asset_id: string, secure_url: string) {
        await uploadImages(p_id, asset_id, secure_url);
    }
return (
    <div className='md:mx-52 text-lg md:grid grid-cols-2'>
        <div className='text-2xl text-center text-bold'>
            <h1 className='text-xl text-center'>Estas son las Imagenes de tu producto</h1>
                {images.length === 0 ? (
                        <h2 className='text-2xl text-center text-bold'>No hay imágenes disponibles</h2>
                ) : (
                        <h2 className='text-xl text-center text-bold'>Para eliminar una imagen, solo debes hacerle click</h2>
                )}
                
                <div className='grid grid-cols-2 border-2 m-2'>
                        {images.map((image) => (
                                <div key={image.pi_id} className='flex flex-col items-center'>
                                        <Image 
                                                src={image.image_url}
                                                alt={image.image_url}
                                                width={200}
                                                height={200}
                                                className='w-1/2 '
                                        />
                                        <Button 
                                                onClick={() => {deleteImageById(image.pi_id)}}
                                                className='text-center text-md w-1/2 cursor-pointer'>
                                                    Eliminar Imagen
                                        </Button>
                                        
                                </div>
                        ))}
                </div>
        </div>
            <div className='text-2xl text-center text-bold'>
                <h1>Para subir una imagen nueva, haz click aqui</h1>
                    <CldUploadWidget
                        uploadPreset="ml_default"
                        
                        onSuccess={(result, { widget }) => {
                            const asset_id = (result?.info as CloudinaryUploadWidgetInfo)?.asset_id;
                            const secure_url = (result?.info as CloudinaryUploadWidgetInfo)?.secure_url;
                            handleOnClick(product.p_id, asset_id, secure_url);
                            widget.close();
                        }}
                    >
                        {({ open }) => {
                            function handleOnClick() {
                                setResource(undefined);
                                open();
                            }
                            return (
                                <button className='bg-slate-400 p-2 rounded-md' onClick={handleOnClick}>Sube una imagen</button>
                            );
                        }}
                    </CldUploadWidget>
            </div>
    </div>
)
}
