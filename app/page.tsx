import Image from "next/image";
import Link from "next/link";
import NewsCard from "./ui/NewsCard";
import MovieCard from "./ui/MovieCard";
import MoviesCarousel from "./ui/MoviesCarousel";
import ProductsCarousel from "./ui/ProductsCarousel";

export default function Home() {
  return (
   <div >
      <section className="w-auto h-full">
        <div className="relative lg:p-28 lg:h-full">
          <div className="h-72 w-auto lg:mt-42 xl:mt-42 xl:h-30 p-10">
            <Image
              src="/img/home.png"
              layout="fill"
              objectFit="cover"
              alt="Background Image of WALL·E"
              className=""
            />
          </div>
          <div className="relative flex flex-col items-start justify-center text-white px-6 pb-4 md:px-0 lg:py-0 md:w-1/2">
            <h1 className="text-s sm:text-l md:text-l lg:text-xl bg-info px-2 rounded">Ultimas Novedades</h1>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Exclusivos de WALL·E</h1>
            <p className="max-w-lg text-lg">
              Los mejores muñecos de la pelicula WALL·E. Con la compra de uno te llevas de regalo un poster.
            </p>
            <div className="">
              <Link
                href="/products"
                className="inline-block px-8 py-2 text-2xl mt-2 font-semibold bg-black rounded-md hover:bg-primary-dark">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductsCarousel/>

      <section className=" ">
        <h1 className="text-center w-full text-3xl m-2 font-bold sm:text-4xl md:text-5xl">Novedades</h1>
        <div className="flex items-center justify-center">
          <NewsCard image="/img/new1.jpg" title="Mas vendidos" />
          <NewsCard image="/img/new5.jpg" title="Star Wars" />
        </div>
      </section>

      <section className="py-12 w-full ">
        <h1 className="text-center text-2xl mb-6 font-bold sm:text-4xl md:text-5xl">Encontra tus personajes favoritos</h1>
        <div className="max-w-6xl mx-auto px-4 sm:px-1 lg:px-1">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <MovieCard image="/movies/enredados.png" title="Rapunzel"/>
              <MovieCard image="/movies/walle.png" title="Wall-e"/>
              <MovieCard image="/movies/lilo.png" title="Lilo y Stitch"/>
              <MovieCard image="/movies/toy-story.png" title="Toy Story"/>
              <MovieCard image="/movies/mickey.png" title="Mickey Mouse"/>
              <MovieCard image="/movies/star-wars.png" title="Star Wars"/>
          </div>
        </div>
      </section>

      <MoviesCarousel/>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white md:text-5xl">¿Por que elegirnos?</h2>
            <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Le proveemos la mejor experiencia de compra para que puedas ser el protagonista de tus peliculas favoritas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Productos de calidad</h3>
              <p className=" mt-2">
               Nuestro equipo de expertos en tecnología de punta te brinda la mejor experiencia de compra para que puedas ser el protagonista de tus pelúculas favoritas
              </p>
            </div>
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Envios rápidos</h3>
              <p className=" mt-2">
                Entendemos que las necesidades de cada uno de nuestros clientes varían, por lo que ofrecemos envíos rápidos
              </p>
            </div>
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Garantia de confianza</h3>
              <p className=" mt-2">
                Ofrecemos garantia de confianza a través de la compra de nuestro equipo de expertos en tecnología de punta
              </p>
            </div>
          </div>
        </div>
      </section>
      

   </div>
  )
}
