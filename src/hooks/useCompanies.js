import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies } from "../features/companies/companySlice";
import {
  selectPaginatedCompanies,
  selectTotalPages,
  selectTotalResults,
  selectStatus,
  selectFilters,
  selectPagination,
  selectLocations,
  selectIndustries,
} from "../features/companies/companySelectors";
import companiesData from "../data/companies.json";

export function useCompanies() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate async loading
    dispatch(loadCompanies(companiesData));
  }, [dispatch]);

  return {
    companies: useSelector(selectPaginatedCompanies),
    totalPages: useSelector(selectTotalPages),
    totalResults: useSelector(selectTotalResults),
    status: useSelector(selectStatus),
    filters: useSelector(selectFilters),
    pagination: useSelector(selectPagination),
    locations: useSelector(selectLocations),
    industries: useSelector(selectIndustries),
  };
}
