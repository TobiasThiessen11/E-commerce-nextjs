import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fetchImageByProductId, fetchProductById } from "@/lib/dataDB";
import Image from "next/image"


export default async function Page({ params }: { params: { p_id: string } }) {
    console.log(params)
    const id = params.p_id;
    const product = await fetchProductById(id);
    const images = await fetchImageByProductId(id);
        
    return(
        <div className="min-h-screen">
            <div className="font-sans p-6 max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-12">
             <div className="grid gap-4 md:gap-10 items-start">
                <Image
                alt="Product Image"
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 bg-white"
                height={600}
                src={images[0].image_url}
                width={600}
                />
                
            </div>
            <div className="grid gap-4 md:gap-10 items-start">
                <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                    <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
                    <div>
                    <p>{product.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                    
                    </div>
                </div>
                <div className="text-4xl font-bold ml-auto">{product.price}</div>
                </div>
                <form className="grid gap-4 ">
                <div className="grid gap-2">
                    <span className="text-gray-500">Cantidad</span>
                    
                    <Select defaultValue="1">
                    <SelectTrigger className="w-24">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                    <Button className="w-full" size="lg">
                        Añadir al Carrito
                    </Button>
                    <Button className="w-full" size="sm">
                        COMPRAR
                    </Button>
                </form>
                <div className="grid gap-4 md:gap-10 text-sm leading-loose">
                <p>
                    {product.description}
                </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
    
}


