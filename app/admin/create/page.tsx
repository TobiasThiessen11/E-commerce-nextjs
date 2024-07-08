import { fetchCategories, fetchMovies } from "@/lib/dataDB";
import Breadcrumbs from "../ui/Breadcrumbs";
import Form from "../ui/Create-form";

 
export default async function Page() {
  const movies = await fetchMovies();
  const categories = await fetchCategories();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Productos', href: '/admin' },
          {
            label: 'Añadir Producto',
            href: '/admin/create',
            active: true,
          },
        ]}
      />
      <Form movies={movies} categories={categories} />
    </main>
  );
}