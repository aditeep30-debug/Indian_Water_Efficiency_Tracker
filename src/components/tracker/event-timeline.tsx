import { CloudRain, Droplets, Flame, Landmark, Wind } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EVENTS, type EventKind } from "@/data/india-water";
import { cn } from "@/lib/utils";

const KIND_META: Record<
  EventKind,
  { label: string; variant: "drought" | "flood" | "accent" | "danger" | "outline"; Icon: typeof Flame }
> = {
  drought: { label: "Drought", variant: "drought", Icon: Flame },
  flood: { label: "Flood", variant: "flood", Icon: CloudRain },
  cyclone: { label: "Cyclone", variant: "flood", Icon: Wind },
  heat: { label: "Heat", variant: "drought", Icon: Flame },
  policy: { label: "Policy", variant: "accent", Icon: Landmark },
};

export function EventTimeline({ year }: { year: number }) {
  return (
    <Card id="climate" className="scroll-mt-20">
      <CardHeader>
        <CardTitle>Climatic shocks and policy turns</CardTitle>
        <CardDescription>
          Droughts, floods, cyclones and the laws that answered them. The highlighted row is the
          year on the inspector. Efficiency series often dip the same year as a monsoon failure
          (2002, 2009, 2015) or a GDP shock (2020) — correlation, not a causal model.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-0 border-l border-border pl-5">
          {EVENTS.map((ev) => {
            const meta = KIND_META[ev.kind];
            const Icon = meta.Icon;
            const active = year >= ev.year && year <= (ev.endYear ?? ev.year);
            return (
              <li
                key={`${ev.year}-${ev.title}`}
                className={cn(
                  "-ml-8 grid grid-cols-[1.5rem_5.5rem_1fr] items-start gap-3 rounded-xl py-3 pr-2",
                  active && "bg-raised",
                )}
              >
                <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-surface text-muted shadow-border">
                  {ev.kind === "policy" ? (
                    <Droplets className="size-3 text-accent" />
                  ) : (
                    <Icon className="size-3" />
                  )}
                </span>
                <p className="pt-0.5 font-mono text-xs tabular-nums text-muted">
                  {ev.year}
                  {ev.endYear ? `–${ev.endYear}` : ""}
                </p>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-fg">{ev.title}</p>
                    <Badge variant={meta.variant}>{meta.label}</Badge>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{ev.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
