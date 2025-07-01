import Heading from '@/components/ui/Heading';
import ReportTable from '@/components/reports/ReportTable';
import { generateDailyProductReport } from '@/src/utils/generate-daily-product-report';

export default async function ReportPage() {
  const reportData = await generateDailyProductReport();

  return (
    <>
      <Heading>Reportes - Ventas del Día</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch gap-6 my-8 flex-wrap">
        <button
          type="button"
          className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-base font-bold rounded-lg shadow-md px-6 py-2 text-center transition w-full lg:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m6-9v4M6 4v4" />
          </svg>
          <span>Exportar Reporte</span>
        </button>
      </div>

      <ReportTable reportData={reportData} />
    </>
  );
}
