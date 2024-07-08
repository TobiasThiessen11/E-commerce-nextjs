import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button} from "@nextui-org/react";
import { handleSignOut } from "../lib/actions";
import Table from "./ui/Table";
import { fetchProductsPages } from "@/lib/dataDB";
import Pagination from "../products/ui/Pagination";
import Search from "../ui/Search";
import { CreateProduct } from "./ui/Buttons";

export default async function Admin({searchParams,
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
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manejo de Productos</h1>
        <form action={handleSignOut}>
          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cerrar sesión
          </button>
        </form>
      </div>
      <CreateProduct />
      <div className="bg-white rounded-lg shadow-md p-6 ">
        <h2 className="text-xl font-bold mb-4">Todos los productos</h2>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Busca los productos..." />
        </div>
        <Table query={query} currentPage={currentPage}/>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
      </div>
    </div>
  )
}
