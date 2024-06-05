"use client"
import { Button } from "@/components/ui/button"
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
    <section className="w-full">
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Tu Carrito</h1>
        {cartItems.length > 0 ?<h1 className="text-2xl text-center ">Tu carrito tiene los siguientes productos</h1> : <h1 className="text-2xl text-center ">El carrito está vacío</h1>}
      </div>
      <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6 mt-12">
        <div className="grid gap-6">
          {cartItems.map((item: Item) => (
            <CardCart key={item.id} {...item} />
          ))}
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 grid h-min-160">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-4xl dark:text-gray-400">Subtotal:</p>
            <p className=" text-4xl">${getCartTotal()}</p>
          </div>
            <Button size="lg">Procesar pago</Button>
            <Button variant="outline" size="sm" onClick={clearCart}> Eliminar Carrito</Button>
        </div>
      </div>
    </section>
  )
}
