import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchProductById, fetchProducts } from '@/lib/dataDB';
import Form from '@/app/admin/ui/Edit-Form'
import Breadcrumbs from '../../ui/Breadcrumbs';
 
export const metadata: Metadata = {
    title: 'Productos',
  };

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const product = await fetchProductById(id);
    if (!product) {
        notFound();
      }

    return (
        <main>
        <Breadcrumbs
            breadcrumbs={[
            { label: 'Productos', href: '/admin' },
            {
                label: 'Editar producto',
                href: `/admin/${id}/edit`,
                active: true,
            },
            ]}
        />
        <Form product={product} />
        </main>
    );
}