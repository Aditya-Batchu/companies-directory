import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import EmptyState from "../ui/EmptyState";
import CompanyGrid from "./CompanyGrid";

export default function CompanyList({ companies, status }) {
  if (status === "loading") return <Loader />;
  if (status === "error") return <ErrorMessage />;
  if (companies.length === 0) return <EmptyState />;

  return <CompanyGrid companies={companies} />;
}
