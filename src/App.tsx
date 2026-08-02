import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PracticePage from "./pages/PracticePage";
import ResultsPage from "./pages/ResultsPage";

type Page = "landing" | "practice" | "results";

function App() {
  const [page, setPage] = useState<Page>("landing");

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      {page === "landing" ? (
        <LandingPage onStart={() => setPage("practice")} />
      ) : page === "practice" ? (
        <PracticePage onComplete={() => setPage("results")} />
      ) : (
        <ResultsPage onRestart={() => setPage("landing")} />
      )}
    </main>
  );
}

export default App;
