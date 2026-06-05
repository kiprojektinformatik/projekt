import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quellen")({
  head: () => ({
    meta: [
      { title: "Quellenverzeichnis" },
      { name: "description", content: "Alle verwendeten Quellen und weiterführende Links zum KI-Projekt." },
      { property: "og:title", content: "Quellen — KI-Konzept" },
      { property: "og:description", content: "Quellenverzeichnis und weiterführende Links zum Schulprojekt." },
    ],
  }),
  component: QuellenPage,
});

const sources = [
  { n: "01", title: "Tableau — AI Examples", url: "https://www.tableau.com/de-de/data-insights/ai/examples" },
  { n: "02", title: "Soxes — KI Einsatzbereiche & Beispiele", url: "https://soxes.ch/innovation/ki-einsatzbereiche/beispiele/" },
  { n: "03", title: "THWS — Anwendungsbereiche der KI", url: "https://ki.thws.de/thematik/anwendungsbereiche-der-ki/" },
  { n: "04", title: "SRF Wissen — KI-Tools im Alltag", url: "https://www.srf.ch/wissen/kuenstliche-intelligenz/chatgpt-midjourney-und-co-welche-ki-tools-sind-nuetzlich-fuer-den-alltag" },
  { n: "05", title: "IT-Portal 24 — Ratgeber KI im Alltag", url: "https://www.itportal24.de/ratgeber/ki-im-alltag" },
  { n: "06", title: "International Energy Agency — Data Center Report 2024", url: "https://www.iea.org/reports" },
];

function QuellenPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">(06) Quellen</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 text-balance">QUELLEN­VER­ZEICHNIS.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-[60ch]">
          Alle Zahlen, Fakten und Beispiele auf dieser Website stammen aus folgenden Quellen.
        </p>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {sources.map((s) => (
            <li key={s.n} className="py-6 flex items-start gap-6 hover:bg-[color:var(--surface)] transition-colors px-2">
              <span className="font-mono text-xs text-primary mt-1">[{s.n}]</span>
              <div className="flex-1">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:text-primary underline-offset-4 hover:underline"
                >
                  {s.title}
                </a>
                <p className="font-mono text-[11px] text-muted-foreground mt-1 break-all">{s.url}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
