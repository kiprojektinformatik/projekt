import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/chatbot")({
  head: () => ({
    meta: [
      { title: "Chatbot — Frag die KI" },
      { name: "description", content: "Demo-Chatbot zum Thema KI: Stelle Fragen und sieh, wie Sprachmodelle antworten." },
      { property: "og:title", content: "KI-Chatbot Demo" },
      { property: "og:description", content: "Stelle dem Demo-Bot Fragen rund um KI, Ökologie und Anwendungsbereiche." },
    ],
  }),
  component: ChatPage,
});

type Msg = { role: "user" | "bot"; text: string };

const FAQ: { q: RegExp; a: string }[] = [
  { q: /(öko|strom|energie|umwelt|co2|klima)/i, a: "Eine ChatGPT-Anfrage verbraucht etwa 10× so viel Energie wie eine Google-Suche. Bis 2030 könnten Rechenzentren weltweit 945 TWh Strom benötigen — so viel wie ganz Japan." },
  { q: /(was ist ki|definition|künstliche intelligenz)/i, a: "KI sind Systeme, die Aufgaben lösen, für die normalerweise menschliche Intelligenz nötig wäre. Maschinelles Lernen ist ein Teilgebiet: Die KI lernt aus Daten, statt explizit programmiert zu werden." },
  { q: /(angst|gefahr|risiko)/i, a: "Risiken sind real — Fake News, Jobverlust, Überwachung. Aber Studien zeigen: Wer KI versteht und nutzt, hat tendenziell weniger diffuse Angst davor." },
  { q: /(beispiel|wo|anwendung|alltag)/i, a: "KI steckt überall: Social-Media-Algorithmen, Netflix-Empfehlungen, Sprachassistenten, Banken-Betrugserkennung, medizinische Diagnostik, Übersetzungen." },
  { q: /(fake|deepfake)/i, a: "KI kann Texte, Bilder, Videos und Stimmen täuschend echt erzeugen. Achte auf Quellen, prüfe Details (Hände, Reflektionen, Logik) — und probiere unser Quiz." },
];

function respond(input: string): string {
  for (const { q, a } of FAQ) if (q.test(input)) return a;
  return "Spannende Frage! Diese Demo antwortet nur auf KI-Themen wie Definition, Ökologie, Anwendungsbereiche, Angst und Fake News. Probier es nochmal mit einem dieser Stichwörter.";
}

function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! Ich bin ein Demo-Chatbot zum Thema KI. Frag mich z.B.: „Was ist KI?“ oder „Welchen ökologischen Impact hat KI?“" },
  ]);
  const [input, setInput] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: value }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: respond(value) }]);
    }, 400);
  }

  return (
    <article className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">(05) Chatbot</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 text-balance">FRAG DIE KI.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-[60ch]">
          Diese Demo zeigt, wie ein einfacher Chatbot funktioniert — mit vordefinierten Antworten
          zu KI-Themen. Echte Sprachmodelle wie ChatGPT funktionieren komplexer (und energieintensiver).
        </p>

        <div className="mt-12 border border-border bg-background">
          <div className="border-b border-border px-6 py-3 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest">KI-Demo-Bot</span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              <span className="size-2 rounded-full bg-primary" /> Online
            </span>
          </div>

          <div className="px-6 py-6 space-y-4 max-h-[420px] overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    m.role === "user"
                      ? "bg-foreground text-background px-4 py-3 max-w-[80%] text-sm"
                      : "bg-[color:var(--surface)] border border-border px-4 py-3 max-w-[80%] text-sm"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={send} className="border-t border-border flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Frag mich etwas über KI..."
              className="flex-1 px-6 py-4 bg-transparent outline-none text-sm"
            />
            <button className="bg-primary text-primary-foreground px-8 font-bold text-sm tracking-tight">
              SENDEN
            </button>
          </form>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Hinweis: Diese Demo läuft komplett offline mit Regeln — kein echtes Sprachmodell, kein Energieverbrauch.
        </p>
      </div>
    </article>
  );
}
