import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-ki.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KI-Konzept — Das Potential der Intelligenz" },
      { name: "description", content: "Interaktive Website über KI: Anwendungsbereiche, ökologischer Impact, Umfrage und Quiz." },
      { property: "og:title", content: "KI-Konzept — Das Potential der Intelligenz" },
      { property: "og:description", content: "Wie viel Intelligenz verträgt unser Klima? Eine interaktive Auseinandersetzung mit Künstlicher Intelligenz." },
    ],
  }),
  component: Index,
});

const areas = [
  { n: "01", cat: "Social Media", title: "Algorithmen", desc: "TikTok und Instagram entscheiden mit KI, welche Inhalte uns binden." },
  { n: "02", cat: "Medizin", title: "Diagnostik", desc: "Früherkennung von Krankheiten durch präzise Bildanalyse-KI." },
  { n: "03", cat: "Bildung", title: "Adaptives Lernen", desc: "Personalisierte Lernpfade und Sprachmodelle wie ChatGPT." },
  { n: "04", cat: "Mobilität", title: "Autonomes Fahren", desc: "Sensorfusion und Entscheidungslogik in Echtzeit." },
  { n: "05", cat: "Banking", title: "Betrugserkennung", desc: "Anomalie-Erkennung schützt Konten Sekunden nach dem Angriff." },
  { n: "06", cat: "Sicherheit", title: "Gesichtserkennung", desc: "Identifikation in Sekundenbruchteilen — zwischen Komfort und Risiko." },
  { n: "07", cat: "Sprache", title: "Assistenten", desc: "Siri, Alexa und Co. übersetzen Sprache in Aktionen." },
  { n: "08", cat: "Werbung", title: "Targeting", desc: "Profilbasierte Ausspielung auf Basis prädiktiver Modelle." },
  { n: "09", cat: "Streaming", title: "Empfehlungen", desc: "Netflix und YouTube kuratieren mithilfe von Kollaborationsfiltern." },
] as const;

function Index() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 max-w-[900px] animate-reveal">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Status: Teilweise mit KI erstellt
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-balance leading-[0.9]">
              DAS POTENTIAL <br />DER INTELLIGENZ
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground text-pretty max-w-[60ch] mt-6">
              Was ist das aktuelle sowie zukünftige Potential von KI, in welchen Ausmassen wird es
              gewünscht — und wie bewusst ist uns der ökologische Preis?
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/umfrage" className="bg-primary text-primary-foreground px-8 py-4 font-bold tracking-tight hover:brightness-110 transition-all">
                ZUR UMFRAGE
              </Link>
              <Link to="/quiz" className="border border-foreground px-8 py-4 font-bold tracking-tight hover:bg-foreground hover:text-background transition-all">
                WISSENSTEST
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-7xl mx-auto animate-reveal [animation-delay:200ms]">
          <img
            src={heroImg}
            alt="Visualisierung eines neuronalen Netzwerks"
            width={1920}
            height={896}
            className="w-full aspect-[21/9] object-cover outline outline-1 -outline-offset-1 outline-black/5 rounded-sm"
          />
          <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Fig. 01 — KI-Infrastruktur</span>
            <span>Bild generiert mit KI</span>
          </div>
        </div>
      </header>

      {/* Leitfrage / Hypothesen */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Leitfrage</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mt-4 text-balance">
              Wir untersuchen die Lücke zwischen Wissen, Nutzung und Bewusstsein.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-[55ch]">
              Zielgruppe: ab 12 Jahren, alle Menschen. Wir wollen herausfinden, wie viele von uns
              KI bereits täglich nutzen — und wie viele dabei wissen, was hinter den Kulissen passiert.
            </p>
          </div>
          <div className="space-y-6">
            <Hypothesis n="H1" text="Menschen sind sich nicht bewusst, wie gross das Potenzial von KI ist." />
            <Hypothesis n="H2" text="Die Menschen kennen die ökologischen Auswirkungen der KI-Nutzung nicht gut." />
            <Hypothesis n="H3" text="Viele fürchten sich vor KI und ihren Auswirkungen." />
            <Hypothesis n="H4" text="Die wenigsten verstehen, wie KI funktioniert oder definiert ist." />
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-4">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">WO KI HEUTE WIRKT</h3>
            <span className="font-mono text-xs text-muted-foreground mb-2">9 KATEGORIEN ANALYSIERT</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {areas.map((a) => (
              <div key={a.n} className="bg-background p-8 hover:bg-[color:var(--surface)] transition-colors">
                <span className="font-mono text-xs mb-4 block">{a.n} / {a.cat.toUpperCase()}</span>
                <h4 className="text-xl font-bold mb-4">{a.title}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quiz */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8">BIST DU BEREIT?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-[50ch] mx-auto">
            Teste dein Wissen: Kannst du KI-generierte Inhalte von echten unterscheiden?
          </p>
          <Link to="/quiz" className="inline-block bg-white text-primary px-12 py-5 font-black text-xl tracking-tighter hover:scale-105 transition-transform">
            JETZT TESTEN
          </Link>
        </div>
      </section>
    </>
  );
}

function Hypothesis({ n, text }: { n: string; text: string }) {
  return (
    <div className="border-l-2 border-primary pl-6">
      <span className="font-mono text-xs text-primary uppercase tracking-widest">{n}</span>
      <p className="mt-1 text-lg">{text}</p>
    </div>
  );
}
