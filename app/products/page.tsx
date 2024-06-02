import React, { Suspense } from 'react';
import Filter from './ui/Filter';
import { fetchProductsPages} from '@/lib/dataDB';
import Pagination from './ui/Pagination';
import ProductSkeleton from './ui/ProductSkeleton';
import ProductsWrapper from './ui/ProductsWrapper';

export default async function Products({searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query);
  
  return (
    <div>
      <div className="md:flex h-full">
        <div className="">
          <Filter/>
        </div>
        <div className="flex flex-col flex-1">
          <Suspense key={query + currentPage} fallback={<ProductSkeleton/>}>
            <ProductsWrapper query={query} currentPage={currentPage}/>
          </Suspense>
          <div className="flex justify-center m-5">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
