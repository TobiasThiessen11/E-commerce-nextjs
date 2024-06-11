"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button} from "@nextui-org/react";
import { handleSignOut } from "../lib/actions";

export default function Page(){
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manejo de Productos</h1>
        <form action={handleSignOut}>
          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cerrar sesión
          </button>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Agregar nuevo producto</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" className="w-full" />
          </div>
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Input
              id="description"
              name="description"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              name="price"
              type="number"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="image">Imagen</Label>
            <Input id="image" name="image" type="file" className="w-full" />
          </div>
        </div>
        <div className="mt-6 text-right">
          <Button className="bg-gray-600 text-white rounded-full">Add Product</Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">All Products</h2>
    
      </div>
    </div>
  )
}
