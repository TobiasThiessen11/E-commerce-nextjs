"use client"

import { useAppContext } from "../context"
import CardCart from "./ui/CardCart"

interface Item {
  id: string
  name: string
  price: number
  description: string
  quantity: number
}

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useAppContext()
  console.log(cartItems.length)
  return (
    <div className="flex flex-col ">
      <h1 className="text-lg font-bold">Cart</h1>
      {cartItems.map((item: Item) => (
        <CardCart 
          key={item.id}
          name={item.name} 
          description={item.description} 
          price={item.price} 
          quantity={item.quantity} 
          id={item.id}
        />
      ))}
       <div>
       {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button
            className="px-4 py-2  bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              clearCart()
            }}
          >
            Limpiar el carrito
          </button>
        </div>
          ) : (
            <h1 className="text-lg font-bold">El carrito esta vacio</h1>
          )
        }
      </div>
    </div>
  )
}