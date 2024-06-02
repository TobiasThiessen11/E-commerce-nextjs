import { getImages } from "@/lib/images";
import Banner from "../products/ui/Banner"

export default async function Page () {

    const images = await getImages();
    console.log(images);
    return (
        <>
        <Banner image="/img/banner.png" title="Oferta" description="Descuentos de la semana"/>
        </>
    )
}
