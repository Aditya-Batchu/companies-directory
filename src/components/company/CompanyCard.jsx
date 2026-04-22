import { useEffect, useState } from "react";
import logoA from "../../assets/company-logos/logo-a.svg";
import logoB from "../../assets/company-logos/logo-b.svg";
import logoC from "../../assets/company-logos/logo-c.svg";
import logoD from "../../assets/company-logos/logo-d.svg";
import logoE from "../../assets/company-logos/logo-e.svg";
import logoF from "../../assets/company-logos/logo-f.svg";

const industryColors = {
  Technology: "bg-indigo-100 text-indigo-700",
  Finance: "bg-emerald-100 text-emerald-700",
  Automotive: "bg-orange-100 text-orange-700",
  Entertainment: "bg-fuchsia-100 text-fuchsia-700",
  "E-Commerce": "bg-pink-100 text-pink-700",
  "Food & Beverage": "bg-amber-100 text-amber-700",
  Engineering: "bg-cyan-100 text-cyan-700",
  Energy: "bg-rose-100 text-rose-700",
  "Luxury Goods": "bg-violet-100 text-violet-700",
};

const logos = [logoA, logoB, logoC, logoD, logoE, logoF];

const industryDescriptions = {
  Technology: "Building modern digital platforms and intelligent products.",
  Finance: "Delivering secure financial services for global markets.",
  Automotive: "Designing mobility solutions and vehicle innovation.",
  Entertainment: "Creating engaging media and streaming experiences.",
  "E-Commerce": "Powering online retail and seamless logistics.",
  "Food & Beverage": "Producing trusted food and beverage brands worldwide.",
  Engineering:
    "Providing precision engineering and industrial automation parts.",
  Energy: "Advancing reliable energy operations and sustainability goals.",
  "Luxury Goods": "Crafting premium products with timeless design standards.",
};

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function CompanyCard({ company }) {
  const [showFallback, setShowFallback] = useState(false);
  const {
    id,
    name,
    location,
    industry,
    employees,
    description,
    founded,
    website,
  } = company;
  const badgeClass = industryColors[industry] || "bg-slate-100 text-slate-600";
  const logo = company.image || logos[id % logos.length];
  const companyDescription =
    description ||
    industryDescriptions[industry] ||
    "Trusted company delivering quality services across regions.";
  const foundedYear = founded || 1950 + ((id * 7) % 70);
  const websiteUrl =
    website || `https://${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.com`;

  useEffect(() => {
    setShowFallback(false);
  }, [logo]);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex h-full flex-col gap-5">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 shrink-0">
          {!showFallback ? (
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-full w-full object-cover"
              onError={() => setShowFallback(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-800 text-sm font-bold text-white">
              {getInitials(name)}
            </div>
          )}
          <div className="sr-only">{getInitials(name)}</div>
        </div>
        <div className="min-w-0">
          <h3 className="text-[1.45rem] leading-tight font-semibold text-slate-900 truncate">
            {name}
          </h3>
          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
          >
            {industry}
          </span>
        </div>
      </div>

      <p className="text-[1.05rem] leading-relaxed text-slate-600 min-h-14">
        {companyDescription}
      </p>

      <div className="my-1 h-px bg-slate-200" />

      <div className="space-y-2.5 text-slate-600">
        <div className="flex items-center gap-2.5 text-[1.05rem]">
          <svg
            className="h-4 w-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[1.05rem]">
          <svg
            className="h-4 w-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5V4H2v16h5"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h.01M7 12h.01M7 16h.01M17 8h.01M17 12h.01M17 16h.01"
            />
          </svg>
          <span>{employees.toLocaleString()} Employees</span>
        </div>
        <div className="flex items-center gap-2.5 text-[1.05rem]">
          <svg
            className="h-4 w-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 2v4M16 2v4M3 10h18"
            />
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          </svg>
          <span>Founded {foundedYear}</span>
        </div>
      </div>

      <a
        href={websiteUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-[1.05rem] font-semibold text-slate-700 transition-colors hover:bg-slate-200"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
          />
        </svg>
        Visit Website
      </a>
    </article>
  );
}
