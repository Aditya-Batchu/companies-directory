import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import AddCompanyModal from "./components/company/AddCompanyModal";
import Home from "./pages/Home";

export default function App() {
  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onAddCompany={() => setIsAddCompanyOpen(true)} />
      <Home />
      <AddCompanyModal
        isOpen={isAddCompanyOpen}
        onClose={() => setIsAddCompanyOpen(false)}
      />
    </div>
  );
}
