"use client"
import { Product } from '@/lib/definitions';
import {createContext, useState, useContext, useEffect} from 'react'

interface CartItem {
    price: number;
    id: string;
    quantity: number;
}

export const CartContext = createContext<any>(undefined);

export function CartProvider({children} : {
    children: React.ReactNode;
} ) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem('cartItems');
            return storedCartItems ? JSON.parse(storedCartItems) as CartItem[] : [];
        }
        return [];
    });

    const addToCart = (item: Product) => {
        const isItemInCart = cartItems.find((cartItem:CartItem) => cartItem.id === item.p_id);

        if (isItemInCart){
            setCartItems(cartItems.map((cartItem:CartItem) => 
                        cartItem.id === item.p_id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
        }
        else {
            setCartItems([...cartItems, {...item, id: item.p_id, quantity: 1}])
        }
    }

    const removeFromCart = (item: any) => {
        const isItemInCart = cartItems.find((cartItem:CartItem) => cartItem.id === item.id);
        if (isItemInCart?.quantity === 1){
            setCartItems(cartItems.filter((cartItem:CartItem) => cartItem.id !== item.id));
        } else{
            setCartItems(cartItems.map((cartItem:CartItem) => 
                        cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem));
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getCartTotal = () => {
        return cartItems.reduce((total: number, cartItem:CartItem) => total+ cartItem.price * cartItem.quantity, 0).toFixed(2)
    }

    const getCartQuantity = () => { return cartItems.reduce((total: number, cartItem:CartItem) => total + cartItem.quantity, 0)}

    useEffect( () => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
        setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
            }}>
            {children}
        </CartContext.Provider>
    )

}

export function useAppContext() {
     return useContext(CartContext);
}