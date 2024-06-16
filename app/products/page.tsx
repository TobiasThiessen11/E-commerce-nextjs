import React, { Suspense } from 'react';
import Filter from './ui/Filter';
import { fetchActiveProductsPages} from '@/lib/dataDB';
import Pagination from './ui/Pagination';
import ProductsWrapper from './ui/ProductsWrapper';
import Search from '../ui/Search';
import ProductSkeleton from './ui/ProductSkeleton';

export default async function Products({searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchActiveProductsPages(query);
  
  return (
    <div>
      <div className='flex justify-center'>
        <div className="w-full md:w-auto">
          <Search placeholder='Busca a Nemo...' />
        </div>
      </div>
      <div className="md:flex h-full">
        <div className="">
          <Filter />
        </div>
        <div className="flex flex-col flex-1">
          <Suspense key={query + currentPage} fallback={<ProductSkeleton />}>
            <ProductsWrapper query={query} currentPage={currentPage} />
          </Suspense>
          <div className="flex justify-center m-5">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
