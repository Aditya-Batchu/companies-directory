import { createSlice } from "@reduxjs/toolkit";
import { applyFilters } from "../../utils/filterUtils";

const initialState = {
  companies: [],
  filteredCompanies: [],
  filters: {
    search: "",
    location: "",
    industry: "",
    sort: "",
  },
  pagination: {
    currentPage: 1,
    itemsPerPage: 6,
  },
  status: "idle", // idle | loading | success | error
};

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    loadCompanies(state, action) {
      state.status = "loading";
      state.companies = action.payload;
      state.filteredCompanies = action.payload;
      state.status = "success";
    },
    setSearch(state, action) {
      state.filters.search = action.payload;
      state.pagination.currentPage = 1;
      state.filteredCompanies = applyFilters(state.companies, state.filters);
    },
    setLocation(state, action) {
      state.filters.location = action.payload;
      state.pagination.currentPage = 1;
      state.filteredCompanies = applyFilters(state.companies, state.filters);
    },
    setIndustry(state, action) {
      state.filters.industry = action.payload;
      state.pagination.currentPage = 1;
      state.filteredCompanies = applyFilters(state.companies, state.filters);
    },
    setSort(state, action) {
      state.filters.sort = action.payload;
      state.pagination.currentPage = 1;
      state.filteredCompanies = applyFilters(state.companies, state.filters);
    },
    setPage(state, action) {
      const totalPages = Math.max(
        1,
        Math.ceil(
          state.filteredCompanies.length / state.pagination.itemsPerPage,
        ),
      );
      state.pagination.currentPage = Math.min(
        totalPages,
        Math.max(1, action.payload),
      );
    },
    addCompany(state, action) {
      state.companies.unshift(action.payload);
      state.filteredCompanies = applyFilters(state.companies, state.filters);
      state.pagination.currentPage = 1;
    },
  },
});

export const {
  loadCompanies,
  setSearch,
  setLocation,
  setIndustry,
  setSort,
  setPage,
  addCompany,
} = companySlice.actions;

export default companySlice.reducer;
