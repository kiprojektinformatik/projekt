import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/oekologisch")({
  head: () => ({
    meta: [
      { title: "Ökologischer Impact von KI" },
      { name: "description", content: "Energieverbrauch, CO₂-Emissionen und Rechenzentren: Der unsichtbare Fussabdruck von KI." },
      { property: "og:title", content: "Ökologischer Impact von KI" },
      { property: "og:description", content: "Bis 2030 verdreifacht sich der Stromverbrauch europäischer Rechenzentren. Hier sind die Zahlen." },
    ],
  }),
  component: OekoPage,
});

function OekoPage() {
  return (
    <article>
      <header className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">(02) Ökologisch</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 text-balance">
            DER UNSICHTBARE FUSSABDRUCK.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[65ch]">
            Hinter jedem generierten Bild und jedem Chatbot-Dialog verbirgt sich ein gigantischer
            Energiehunger. Eine einzelne Anfrage an einen Chatbot verbraucht deutlich mehr Energie
            als eine klassische Websuche.
          </p>
        </div>
      </header>

      <section className="py-24 border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Stat n="01" big="3.0x" sub={null} text="Der Energieverbrauch von Rechenzentren in Europa wird sich bis 2030 fast verdreifachen." />
            <Stat n="02" big="945" sub="Terawattstunden" text="Globaler Stromverbrauch der Rechenzentren bis 2030 — das entspricht dem gesamten Stromverbrauch Japans." />
            <Stat n="03" big="5%" sub={null} text="Anteil der Rechenzentren am gesamten europäischen Stromverbrauch bis zum Ende des Jahrzehnts." />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Verhältnis</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-4 mb-8 text-balance">
              VIEL STROM, WENIG CO₂?
            </h2>
            <p className="text-muted-foreground max-w-[55ch]">
              Trotz des massiven Stromverbrauchs liegt der globale Anteil von Rechenzentren an
              den CO₂-Emissionen laut Internationaler Energieagentur noch unter einem Prozent —
              dank effizienter Standorte und erneuerbarer Energie. Das könnte sich aber ändern.
            </p>

            <div className="space-y-6 mt-12">
              <Bar label="EU-Stromverbrauch durch Rechenzentren (2030)" value={5} />
              <Bar label="Globaler CO₂-Anteil von Rechenzentren" value={1} />
              <Bar label="Verbrauchszuwachs in EU bis 2030" value={97} highlight />
            </div>
          </div>

          <div className="bg-[color:var(--surface)] border border-border p-12 aspect-square grid place-items-center relative">
            <div className="size-64 rounded-full border-[24px] border-stone-200 relative">
              <div className="absolute inset-0 rounded-full border-[24px] border-primary border-t-transparent border-l-transparent rotate-45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black tracking-tighter">+240%</span>
                <span className="font-mono text-[10px] uppercase text-muted-foreground">Anfrage-Last</span>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 text-right">
              <span className="font-mono text-[10px] uppercase block opacity-50">Fig. 04</span>
              <span className="text-xs font-bold">Suche vs. Chatbot</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-8">CHANCEN & HERAUSFORDERUNGEN</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <h4 className="font-bold mb-3 text-primary">Chancen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>KI optimiert Stromnetze und Industrieprozesse</li>
                <li>Bessere Klimamodelle für präzisere Prognosen</li>
                <li>Effizientere Materialforschung</li>
              </ul>
            </div>
            <div className="border border-border p-8">
              <h4 className="font-bold mb-3 text-primary">Herausforderungen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>Trainingsläufe verschlingen Millionen kWh</li>
                <li>Wasserverbrauch zur Kühlung wird unterschätzt</li>
                <li>Hardware-Abfall durch immer schnellere Chip-Zyklen</li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/umfrage" className="bg-primary text-primary-foreground px-8 py-4 font-bold tracking-tight">
              An der Umfrage teilnehmen →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Stat({ n, big, sub, text }: { n: string; big: string; sub: string | null; text: string }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-primary text-xs uppercase tracking-widest">Statistik {n}</span>
      <div className="text-7xl font-black tracking-tighter">{big}</div>
      {sub && <span className="font-mono text-xl -mt-4">{sub}</span>}
      <p className="text-sm text-background/60 leading-relaxed">{text}</p>
    </div>
  );
}

function Bar({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between font-mono text-[10px] uppercase">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-4 bg-[color:var(--surface)] border border-border rounded-full overflow-hidden">
        <div
          className={highlight ? "h-full bg-primary" : "h-full bg-foreground"}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
