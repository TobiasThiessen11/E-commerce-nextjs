'use client';
 
import Link from 'next/link';
import { useEffect } from 'react';
 
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
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-center text-3xl">Algo anduvo mal!</h2>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Volver al Inicio
      </Link>
    </main>
  );
}