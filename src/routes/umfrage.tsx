import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/umfrage")({
  head: () => ({
    meta: [
      { title: "Umfrage zur KI-Nutzung" },
      { name: "description", content: "Nimm an unserer Umfrage teil und teile uns mit, wie du KI nutzt." },
      { property: "og:title", content: "KI-Umfrage" },
      { property: "og:description", content: "Was denkst du über KI? Hilf uns, ein Stimmungsbild zu zeichnen." },
    ],
  }),
  component: UmfragePage,
});

const blocks = [
  {
    title: "Wissen & Bewusstsein",
    items: [
      "Benutzt du täglich KI?",
      "Wo glaubst du, KI zu benutzen?",
      "Wusstest du, dass TikTok & Instagram KI nutzen?",
      "Welche ökologischen Auswirkungen hat KI?",
    ],
  },
  {
    title: "Meinung",
    items: [
      "Macht dir KI Angst?",
      "Soll KI stärker reguliert werden?",
      "Vertraust du KI-generierten Informationen?",
    ],
  },
  {
    title: "Nutzung",
    items: [
      "Hast du schon ChatGPT benutzt?",
      "Wie oft nutzt du KI-Tools für Schule oder Arbeit?",
      "Profitierst du von KI? (Ja / Ich werde fauler / Es verschlechtert meinen Alltag)",
    ],
  },
  {
    title: "Zukunft",
    items: [
      "Wird KI mehr Jobs ersetzen?",
      "Wird KI unser Leben verbessern?",
      "Unter welchen Bedingungen würdest du KI mehr nutzen?",
    ],
  },
];

function UmfragePage() {
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <article className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">(03) Umfrage</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 text-balance">DEINE STIMME ZÄHLT.</h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[65ch]">
          Wir untersuchen, wie bewusst Menschen KI nutzen — und was sie sich von KI in der
          Zukunft wünschen. Die Umfrage dauert ca. 4 Minuten.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://forms.office.com/e/gm2TCSmkZ4"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 font-bold tracking-tight hover:brightness-110 transition-all"
          >
            ZUR EXTERNEN UMFRAGE ↗
          </a>
          <a
            href="#fragen"
            className="border border-foreground px-8 py-4 font-bold tracking-tight hover:bg-foreground hover:text-background transition-all"
          >
            FRAGEN ANSEHEN
          </a>
        </div>

        <section id="fragen" className="mt-24 grid md:grid-cols-2 gap-px bg-border border border-border">
          {blocks.map((b) => (
            <div key={b.title} className="bg-background p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">{b.title}</h3>
              <ul className="space-y-3">
                {b.items.map((q, i) => (
                  <li key={q} className="flex gap-3">
                    <span className="font-mono text-xs text-muted-foreground mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-24 border-t border-border pt-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">WÜNSCHE & IDEEN</h2>
          <p className="mt-4 text-muted-foreground max-w-[55ch]">
            In welchem Bereich sollte KI mehr eingesetzt werden? Was wünschst du dir konkret?
          </p>
          <form
            className="mt-8 max-w-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setWish("");
            }}
          >
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="z. B. Umweltschutz, Pflege, Bildung, Forschung..."
              className="w-full h-32 bg-[color:var(--surface)] border border-border p-4 text-sm focus:border-primary outline-none transition-colors"
              required
            />
            <div className="mt-4 flex items-center gap-4">
              <button className="bg-foreground text-background px-6 py-3 font-bold text-sm tracking-tight">
                ABSENDEN
              </button>
              {submitted && (
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  ✓ Danke für deinen Beitrag
                </span>
              )}
            </div>
          </form>
        </section>
      </div>
    </article>
  );
}
