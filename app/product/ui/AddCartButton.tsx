"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Product } from '@/lib/definitions';
import { useAppContext } from '@/app/context';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

interface ButtonProps {
    product: Product;
}

function AddCartButton({ product }: ButtonProps) {
    const { addToCart } = useAppContext();
    const { toast } = useToast();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 

        toast({
            title: "Producto añadido al carrito!",
            description: "Añadiste " + product.name,
            className: 'font-bold top-6 left-1/2 w-96 transform -translate-x-1/2 fixed', // Asegura que el toast esté en la esquina superior derecha
            duration: 2000,
        });

        addToCart(product);
    };

    return (
        <div>
            <Button onClick={(event) => handleClick(event)} className='w-full'>
                Añadir al carrito
            </Button>
        </div>
    );
}

export default AddCartButton;
