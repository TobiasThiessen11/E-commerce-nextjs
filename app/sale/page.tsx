import { getImages } from "@/lib/images";
import Banner from "../products/ui/Banner"

export default async function Page () {

    return (
        <>
        <Banner image="/img/banner.png" title="Oferta" description="Descuentos de la semana"/>
        </>
    )
}
