import Breadcrumbs from '@/app/admin/ui/Breadcrumbs';
import { fetchAllInfoImageByProductId, fetchImageByProductId, fetchProductById } from '@/lib/dataDB';
import React from 'react'
import Form from '@/app/admin/ui/Image-Form';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [product, images] = await Promise.all([
        fetchProductById(id),
        fetchAllInfoImageByProductId(id),
    ]);
    return (
        <main>
        <Breadcrumbs
            breadcrumbs={[
            { label: 'Productos', href: '/admin' },
            {
                label: 'Editar producto',
                href: `/admin/${id}/edit`,
                active: true,
            },{
                label: 'Imagenes',
                href: `/admin/${id}/edit/images`,
                active: true,
            }
            ]}
        />
        <Form product={product} images={images} />
        </main>
    );
}


