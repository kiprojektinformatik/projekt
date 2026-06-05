import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/potential")({
  head: () => ({
    meta: [
      { title: "Potential — Was KI heute und morgen kann" },
      { name: "description", content: "Aktuelle und zukünftige Anwendungsbereiche von Künstlicher Intelligenz." },
      { property: "og:title", content: "Potential von KI" },
      { property: "og:description", content: "Aktuelle und zukünftige Anwendungsbereiche von Künstlicher Intelligenz." },
    ],
  }),
  component: PotentialPage,
});

const today = [
  "Personalisierung in Social Media & Streaming",
  "Sprachmodelle wie ChatGPT für Texte & Code",
  "Bildgenerierung (Midjourney, DALL·E)",
  "Diagnose-Unterstützung in der Medizin",
  "Übersetzung & Spracherkennung in Echtzeit",
  "Betrugserkennung in Banken",
];
const tomorrow = [
  "Autonome Mobilität auf öffentlichen Strassen",
  "Personalisierte Medikamente durch KI-Forschung",
  "Adaptive Lernsysteme für jede Schulstufe",
  "Klimamodellierung & Energienetz-Optimierung",
  "Robotik im Alltag (Pflege, Haushalt)",
  "Wissenschaftliche Entdeckungen (Materialien, Proteine)",
];

function PotentialPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">(01) Potential</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 text-balance">
          WAS KI HEUTE — UND MORGEN — KANN.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[65ch]">
          KI ist keine Zukunftstechnologie mehr. Sie steckt in Suchmaschinen, in unserer
          Foto-App, in jedem Empfehlungssystem. Das eigentliche Potential liegt aber in den
          nächsten Jahren.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border mt-16">
          <div className="bg-background p-10">
            <h2 className="text-2xl font-black tracking-tighter mb-6">HEUTE</h2>
            <ul className="space-y-3">
              {today.map((t) => (
                <li key={t} className="flex gap-3 text-sm md:text-base">
                  <span className="font-mono text-primary">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-foreground text-background p-10">
            <h2 className="text-2xl font-black tracking-tighter mb-6">MORGEN</h2>
            <ul className="space-y-3">
              {tomorrow.map((t) => (
                <li key={t} className="flex gap-3 text-sm md:text-base">
                  <span className="font-mono text-primary">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-black tracking-tighter mb-4">Was ist KI eigentlich?</h3>
          <p className="text-muted-foreground max-w-[70ch]">
            Künstliche Intelligenz beschreibt Systeme, die Aufgaben lösen, für die normalerweise
            menschliche Intelligenz nötig wäre — Mustererkennung, Sprachverständnis, Entscheidungsfindung.{" "}
            <strong className="text-foreground">Maschinelles Lernen</strong> ist ein Teilgebiet:
            Das System lernt aus Daten, statt explizit programmiert zu werden.
          </p>
        </div>

        <div className="mt-16 flex gap-4">
          <Link to="/oekologisch" className="bg-primary text-primary-foreground px-8 py-4 font-bold tracking-tight">
            Aber zu welchem Preis? →
          </Link>
        </div>
      </div>
    </article>
  );
}
