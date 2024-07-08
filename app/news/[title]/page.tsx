import Card from "@/app/ui/Card";
import { fetchMostSoldProducts, fetchProductByMovie, fetchProductsImages } from "@/lib/dataDB"
import { ProductImage } from "@/lib/definitions";
import { findImage } from "@/lib/utils";

const MasVendidos = "Mas vendidos";
const StarWars = "Star Wars";

async function fetchDataBasedOnTitle(title: string) {

  switch (title) {
    case MasVendidos:
      console.log('mas vendidos');
      return await fetchMostSoldProducts();
    case StarWars:
      return await fetchProductByMovie(title);
    default:
      return await fetchMostSoldProducts();
  }
}

export default async function Page({ params }: { params: { title: string } }) {
    const { title } = params;
    const decodedTitle = decodeURIComponent(title);
    const products = await fetchDataBasedOnTitle(decodedTitle);
    const images: ProductImage[] = await fetchProductsImages();
      return (
        <div>
          <section className=" py-12 h-full md:py-20 ">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {decodedTitle === MasVendidos ? 'Nuestros productos más Vendidos' : decodedTitle === StarWars ? 'Nuestros productos de Star Wars' : ''}
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
              {decodedTitle === MasVendidos ? 'Descubri nuestros mejores productos, los que mas se vendieron' : decodedTitle === StarWars ? 'Descubri los mejores productos de Star Wars' : ''}
              </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {products.map((product) => (
                  <Card 
                  name={product.name} 
                  image={findImage(product.p_id, images)} 
                  description={product.description} 
                  price={product.price} 
                  id={product.p_id}
                  key={product.p_id} 
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      )

}