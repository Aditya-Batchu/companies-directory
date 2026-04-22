import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCompany } from "../../features/companies/companySlice";

const initialForm = {
  name: "",
  industry: "",
  location: "",
  employees: "",
  founded: "",
  description: "",
  website: "",
  image: "",
};

export default function AddCompanyModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCompany({
        id: Date.now(),
        name: form.name.trim(),
        industry: form.industry.trim(),
        location: form.location.trim(),
        employees: Number(form.employees),
        founded: Number(form.founded),
        description: form.description.trim(),
        website: form.website.trim(),
        image: form.image.trim(),
      }),
    );

    setForm(initialForm);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/45 px-4 py-8">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Add Company
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              All fields are required for company cards.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close add company dialog"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">
              Company Name
            </span>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Apex Manufacturing"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">Industry</span>
            <input
              required
              name="industry"
              value={form.industry}
              onChange={handleChange}
              placeholder="Engineering"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">Location</span>
            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Chicago, IL"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">
              Employees
            </span>
            <input
              required
              min="1"
              type="number"
              name="employees"
              value={form.employees}
              onChange={handleChange}
              placeholder="2100"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">
              Founded Year
            </span>
            <input
              required
              min="1800"
              max="2100"
              type="number"
              name="founded"
              value={form.founded}
              onChange={handleChange}
              placeholder="1972"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">
              Website URL
            </span>
            <input
              required
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">
              Image URL
            </span>
            <input
              required
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://images.example.com/company.jpg"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="space-y-1 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">
              Description
            </span>
            <textarea
              required
              rows={3}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Precision engineering and industrial automation parts."
              className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <div className="sm:col-span-2 mt-1 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md"
            >
              Add Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
