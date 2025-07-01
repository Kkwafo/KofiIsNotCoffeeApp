import ProductSerchForm from '@/components/products/ProductSerchForm';
import ProductPagination from '@/components/products/ProductsPagination';
import ProductTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import { PlusIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function productCount() {
  return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });
  return products;
}

export type ProductWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({ searchParams }: { searchParams: { page: string } }) {
  const page = Number(searchParams?.page) || 1;
  const pageSize = 10;

  if (isNaN(page) || page < 1) {
    redirect('/admin/products');
  }

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();
  const [ products, totalProducts ] = await Promise.all([ productsData, totalProductsData ]);
  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) {
    redirect('/admin/products');
  }

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch gap-6 my-8 flex-wrap">
        <Link
          href="/admin/products/new"
          className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-base font-bold rounded-lg shadow-md px-6 py-2 text-center transition w-full lg:w-auto"
        >
          <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
          <span>Crear Producto</span>
        </Link>

        <div className="w-full lg:flex-1">
          <ProductSerchForm />
        </div>
      </div>


      <ProductTable products={products} />

      <ProductPagination page={page} totalPages={totalPages} />
    </>
  );
}
