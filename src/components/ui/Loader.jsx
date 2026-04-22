export default function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="animate-pulse space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-xl bg-slate-200" />
              <div className="flex-1 space-y-3 pt-1">
                <div className="h-5 w-2/3 rounded-full bg-slate-200" />
                <div className="h-5 w-24 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-4 w-full rounded-full bg-slate-200" />
              <div className="h-4 w-5/6 rounded-full bg-slate-200" />
            </div>

            <div className="space-y-3 pt-1">
              <div className="h-4 w-3/4 rounded-full bg-slate-200" />
              <div className="h-4 w-2/3 rounded-full bg-slate-200" />
              <div className="h-4 w-1/2 rounded-full bg-slate-200" />
            </div>

            <div className="h-11 w-full rounded-xl bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
