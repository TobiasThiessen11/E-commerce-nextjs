import Image from "next/image";
import Link from "next/link";
import Card from "./ui/Card";

export default function Home() {
  return (
   <div >
        <section className="w-full py-6 md:py-24 lg:py-32 xl:py-20">
          <div className="md:px-16">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-2 items-center">
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
                <h1 className="text-3xl font-bold ml-6 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    TODOS LOS PRODUCTOS DE TUS PELÍCULAS FAVORITAS
                </h1>
                <p className="max-w-[700px] text-[#4099bf] ml-6 md:text-xl dark:text-[#4099bf]">
                  Empezá a ser el protagonista de tus películas favoritas
                </p>
                <div className="flex flex-col ml-6 min-[400px]:flex-row">
                  <Link className="inline-flex h-10 w-auto items-center justify-center text-white bg-primary p-5 rounded-md "
                    href="#">Empezá ahora
                  </Link>
                </div>
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


      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
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
              <h3 className="text-xl font-bold mt-4">Envios rápidos</h3>
              <p className="text-[#87CEEB] dark:text-[#87CEEB] mt-2">
                Entendemos que las necesidades de cada uno de nuestros clientes varían, por lo que ofrecemos envíos rápidos
              </p>
            </div>
            <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
              <h3 className="text-xl font-bold mt-4">Garantia de confianza</h3>
              <p className="text-[#87CEEB] dark:text-[#87CEEB] mt-2">
                Ofrecemos garantia de confianza a través de la compra de nuestro equipo de expertos en tecnología de punta
              </p>
            </div>
          </div>
        </div>
      </section>
   </div>
  )
}
