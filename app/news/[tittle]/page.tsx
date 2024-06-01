import Card from "@/app/ui/Card";
import { fetchMostSoldProducts, fetchProductsImages, findImage } from "@/lib/dataDB"
import { ProductImage } from "@/lib/definitions";
import { Button } from "@nextui-org/react"


export default async function Page({ params }: { params: { tittle: string } }) {
    const products = await fetchMostSoldProducts();
    const images: ProductImage[] = await fetchProductsImages();
      return (
        <div>
          <section className=" py-12 h-full md:py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Nuestros productos mas Vendidos</h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Conoce los productos mas vendidos en nuestra tienda.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {products.map((product) => (
                  <Card 
                  name={product.name} 
                  image={findImage(product.p_id, images)} 
                  description={product.description} 
                  price={product.price} 
                  id={""} 
                  key={product.p_id} 
                  {...product} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )

}