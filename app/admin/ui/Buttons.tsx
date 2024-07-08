
import {  deleteProduct } from '@/lib/dataDB';
import { PencilIcon, PlusIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';

export function CreateProduct() {
  return (
    <Link
      href="/admin/create"
      className="flex h-10 mb-6 items-center rounded-lg bg-secondary px-4 text-sm font-medium text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden text-xl md:block">Añade un nuevo Producto</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateProduct({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
