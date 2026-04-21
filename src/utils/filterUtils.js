// Applies search, location, industry filters and sorting to the full companies list
export function applyFilters(companies, filters) {
  let result = [...companies];

  if (filters.search.trim()) {
    const term = filters.search.toLowerCase();
    result = result.filter((c) => c.name.toLowerCase().includes(term));
  }

  if (filters.location) {
    result = result.filter((c) => c.location === filters.location);
  }

  if (filters.industry) {
    result = result.filter((c) => c.industry === filters.industry);
  }

  if (filters.sort === "name_asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filters.sort === "name_desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
}

// Extracts unique values for a given key from a list of companies
export function getUniqueValues(companies, key) {
  return [...new Set(companies.map((c) => c[key]))].sort();
}
