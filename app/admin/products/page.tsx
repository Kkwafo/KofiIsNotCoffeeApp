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

type SearchParamsType = Promise<{ page?: string }>;

export default async function ProductsPage({ searchParams }: { searchParams: SearchParamsType }) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
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

      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start my-8 w-full lg:w-auto gap-5">
        <Link
          href="/admin/products/new"
          className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white text-lg font-bold rounded-2xl shadow-lg px-8 py-4 text-center transition duration-300 overflow-hidden w-full lg:w-auto"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl animate-pulse"></div>
          <PlusIcon className="h-6 w-6 transition-transform group-hover:scale-125 group-hover:rotate-12" />
          <span className="z-10">Crear Producto</span>
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
