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
      <div className="mb-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50/60 p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">
              Company Explorer
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Browse Companies
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Discover, filter, and compare companies in a clean directory built
              for fast browsing and smooth exploration.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {totalResults} {totalResults === 1 ? "company" : "companies"} found
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="flex-1">
            <SearchBar />
          </div>
          <FilterPanel />
          <SortDropdown />
        </div>
      </div>

      {/* Company grid */}
      <CompanyList companies={companies} status={status} />
    </Container>
  );
}
