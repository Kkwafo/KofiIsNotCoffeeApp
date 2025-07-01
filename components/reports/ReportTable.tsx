import { formatCurrency } from '@/src/utils';
import { DailyProductReport } from '@/src/utils/generate-daily-product-report';

type ReportTableProps = {
  reportData: DailyProductReport[];
};

export default function ReportTable({ reportData }: ReportTableProps) {
  const totalSubtotal = reportData.reduce((sum, row) => sum + row.subtotal, 0);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-[#F8F0E6] p-5 rounded-2xl shadow-lg">
            <table className="min-w-full divide-y divide-amber-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-amber-800 sm:pl-0">
                    Producto
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-amber-800">
                    Cantidad Vendida
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-amber-800">
                    Subtotal
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-amber-800">
                    Categoría
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200">
                {reportData.map((row) => (
                  <tr key={row.productId}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-700 sm:pl-0">
                      {row.productName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-stone-700">
                      {row.quantitySold}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-stone-700">
                      {formatCurrency(row.subtotal)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-stone-700">
                      {row.categoryName}
                    </td>
                  </tr>
                ))}
                {/* Fila de total */}
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-bold text-amber-800 sm:pl-0" colSpan={2}>
                    Total
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg font-bold text-amber-800">
                    {formatCurrency(totalSubtotal)}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
