"use client"
import { Button } from "@/components/ui/button"
import { useAppContext } from "../context"
import CardCart from "./ui/CardCart"
import { useEffect, useState } from "react"
import Link from "next/link"
import { payment } from "./paymentUtil"

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

  const handleClick = async () => {
    try {
      const email = prompt('Por favor, ingrese su email:');
      await payment(cartItems, email!);
    } catch (error) {
      console.error('Error creating preference:', error);
    }
  };


 return (
    <section className="w-full mb-4">
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Tu Carrito</h1>
        {cartItems.length > 0 ?<h1 className="text-2xl text-center ">Tu carrito tiene los siguientes productos</h1> : <h1 className="text-2xl text-center ">El carrito está vacío</h1>}
      </div>
      <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6 mt-12">
        <div className="grid gap-6">
          {
            cartItems.length > 0 
              ? (
                cartItems.map((item: Item) => (
                  <CardCart key={item.id} {...item} />
                ))
              ) : (
                <div className="text-center border-2 border-dashed p-6 grid grid-rows-2 border-gray-200 rounded-lg">
                  <p className="text-2xl">No dispones de ningun producto en tu carrito</p>
                  <Link href="/products" passHref>
                    <Button className="text-2xl" size="lg">Empieza a comprar</Button>
                  </Link>
                </div>
              )
          }
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 gap-4  grid-rows-2 h-min-160 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-4xl dark:text-gray-400">Subtotal:</p>
            <p className="text-4xl">${getCartTotal()}</p>
          </div>
          <div className="mt-auto grid grid-cols-2 items-center gap-2 w-full">
            <Button disabled={cartItems.length === 0} size="lg" onClick={handleClick} >Procesar pago</Button>
            <Button disabled={cartItems.length === 0} variant="outline" size="lg" onClick={clearCart}>Eliminar Carrito</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
