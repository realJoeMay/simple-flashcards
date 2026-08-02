type ResultsPageProps = {
  onRestart: () => void;
};

export default function ResultsPage({ onRestart }: ResultsPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Results</h1>

        <p className="mt-3 text-lg text-slate-600">
          Nice work. You answered all three problems correctly.
        </p>

        <button
          type="button"
          onClick={onRestart}
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Back to Landing Page
        </button>
      </section>
    </main>
  );
}
