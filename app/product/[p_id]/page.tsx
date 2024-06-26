import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fetchImageByProductId, fetchProductById } from "@/lib/dataDB";
import "react-image-gallery/styles/css/image-gallery.css";
import MyGallery from "../ui/MyGallery";
import notFound from "@/app/not-found";
import AddCartButton from "../ui/AddCartButton";
import { Toaster } from "@/components/ui/toaster";

export default async function Page({ params }: { params: { p_id: string } }) {
    const id = params.p_id;
    const product = await fetchProductById(id);
    if(!product)
        return notFound();
    const imagesData = await fetchImageByProductId(id);

    const images = imagesData.map((image) => ({
        original: image.image_url,
        thumbnail: image.image_url,
    }));
    
    return(
        <div className="m-5">
            <div className="font-sans max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-md ">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-10">
                <div className="grid gap-4 md:gap-10 items-start">
                <MyGallery images={images}/>
                </div>
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className=" md:flex items-start">
                    <div className="grid gap-4 ">
                            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
                        <div>
                            <p>{product.description}</p>                    
                        </div>
                    </div>
                        
                    </div>
                    <div className="text-4xl font-bold">$ {product.price}</div>
                    <form className="grid gap-4 ">
                        <AddCartButton product={product}/>
                    </form>
                        
                    </div>
            </div>
            </div>
        </div>
    )
    
}


