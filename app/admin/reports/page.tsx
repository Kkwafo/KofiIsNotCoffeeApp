import Heading from '@/components/ui/Heading';
import ReportTable from '@/components/reports/ReportTable';
import ReportTypeSelector from '@/components/reports/ReportTypeSelection';
import { generateProductReport } from '@/src/utils/generate-daily-product-report';
import ReportExportButton from '@/components/reports/ReportExportButton';

export default async function ReportPage({ searchParams }: { searchParams: { type?: string } }) {
  const reportType = searchParams.type || "daily";

  const now = new Date();
  let start: Date;
  let end: Date;

  if (reportType === "morning") {
    start = new Date(now);
    start.setHours(6, 0, 0, 0);
    end = new Date(now);
    end.setHours(18, 0, 0, 0);
  } else if (reportType === "evening") {
    start = new Date(now);
    start.setDate(now.getHours() < 6 ? now.getDate() - 1 : now.getDate());
    start.setHours(18, 0, 0, 0);
    end = new Date(now);
    if (now.getHours() < 6) end.setHours(6, 0, 0, 0);
    else {
      end.setDate(now.getDate() + 1);
      end.setHours(6, 0, 0, 0);
    }
  } else {
    start = new Date(now);
    start.setHours(0, 0, 0, 0);
    end = new Date(now);
    end.setHours(23, 59, 59, 999);
  }

  const reportData = await generateProductReport(start, end);

  return (
    <>
      <Heading>Reportes - Ventas</Heading>

      <ReportTypeSelector />

      <ReportExportButton reportData={reportData} />

      <ReportTable reportData={reportData} />
    </>
  );
}
