"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function ReportTypeSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedType = searchParams.get("type") || "daily";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    router.push(`/admin/reports?type=${type}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center my-8 bg-[#F8F0E6] p-4 rounded-xl shadow-md">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="reportType"
          value="daily"
          checked={selectedType === "daily"}
          onChange={handleChange}
          className="accent-amber-500 w-5 h-5"
        />
        <span className="text-amber-800 font-semibold">Ventas del Día</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="reportType"
          value="morning"
          checked={selectedType === "morning"}
          onChange={handleChange}
          className="accent-amber-500 w-5 h-5"
        />
        <span className="text-amber-800 font-semibold">Ventas Turno Mañana (6-18)</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="reportType"
          value="evening"
          checked={selectedType === "evening"}
          onChange={handleChange}
          className="accent-amber-500 w-5 h-5"
        />
        <span className="text-amber-800 font-semibold">Ventas Turno Tarde (18-6)</span>
      </label>
    </div>
  );
}
