import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/companies/companySlice";
import { selectFilters } from "../../features/companies/companySelectors";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { search } = useSelector(selectFilters);

  return (
    <div className="relative w-full">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="border border-slate-200 rounded-lg pl-9 pr-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
      />
    </div>
  );
}
