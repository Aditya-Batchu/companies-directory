import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../features/companies/companySlice";
import { selectFilters } from "../../features/companies/companySelectors";

const sortOptions = [
  { value: "", label: "Default Order" },
  { value: "name_asc", label: "Name: A → Z" },
  { value: "name_desc", label: "Name: Z → A" },
];

export default function SortDropdown() {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilters);

  return (
    <select
      value={sort}
      onChange={(e) => dispatch(setSort(e.target.value))}
      className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-600"
    >
      {sortOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
