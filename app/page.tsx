import Image from "next/image";
import Link from "next/link";
import Card from "./ui/Card";

export default function Home() {
  return (
   <div >
      <section className="w-auto h-full">
        <div className="relative lg:p-28 lg:h-full">
          <div className=" h-72 w-auto lg:flex xl:mt-22 xl:h-30 p-10">
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
                href="/WALL·E"
                className="inline-block px-8 py-2 text-2xl mt-2 font-semibold bg-black rounded-md hover:bg-primary-dark">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full md:py-24 py-5 lg:py-10 bg-gray-50">
        <h2 className="text-center text-3xl mb-3 font-bold tracking-tighter sm:text-4xl md:text-5xl">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:px-6">
          <Card name="Buzz" image="/img/Stitch.png" description="Stitch attacks snacks! Next on his list? A Mickey Mouse Lollipop. " price="$ 20.000"/>
          <Card name="Woody" image="/img/woody.png" description="Muñeco que dispara fuegos" price="$ 60.340"/>
          <Card name="BD-1" image="/img/BD-1.png" description="BD-1 Interactive Remote Control Droid" price="$ 100.540"/>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white md:text-5xl">¿Por que elegirnos?</h2>
            <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Le proveemos la mejor experiencia de compra para que puedas ser el protagonista de tus pelúculas favoritas
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
