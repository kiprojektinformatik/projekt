import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — Mensch oder KI?" },
      { name: "description", content: "Erkennst du, ob ein Text oder Bild von einem Menschen oder einer KI stammt?" },
      { property: "og:title", content: "Mensch oder KI? — Das Quiz" },
      { property: "og:description", content: "Spielerisch testen, wie gut du KI-generierte Inhalte erkennst." },
    ],
  }),
  component: QuizPage,
});

type Q = { id: number; text: string; answer: "ki" | "mensch"; explain: string };

const QUESTIONS: Q[] = [
  { id: 1, text: "„Im Schimmer einer beinahe lautlosen Stadt suchen wir die Worte, die uns verbinden.“", answer: "ki", explain: "Generischer, blumiger Stil — typisch für Sprachmodelle." },
  { id: 2, text: "„Mein Hund hat heute meine Hausaufgaben gefressen. Im Ernst.“", answer: "mensch", explain: "Konkretes, alltägliches Detail mit lockerem Ton." },
  { id: 3, text: "„Die Konvergenz multimodaler Architekturen ermöglicht eine holistische Repräsentation des semantischen Raums.“", answer: "ki", explain: "Überladene Fachsprache und Floskeln." },
  { id: 4, text: "„Ich habe gestern den Bus verpasst und musste 40 Minuten warten — der Tag fing super an.“", answer: "mensch", explain: "Spezifisches Erlebnis mit Ironie." },
  { id: 5, text: "„In einer Welt voller Möglichkeiten ist es entscheidend, achtsam zu handeln und das Beste zu geben.“", answer: "ki", explain: "Inhaltsleere Aufmunterungs-Floskel." },
];

function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<("ki" | "mensch" | null)[]>(() => QUESTIONS.map(() => null));
  const done = step >= QUESTIONS.length;

  const score = useMemo(
    () => answers.reduce((acc, a, i) => acc + (a === QUESTIONS[i].answer ? 1 : 0), 0),
    [answers]
  );

  function pick(choice: "ki" | "mensch") {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = choice;
      return next;
    });
    setTimeout(() => setStep((s) => s + 1), 250);
  }

  function reset() {
    setAnswers(QUESTIONS.map(() => null));
    setStep(0);
  }

  return (
    <article className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">(04) Quiz</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 text-balance">MENSCH ODER KI?</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-[60ch]">
          Lies den folgenden Satz und entscheide: Hat ihn ein Mensch geschrieben — oder eine KI?
        </p>

        <div className="mt-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Frage {Math.min(step + 1, QUESTIONS.length)} / {QUESTIONS.length}</span>
          <span>Punkte: {score}</span>
        </div>
        <div className="h-1 bg-[color:var(--surface)] mt-3">
          <div className="h-1 bg-primary transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
        </div>

        {!done ? (
          <div className="mt-12 border border-border p-10 bg-background">
            <p className="text-2xl md:text-3xl font-bold tracking-tight text-balance">
              {QUESTIONS[step].text}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <button
                onClick={() => pick("mensch")}
                className="border border-foreground px-6 py-5 font-bold tracking-tight hover:bg-foreground hover:text-background transition-all"
              >
                MENSCH
              </button>
              <button
                onClick={() => pick("ki")}
                className="bg-primary text-primary-foreground px-6 py-5 font-bold tracking-tight hover:brightness-110 transition-all"
              >
                KI
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <div className="border border-border p-10 bg-foreground text-background">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Ergebnis</span>
              <p className="mt-3 text-4xl md:text-5xl font-black tracking-tighter">
                {score} / {QUESTIONS.length} richtig
              </p>
              <p className="mt-4 text-background/70">
                {score === QUESTIONS.length
                  ? "Perfekt. Du erkennst KI-Texte zuverlässig."
                  : score >= 3
                  ? "Solide. Aber KI wird immer besser — bleib kritisch."
                  : "KI hat dich überlistet. Genau darum geht es uns."}
              </p>
              <button
                onClick={reset}
                className="mt-8 bg-primary text-primary-foreground px-6 py-3 font-bold tracking-tight"
              >
                NOCHMAL SPIELEN
              </button>
            </div>

            <h2 className="mt-16 text-2xl font-black tracking-tighter">AUFLÖSUNG</h2>
            <ul className="mt-6 space-y-4">
              {QUESTIONS.map((q, i) => {
                const correct = answers[i] === q.answer;
                return (
                  <li key={q.id} className="border border-border p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Frage {i + 1} — Antwort: {q.answer.toUpperCase()}
                      </span>
                      <span className={`font-mono text-xs uppercase tracking-widest ${correct ? "text-primary" : "text-foreground/60"}`}>
                        {correct ? "✓ richtig" : "✗ falsch"}
                      </span>
                    </div>
                    <p className="text-sm">{q.text}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{q.explain}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
