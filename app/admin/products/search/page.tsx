import ProductSerchForm from '@/components/products/ProductSerchForm';
import ProductTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';

async function searchProduct(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive'
      }
    },
    include: {
      category: true
    }
  });
  return products;
}

type SearchParamsType = Promise<{ search?: string }>;

export default async function SearchPage({ searchParams }: { searchParams: SearchParamsType }) {
  const { search } = await searchParams;
  const products = await searchProduct(search ?? '');

  return (
    <>
      <Heading>
        Resultados de búsqueda: {search ?? '(sin término)'}
      </Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <ProductSerchForm />
      </div>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg">No hay resultados</p>
      )}
    </>
  );
}
