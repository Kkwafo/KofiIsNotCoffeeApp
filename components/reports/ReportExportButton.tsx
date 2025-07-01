"use client";
import { DailyProductReport } from '@/src/utils/generate-daily-product-report';
import { utils, writeFile } from "xlsx";

type ReportExportButtonProps = {
  reportData: DailyProductReport[];
};

export default function ReportExportButton({ reportData }: ReportExportButtonProps) {
  const handleExport = () => {
    if (!reportData || reportData.length === 0) return;

    // Transformar data a formato plano
    const data = reportData.map((row) => ({
      Producto: row.productName,
      Cantidad: row.quantitySold,
      Subtotal: row.subtotal,
      Categoría: row.categoryName,
    }));

    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Reporte");
    writeFile(workbook, `reporte-ventas-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  return (
    <div className="flex justify-center my-8">
      <button
        type="button"
        onClick={handleExport}
        className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white text-lg font-bold rounded-2xl shadow-lg px-8 py-4 text-center transition duration-300 w-full lg:w-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl animate-pulse"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform group-hover:scale-125 group-hover:rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m6-9v4M6 4v4" />
        </svg>
        <span className="z-10">Exportar Reporte</span>
      </button>
    </div>
  );
}
