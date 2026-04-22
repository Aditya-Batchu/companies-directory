import Container from "../components/layout/Container";
import SearchBar from "../components/filters/SearchBar";
import FilterPanel from "../components/filters/FilterPanel";
import SortDropdown from "../components/filters/SortDropdown";
import CompanyList from "../components/company/CompanyList";
import { useCompanies } from "../hooks/useCompanies";

export default function Home() {
  const { companies, status, totalResults } = useCompanies();

  return (
    <Container>
      {/* Page heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Browse Companies</h1>
        <p className="text-sm text-slate-500 mt-1">
          {totalResults} {totalResults === 1 ? "company" : "companies"} found
        </p>
      </div>

      {/* Controls row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchBar />
        </div>
        <FilterPanel />
        <SortDropdown />
      </div>

      {/* Company grid */}
      <CompanyList companies={companies} status={status} />
    </Container>
  );
}
