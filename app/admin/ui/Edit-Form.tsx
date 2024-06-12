'use client';
import { Button } from '@/components/ui/button';
import { CheckIcon, ClockIcon, CrossIcon, UserCircleIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { UpdateProduct } from './Buttons';
import { ProductForm } from '@/lib/definitions';

export default function EditInvoiceForm({
    product
}: {
  product: ProductForm;
}) {
    const UpdateProductById = () => UpdateProduct({ id: product.p_id });
    const [status, dispatch] = useFormState(UpdateProductById,null);
  return (
    <form className='px-10 text-lg' action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-lg font-medium">
            Cambiar el nombre del producto
          </label>
          <input
                id="amount"
                name="name"
                type="string"
                defaultValue={product.name}
                placeholder="Ingresa o modifica el nombre del producto"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
              />
        </div>

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-lg font-medium">
            Cambiar la descripcion del producto
          </label>
          <input
                id="amount"
                name="name"
                type="string"
                defaultValue={product.description}
                placeholder="Ingresa o modifica el nombre del producto"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
              />
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-lg font-medium">
            Escoge el precio del producto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={product.price}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-lg outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-lg font-medium">
           Setea el estado del producto
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  defaultChecked={product.state === '1'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Activo <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  defaultChecked={product.state === '0'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  No-Activo <XIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edita el producto</Button>
      </div>
    </form>
  );
}