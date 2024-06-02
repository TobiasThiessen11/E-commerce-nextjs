import notFound from "@/app/not-found";
import Card from "@/app/ui/Card";
import { fetchFilteredProducts, fetchProductsImages, findImage } from "@/lib/dataDB";
import { ProductImage } from "@/lib/definitions";

export default async function ProductsWrapper({ query,currentPage}:{
    query: string;
    currentPage: number
}) {
    const productsFilter = await fetchFilteredProducts(query, currentPage);
    if (!productsFilter) return notFound();
    
    const images: ProductImage[] = await fetchProductsImages();
    if (!images) return notFound();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5 flex-grow">
            {productsFilter.map((product) => (
                <Card
                    key={product.p_id}
                    id={product.p_id}
                    name={product.name}
                    image={findImage(product.p_id, images)}
                    description={product.description}
                    price={product.price}
                />       
                ))}
        </div>
    );
}