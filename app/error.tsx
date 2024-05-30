'use client';
 
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-screen flex-col items-center justify-start pt-16">
      <Image
              src="/img/lotso-triste-error.png"
              width={800}
              height={800}
              alt="Lotso sad error"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
            />
      <h2 className="text-center text-3xl mt-4">¡UPS! ALGO SALIO MAL</h2>
      <p className="gray-300 text-center text-xl">Parece que hay un problema técnico porque no podemos encontrar lo que buscas</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Volver al Inicio
      </Link>
    </main>
  );
  
}