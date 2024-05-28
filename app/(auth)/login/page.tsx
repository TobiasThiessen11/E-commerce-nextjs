import React from 'react'
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';


export const page = () => {
  return (
    <div className="mx-auto my-16 max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Bienvenido</h1>
        <p className="text-gray-500 dark:text-gray-400">Ingresa tu email y tu contraseña para iniciar sesion.</p>
      </div>
      <div className="space-y-4  px-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign in
        </Button>
        <Link className="inline-block w-full text-center text-sm underline" href="/register">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  )
}

export default page