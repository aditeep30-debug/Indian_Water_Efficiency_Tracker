import { Droplets } from "lucide-react";

const NAV = [
  { href: "#ledger", label: "Efficiency" },
  { href: "#compare", label: "Compare" },
  { href: "#climate", label: "Climate" },
  { href: "#groundwater", label: "Groundwater" },
  { href: "#access", label: "Access" },
  { href: "#sources", label: "Sources" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-2.5 text-fg">
          <span className="flex size-8 items-center justify-center rounded-md bg-accent/15 text-accent">
            <Droplets className="size-4" strokeWidth={2} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Jal Rekha</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-[11px] tracking-wide text-faint md:text-xs">1990–2023</p>
      </div>
    </header>
  );
}
