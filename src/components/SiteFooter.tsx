import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="font-mono text-xs tracking-tighter bg-foreground text-background inline-block px-1.5 py-0.5 mb-6">
              KI_LOG_END
            </div>
            <p className="text-sm text-muted-foreground max-w-[40ch]">
              Ein Schulprojekt zur Informatik und den gesellschaftlichen sowie ökologischen Auswirkungen moderner KI-Systeme.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest mb-6">Register</h5>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li><Link to="/potential" className="hover:text-primary">Potential</Link></li>
              <li><Link to="/oekologisch" className="hover:text-primary">Ökologisch</Link></li>
              <li><Link to="/umfrage" className="hover:text-primary">Umfrage</Link></li>
              <li><Link to="/quiz" className="hover:text-primary">Quiz</Link></li>
              <li><Link to="/chatbot" className="hover:text-primary">Chatbot</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest mb-6">Quellen</h5>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li><Link to="/quellen" className="hover:text-primary">Verzeichnis ansehen</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
