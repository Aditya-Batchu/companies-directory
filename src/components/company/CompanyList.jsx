import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import EmptyState from "../ui/EmptyState";
import CompanyGrid from "./CompanyGrid";
import { setPage } from "../../features/companies/companySlice";
import {
  selectPagination,
  selectStatus,
  selectTotalPages,
} from "../../features/companies/companySelectors";

export default function CompanyList({ companies, status }) {
  const dispatch = useDispatch();
  const sentinelRef = useRef(null);
  const [showIntroSkeleton, setShowIntroSkeleton] = useState(true);
  const { currentPage } = useSelector(selectPagination);
  const totalPages = useSelector(selectTotalPages);
  const currentStatus = useSelector(selectStatus);

  useEffect(() => {
    if (currentStatus !== "success") return;
    if (currentPage >= totalPages) return;

    const viewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (pageHeight <= viewportHeight + 120) {
      const timer = window.setTimeout(() => {
        dispatch(setPage(currentPage + 1));
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [currentPage, currentStatus, dispatch, totalPages, companies.length]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntroSkeleton(false);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (currentStatus !== "success") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentPage < totalPages) {
          dispatch(setPage(currentPage + 1));
        }
      },
      {
        root: null,
        rootMargin: "160px",
        threshold: 0.05,
      },
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [currentPage, currentStatus, dispatch, totalPages]);

  if (showIntroSkeleton || status === "loading") return <Loader />;
  if (status === "error") return <ErrorMessage />;
  if (companies.length === 0) return <EmptyState />;

  return (
    <>
      <CompanyGrid companies={companies} />
      <div ref={sentinelRef} className="h-10 w-full" aria-hidden="true" />
    </>
  );
}
