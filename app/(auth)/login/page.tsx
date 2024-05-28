import React from 'react'
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';


export default function Page(){
  return (
    <div className="flex items-center px-6 justify-center min-h-screen bg-secondary">
      <div className="mx-auto w-full max-w-lg space-y-6 bg-white p-5 rounded-xl">
        <div className="space-y-1 text-center">
          <h1 className="text-5xl font-bold">Bienvenido</h1>
          <p className="text-gray-800 dark:text-gray-400">Ingresa tu email y tu contraseña para iniciar sesión.</p>
        </div>
        <div className="space-y-2 ">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="tobiXD@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password"  placeholder="******" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
          <Link className="inline-block w-full text-center text-sm underline" href="/register">
            No tienes una cuenta? Registrate 
          </Link>
        </div>
      </div>
    </div>
  )
}