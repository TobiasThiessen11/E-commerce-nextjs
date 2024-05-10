import Image from "next/image";
import Link from "next/link";
import Card from "./ui/Card";

export default function Home() {
  return (
   <div>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="md:order-1 flex justify-center ">
            <Image
              src="/img/buzz.png"
              width={500}
              height={500}
              className="hidden md:block"
              alt=""
            />
          </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold ml-3 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Vos sos el protagonista.
              </h1>
              <p className="max-w-[700px] text-[#4099bf] ml-3 md:text-xl dark:text-[#4099bf]">
                Empeza a ser el protagonista de tus peliculas favoritas
              </p>
              <div className="flex flex-col ml-3 gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#4169E1] px-8 text-sm font-medium text-[#F0F8FF] shadow transition-colors hover:bg-[#4169E1]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4169E1] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#F0F8FF] dark:text-[#4169E1] dark:hover:bg-[#F0F8FF]/90 dark:focus-visible:ring-[#4169E1]"
                  href="#"
                >
                  Empeza ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:py-24 lg:py-32 bg-gray-50">
        <h2 className="text-center text-3xl mb-3 font-bold tracking-tighter sm:text-4xl md:text-5xl">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
          <Card name="Buzz" image="/img/buzz.png" description="Muñeco que dispara fuegos" price="$ 200.000"/>
          <Card name="Woody" image="/img/woody.png" description="Muñeco que dispara fuegos" price="$ 200.000"/>
          <Card name="Lotzo" image="/img/buzz.png" description="Muñeco que dispara fuegos" price="$ 200.000"/>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F8FF] dark:bg-[#F0F8FF]">
        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Por que elegirnos?</h2>
            <p className="mx-auto max-w-[700px] text-[#87CEEB] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#87CEEB]">
              Le proveemos la mejor experiencia de compra para que puedas ser el protagonista de tus pelúculas favoritas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Productos de calidad</h3>
              <p className="text-[#87CEEB] dark:text-[#87CEEB] mt-2">
               Nuestro equipo de expertos en tecnología de punta te brinda la mejor experiencia de compra para que puedas ser el protagonista de tus pelúculas favoritas
              </p>
            </div>
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Fast Shipping</h3>
              <p className="text-[#87CEEB] dark:text-[#87CEEB] mt-2">
                We understand the excitement of receiving your order, which is why we offer fast and reliable shipping
                to get your items to you quickly.
              </p>
            </div>
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Satisfaction Guarantee</h3>
              <p className="text-[#87CEEB] dark:text-[#87CEEB] mt-2">
                We offer a 30-day money-back guarantee on all orders. If you are not completely satisfied with your
              </p>
            </div>
          </div>
        </div>
      </section>
   </div>
  )
}
