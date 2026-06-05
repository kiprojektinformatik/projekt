import { Link } from "@tanstack/react-router";

const links = [
  { to: "/potential", label: "(01) Potential" },
  { to: "/oekologisch", label: "(02) Ökologie" },
  { to: "/umfrage", label: "(03) Umfrage" },
  { to: "/quiz", label: "(04) Quiz" },
  { to: "/chatbot", label: "(05) Chatbot" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-mono text-xs tracking-tighter bg-foreground text-background px-1.5 py-0.5">
          KI.PROJEKT_2026
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[10px] uppercase tracking-widest hover:text-primary transition-colors"
              activeProps={{ className: "font-mono text-[10px] uppercase tracking-widest text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/quellen"
          className="font-mono text-[10px] uppercase tracking-widest border border-foreground/20 px-3 py-1 hover:bg-foreground hover:text-background transition-all"
        >
          Quellen
        </Link>
      </div>
    </nav>
  );
}
