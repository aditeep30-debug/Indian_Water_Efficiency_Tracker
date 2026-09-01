import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DISCREPANCIES,
  KIND_LABEL,
  SOURCES,
  THEME_LABEL,
  type DiscrepancyRow,
  type GapKind,
  type GapTheme,
} from "@/data/india-water";
import { cn } from "@/lib/utils";

const THEMES: Array<GapTheme | "all"> = [
  "all",
  "efficiency",
  "access",
  "groundwater",
  "irrigation",
  "resources",
];
const KINDS: Array<GapKind | "all"> = ["all", "divergent", "definitional", "aligned"];

function KindBadge({ kind }: { kind: GapKind }) {
  const variant = kind === "divergent" ? "danger" : kind === "aligned" ? "accent" : "outline";
  return <Badge variant={variant}>{KIND_LABEL[kind]}</Badge>;
}

function Row({ row, open, onToggle }: { row: DiscrepancyRow; open: boolean; onToggle: () => void }) {
  const min = SOURCES[row.ministrySource];
  const glob = SOURCES[row.globalSource];
  return (
    <article className="rounded-xl bg-inset">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full min-h-11 items-start gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <KindBadge kind={row.kind} />
            <span className="text-xs tracking-wide text-faint uppercase">
              {THEME_LABEL[row.theme]} · {row.year}
            </span>
          </div>
          <h3 className="mt-1 font-display text-base font-semibold tracking-tight">{row.indicator}</h3>
          <p className="mt-1 font-mono text-xs text-accent">{row.gap}</p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 size-4 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="grid gap-3 border-t border-border px-4 py-4 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-wide text-faint uppercase">Indian official</p>
            <p className="mt-1 text-sm leading-relaxed text-fg">{row.ministry}</p>
            <p className="mt-2 text-xs text-muted">
              {min.label} · {min.publisher} ({min.year})
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wide text-faint uppercase">Global journals / FAO / WB / JMP</p>
            <p className="mt-1 text-sm leading-relaxed text-fg">{row.global}</p>
            <p className="mt-2 text-xs text-muted">
              {glob.label} · {glob.publisher} ({glob.year})
            </p>
          </div>
          <div className="md:col-span-2 rounded-lg bg-surface px-3 py-3">
            <p className="text-xs tracking-wide text-accent uppercase">Why the figures differ</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{row.why}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function DiscrepancyTable() {
  const [theme, setTheme] = useState<GapTheme | "all">("all");
  const [kind, setKind] = useState<GapKind | "all">("all");
  const [openId, setOpenId] = useState<string | null>(DISCREPANCIES[0]?.id ?? null);

  const rows = useMemo(
    () =>
      DISCREPANCIES.filter((r) => (theme === "all" ? true : r.theme === theme)).filter((r) =>
        kind === "all" ? true : r.kind === kind,
      ),
    [theme, kind],
  );

  return (
    <Card id="compare" className="scroll-mt-20">
      <CardHeader>
        <CardTitle>Ministry data vs global datasets</CardTitle>
        <CardDescription>
          Ten documented collisions — not a scorecard of who is right. Filter by theme or by whether
          the gap is a real divergence, a definition mismatch, or an aligned story told in different
          units. Open a row for sources and the reconciliation.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            {THEMES.map((t) => (
              <Button
                key={t}
                size="sm"
                variant={theme === t ? "default" : "secondary"}
                onClick={() => setTheme(t)}
              >
                {t === "all" ? "All themes" : THEME_LABEL[t]}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {KINDS.map((k) => (
              <Button
                key={k}
                size="sm"
                variant={kind === k ? "default" : "ghost"}
                onClick={() => setKind(k)}
              >
                {k === "all" ? "All gap types" : KIND_LABEL[k]}
              </Button>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted">
          {rows.length} of {DISCREPANCIES.length} comparisons
        </p>
        <div className="flex flex-col gap-2">
          {rows.map((row) => (
            <Row
              key={row.id}
              row={row}
              open={openId === row.id}
              onToggle={() => setOpenId((id) => (id === row.id ? null : row.id))}
            />
          ))}
          {rows.length === 0 ? (
            <p className="rounded-xl bg-inset px-4 py-6 text-center text-sm text-muted">
              No comparisons in this filter.
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
