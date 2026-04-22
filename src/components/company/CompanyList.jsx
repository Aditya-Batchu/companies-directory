import { useEffect, useMemo, useRef, useState } from "react";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import EmptyState from "../ui/EmptyState";
import CompanyGrid from "./CompanyGrid";

export default function CompanyList({ companies, status }) {
  const sentinelRef = useRef(null);
  const batchSize = 6;
  const [showIntroSkeleton, setShowIntroSkeleton] = useState(true);
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const visibleCompanies = useMemo(
    () => companies.slice(0, visibleCount),
    [companies, visibleCount],
  );

  useEffect(() => {
    setVisibleCount(batchSize);
  }, [companies]);

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
    if (status !== "success") return;
    if (showIntroSkeleton) return;
    if (visibleCount >= companies.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((currentValue) =>
            Math.min(currentValue + batchSize, companies.length),
          );
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
  }, [batchSize, companies.length, showIntroSkeleton, status, visibleCount]);

  useEffect(() => {
    if (status !== "success") return;
    if (showIntroSkeleton) return;
    if (visibleCount >= companies.length) return;

    const viewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (pageHeight <= viewportHeight + 120) {
      const timer = window.setTimeout(() => {
        setVisibleCount((currentValue) =>
          Math.min(currentValue + batchSize, companies.length),
        );
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [batchSize, companies.length, showIntroSkeleton, status, visibleCount]);

  if (showIntroSkeleton || status === "loading") return <Loader />;
  if (status === "error") return <ErrorMessage />;
  if (companies.length === 0) return <EmptyState />;

  return (
    <>
      <CompanyGrid companies={visibleCompanies} />
      <div ref={sentinelRef} className="h-10 w-full" aria-hidden="true" />
    </>
  );
}
