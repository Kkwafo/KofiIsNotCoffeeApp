import { ProductWithCategory } from '@/app/admin/products/page';
import { formatCurrency } from '@/src/utils';
import Link from 'next/link';

type ProductTableProps = {
  products: ProductWithCategory
}

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-[#F8F0E6] p-5 rounded-2xl shadow-lg">
            <table className="min-w-full divide-y divide-amber-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-amber-800 sm:pl-0">
                    Producto
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-amber-800">
                    Precio
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-amber-800">
                    Categoría
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200">
                {products.map(product => (
                  <tr key={product.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-700 sm:pl-0">
                      {product.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-stone-700">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-stone-700">
                      {product.categoryId}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="text-amber-600 hover:text-amber-700">
                        Editar <span className="sr-only">, {product.name} </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
