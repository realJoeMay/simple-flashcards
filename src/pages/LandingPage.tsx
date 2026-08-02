type LandingPageProps = {
  onStart: () => void;
};

function LandingPage({ onStart }: LandingPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Math Flashcards</h1>

        <p className="mt-3 text-lg text-slate-600">
          Click the button to begin practice.
        </p>

        <button
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          type="button"
          onClick={onStart}
        >
          Start Practice
        </button>
      </section>
    </main>
  );
}

export default LandingPage;
