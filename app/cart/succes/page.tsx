import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function page() {
return (
    <section className="w-full grid grid-rows-2 justify-center gap-1 items-center">
        <div className="px-4 md:px-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">¡Te queremos agradecer por confiar!</h1>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">¡Gracias por tu compra!</h1>
            <h1 className="text-2xl text-center m-3 ">Podes seguir comprando mas productos</h1>
            <Link href={"/"}>
                    <Button>Seguir comprando</Button>
            </Link>
        </div>
        <div className=''>
            <Image src="/img/succes.png" alt="success" width={432} height={344} />
        </div>
    </section>
)
}

export default page