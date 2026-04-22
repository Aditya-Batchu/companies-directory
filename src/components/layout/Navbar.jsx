export default function Navbar({ onAddCompany }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-[0_12px_40px_rgba(15,23,42,0.28)] backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-cyan-500/18 ring-1 ring-white/10">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-white">
              Companies <span className="text-cyan-300">Directory</span>
            </span>
            <span className="block text-xs text-slate-300">
              Explore, filter, and add companies with one clean workspace.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onAddCompany}
            className="inline-flex items-center gap-2 rounded-xl bg-white/12 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/18 shadow-lg shadow-cyan-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/18 hover:ring-white/28 hover:shadow-xl hover:shadow-cyan-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14M5 12h14"
              />
            </svg>
            Add Company
          </button>
        </div>
      </div>
    </header>
  );
}
