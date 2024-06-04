
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button"
import { Product } from '@/lib/definitions';
import { useAppContext } from '@/app/context';

interface ButtonProps{
    product: Product
}

function AddCartButton({product}: ButtonProps) {
    const {addToCart} = useAppContext()

    const handleClick = () => {
    addToCart(product);
};

    return( 
        <Button onClick={() => handleClick()} className='w-full'>
        Add to cart
        </Button>
    );
};

export default AddCartButton 