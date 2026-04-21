import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Home />
    </div>
  );
}
