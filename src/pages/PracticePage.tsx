import { useState } from "react";
import type { FormEvent } from "react";

type PracticePageProps = {
  onComplete: () => void;
};

const problems = [
  { n1: 3, n2: 2, op: "x", answer: 6 },
  { n1: 2, n2: 7, op: "x", answer: 14 },
  { n1: 7, n2: 7, op: "x", answer: 49 },
];

export default function PracticePage({ onComplete }: PracticePageProps) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const current = problems[index];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const numericAnswer = Number(answer.trim());
    if (numericAnswer === current.answer) {
      setAnswer("");
      setError("");

      if (index === problems.length - 1) {
        onComplete();
        return;
      }

      setIndex((prev) => prev + 1);
      return;
    }

    setError("That answer is not correct. Try again.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Practice</h1>

        <p className="mt-3 text-lg text-slate-600">
          Solve the current multiplication problem.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Problem</p>
          <p className="mt-3 text-4xl font-semibold text-slate-900">
            {current.n1} {current.op} {current.n2}
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-700" htmlFor="answer">
            Your answer
          </label>
          <input
            id="answer"
            name="answer"
            type="number"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg outline-none transition focus:border-blue-500"
            autoFocus
          />

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
          >
            Submit Answer
          </button>
        </form>
      </section>
    </main>
  );
}
