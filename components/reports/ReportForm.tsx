export default function ReportFilterForm() {
  return (
    <div className="bg-[#F8F0E6] p-6 rounded-2xl shadow-lg max-w-4xl mx-auto space-y-6">
      <div className="space-y-2">
        <label htmlFor="reportType" className="text-amber-800 font-semibold">Tipo de Reporte:</label>
        <select
          id="reportType"
          name="reportType"
          className="block w-full p-3 rounded-lg border border-amber-300 bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
        >
          <option value="">Seleccione un reporte...</option>
          <option value="dailySales">Ventas del Día</option>
          <option value="products">Productos Vendidos</option>
          <option value="inventory">Inventario Actual</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fromDate" className="text-amber-800 font-semibold">Desde:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            className="block w-full p-3 rounded-lg border border-amber-300 bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="toDate" className="text-amber-800 font-semibold">Hasta:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            className="block w-full p-3 rounded-lg border border-amber-300 bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-amber-500 hover:bg-amber-600 text-white w-full py-3 uppercase font-bold rounded-lg cursor-pointer transition duration-300"
      >
        Generar Reporte
      </button>
    </div>
  )
}
