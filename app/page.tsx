import Image from "next/image";
import  Link from "next/link";

export default function Home() {
  return (
   <div>
   <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
   <div className=" px-4 md:px-6">
     <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
       <div className="md:order-1">
       <Image
       src="/hero-desktop.png"
       width={1000}
       height={760}
       className="hidden md:block"
       alt="Screenshots of the dashboard project showing desktop version"
     />
       </div>
       <div className="space-y-4">
         <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
           Discover the Cutest Movie Merch
         </h1>
         <p className="max-w-[700px] text-[#4099bf] md:text-xl dark:text-[#4099bf]">
           Discover the Cutest Movie Merch
         </p>
         <div className="flex flex-col gap-2 min-[400px]:flex-row">
           <Link
             className="inline-flex h-10 items-center justify-center rounded-md bg-[#4169E1] px-8 text-sm font-medium text-[#F0F8FF] shadow transition-colors hover:bg-[#4169E1]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4169E1] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#F0F8FF] dark:text-[#4169E1] dark:hover:bg-[#F0F8FF]/90 dark:focus-visible:ring-[#4169E1]"
             href="#"
           >
             Shop the Collection
           </Link>
         </div>
       </div>
     </div>
   </div>
 </section>
 <section className="w-full py-12 md:py-24 lg:py-32">
   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
     <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
       <Link className="absolute inset-0 z-10" href="#">
         <span className="sr-only">View Product</span>
       </Link>
       <Image
         src="/hero-desktop.png"
         width={1000}
         height={760}
         className="hidden md:block"
         alt="Screenshots of the dashboard project showing desktop version"
       />
       <div className="bg-[#F0F8FF] p-4 dark:bg-[#F0F8FF]">
         <h3 className="font-bold text-xl">Pikachu Plushie</h3>
         <p className="text-sm text-[#87CEEB]">Soft and cuddly</p>
         <h4 className="font-semibold text-lg md:text-xl">$24.99</h4>
       </div>
     </div>
     <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
       <Link className="absolute inset-0 z-10" href="#">
         <span className="sr-only">View Product</span>
       </Link>
       <Image
         src="/hero-desktop.png"
         width={1000}
         height={760}
         className="hidden md:block"
         alt="Screenshots of the dashboard project showing desktop version"
       />
       <div className="bg-[#F0F8FF] p-4 dark:bg-[#F0F8FF]">
         <h3 className="font-bold text-xl">Baby Yoda Keychain</h3>
         <p className="text-sm text-[#87CEEB]">Adorable and practical</p>
         <h4 className="font-semibold text-lg md:text-xl">$9.99</h4>
       </div>
     </div>
     <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
       <Link className="absolute inset-0 z-10" href="#">
         <span className="sr-only">View Product</span>
       </Link>
       <Image
         src="/hero-desktop.png"
         width={1000}
         height={760}
         className="hidden md:block"
         alt="Screenshots of the dashboard project showing desktop version"
       />
       <div className="bg-[#F0F8FF] p-4 dark:bg-[#F0F8FF]">
         <h3 className="font-bold text-xl">Groot Figurine</h3>
         <p className="text-sm text-[#87CEEB]">Detailed and collectible</p>
         <h4 className="font-semibold text-lg md:text-xl">$34.99</h4>
       </div>
     </div>
   </div>
 </section>
 <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F8FF] dark:bg-[#F0F8FF]">
   <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
     <div className="space-y-3">
       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Store?</h2>
       <p className="mx-auto max-w-[700px] text-[#87CEEB] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#87CEEB]">
         We pride ourselves on offering the highest quality movie merchandise, fast shipping, and a satisfaction
         guarantee.
       </p>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg dark:bg-[#F0F8FF]">
         <h3 className="text-xl font-bold mt-4">High-Quality Products</h3>
         <p className="text-[#87CEEB] dark:text-[#87CEEB] mt-2">
           Our merchandise is made with the utmost care and attention to detail, ensuring a long-lasting and
           enjoyable experience.
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
