import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setSearch } from "../../features/companies/companySlice";
import { selectFilters } from "../../features/companies/companySelectors";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { search } = useSelector(selectFilters);

  const handleReset = () => {
    dispatch(resetFilters());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-shadow focus-within:border-cyan-300 focus-within:shadow-md">
      <div className="relative flex-1 min-w-0">
        <svg
          className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full border-0 bg-transparent pl-7 pr-2 py-1.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </div>

      <button
        type="button"
        onClick={handleReset}
        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.1}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 20v-6h-6" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 8a8 8 0 0 0-14-3L4 10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16a8 8 0 0 0 14 3l2-6"
          />
        </svg>
        Reset
      </button>
    </div>
  );
}
