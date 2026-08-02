import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PracticePage from "./pages/PracticePage";
import ResultsPage from "./pages/ResultsPage";

type Page = "landing" | "practice" | "results";

type ResultStats = {
  totalProblems: number;
  problemsWithMistakes: number;
  totalMistakes: number;
};

function App() {
  const [page, setPage] = useState<Page>("landing");
  const [resultStats, setResultStats] = useState<ResultStats | null>(null);

  const handleComplete = (stats: ResultStats) => {
    setResultStats(stats);
    setPage("results");
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      {page === "landing" ? (
        <LandingPage onStart={() => setPage("practice")} />
      ) : page === "practice" ? (
        <PracticePage onComplete={handleComplete} />
      ) : resultStats ? (
        <ResultsPage stats={resultStats} onRestart={() => setPage("landing")} />
      ) : null}
    </main>
  );
}

export default App;
