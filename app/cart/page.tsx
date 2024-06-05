"use client"
import { useAppContext } from "../context"
import CardCart from "./ui/CardCart"
import { useEffect, useState } from "react"

interface Item {
  id: string
  name: string
  price: number
  description: string
  quantity: number
}

export default function Cart() {
  const { cartItems, clearCart, getCartTotal } = useAppContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div>
    <div className="flex flex-col ">
      <h1 className="text-4xl font-bold text-center m-4 mb-1">Tu Carrito</h1>
      {cartItems.length > 0 ?<h1 className="text-2xl text-center mb-3 ">Tu carrito tiene los siguientes productos</h1> 
        : <h1 className="text-2xl text-center mb-3 ">El carrito está vacío</h1>}
    </div>
    <div className="grid grid-cols-2">
      <div>
      {cartItems.length > 0 ? (
      <>
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
        
      </>
    ) : null}
      </div>
    <div>
    <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Este es el resumen de tu carrito:</h1>
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs m-4 font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={clearCart}
          >
            Limpiar el carrito
          </button>
          <button
            className="px-6 py-6 bg-gray-800 text-white text-lg m-4 font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={clearCart}
          >
            Procesar Pago
          </button>
        </div>
    </div>
    </div>
    </div>

  )

}
