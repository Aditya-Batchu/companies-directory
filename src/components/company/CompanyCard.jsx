// Industry colour map for badge accents
const industryColors = {
  Technology: "bg-blue-100 text-blue-700",
  Finance: "bg-emerald-100 text-emerald-700",
  Automotive: "bg-orange-100 text-orange-700",
  Entertainment: "bg-purple-100 text-purple-700",
  "E-Commerce": "bg-pink-100 text-pink-700",
  "Food & Beverage": "bg-yellow-100 text-yellow-700",
  Engineering: "bg-cyan-100 text-cyan-700",
  Energy: "bg-red-100 text-red-700",
  "Luxury Goods": "bg-rose-100 text-rose-700",
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
  const { name, location, industry, employees } = company;
  const badgeClass =
    industryColors[industry] || "bg-slate-100 text-slate-600";

  return (
    <div className="rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition-shadow duration-200 flex flex-col gap-4 border border-slate-100">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {getInitials(name)}
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 text-base leading-tight">{name}</h3>
          <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {location}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeClass}`}>
          {industry}
        </span>
        <span className="text-xs text-slate-400 font-medium">
          {employees.toLocaleString()} employees
        </span>
      </div>
    </div>
  );
}
