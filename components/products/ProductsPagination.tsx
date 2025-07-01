import Link from 'next/link';

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};

export default function ProductPagination({ page, totalPages }: ProductsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center py-10 gap-2">
      {page > 1 && (
        <Link
          href={`/admin/products?page=${page - 1}`}
          className="bg-[#F8F0E6] hover:bg-amber-200 px-4 py-2 text-sm text-gray-800 font-semibold rounded-md ring-1 ring-amber-300 transition"
        >
          &laquo;
        </Link>
      )}
      {pages.map((currentPage) => (
        <Link
          key={currentPage}
          href={`/admin/products?page=${currentPage}`}
          className={`px-4 py-2 text-sm rounded-md ring-1 ring-amber-300 transition font-semibold ${page === currentPage
              ? 'bg-amber-500 text-white'
              : 'bg-[#F8F0E6] hover:bg-amber-200 text-gray-800'
            }`}
        >
          {currentPage}
        </Link>
      ))}
      {page < totalPages && (
        <Link
          href={`/admin/products?page=${page + 1}`}
          className="bg-[#F8F0E6] hover:bg-amber-200 px-4 py-2 text-sm text-gray-800 font-semibold rounded-md ring-1 ring-amber-300 transition"
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
