import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../features/companies/companySlice";
import {
  selectPagination,
  selectTotalPages,
} from "../../features/companies/companySelectors";

export default function Pagination() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectPagination);
  const totalPages = useSelector(selectTotalPages);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => dispatch(setPage(currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        ← Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => dispatch(setPage(page))}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => dispatch(setPage(currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next →
      </button>
    </div>
  );
}
