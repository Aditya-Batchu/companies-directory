import { getUniqueValues } from "../../utils/filterUtils";

export const selectAllCompanies = (state) => state.companies.companies;
export const selectFilters = (state) => state.companies.filters;
export const selectStatus = (state) => state.companies.status;
export const selectPagination = (state) => state.companies.pagination;

// Returns companies from page 1 up to the current page for infinite scrolling
export const selectPaginatedCompanies = (state) => {
  const { filteredCompanies } = state.companies;
  const { currentPage, itemsPerPage } = state.companies.pagination;
  const end = currentPage * itemsPerPage;
  return filteredCompanies.slice(0, end);
};

export const selectTotalPages = (state) => {
  const { filteredCompanies } = state.companies;
  const { itemsPerPage } = state.companies.pagination;
  return Math.ceil(filteredCompanies.length / itemsPerPage);
};

export const selectTotalResults = (state) =>
  state.companies.filteredCompanies.length;

export const selectLocations = (state) =>
  getUniqueValues(state.companies.companies, "location");

export const selectIndustries = (state) =>
  getUniqueValues(state.companies.companies, "industry");
