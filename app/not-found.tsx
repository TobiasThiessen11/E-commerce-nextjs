import Link from 'next/link';
import Image from 'next/image';
 
export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-start pt-16">
      <Image
              src="/img/tristeza-404.png"
              width={800}
              height={800}
              alt="Lotso sad error"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
            />
      <h2 className="text-center text-3xl mt-4">ERROR 404 NOT FOUND </h2>
      <p className="gray-300 text-center text-xl">No podemos encontrar la pagina que buscas </p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Volver al Inicio
      </Link>
    </main>
  );
}