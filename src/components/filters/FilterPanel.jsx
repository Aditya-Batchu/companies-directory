import { useDispatch, useSelector } from "react-redux";
import { setLocation, setIndustry } from "../../features/companies/companySlice";
import {
  selectFilters,
  selectLocations,
  selectIndustries,
} from "../../features/companies/companySelectors";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const { location, industry } = useSelector(selectFilters);
  const locations = useSelector(selectLocations);
  const industries = useSelector(selectIndustries);

  return (
    <div className="flex flex-wrap gap-3">
      {/* Location filter */}
      <select
        value={location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
        className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-600"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      {/* Industry filter */}
      <select
        value={industry}
        onChange={(e) => dispatch(setIndustry(e.target.value))}
        className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-600"
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  );
}
