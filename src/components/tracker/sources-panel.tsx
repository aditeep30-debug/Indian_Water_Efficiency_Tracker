import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SOURCES } from "@/data/india-water";

export function SourcesPanel() {
  const items = Object.values(SOURCES);
  return (
    <Card id="sources" className="scroll-mt-20">
      <CardHeader>
        <CardTitle>Sources</CardTitle>
        <CardDescription>
          Every chart on this ledger is built from the series below. FAO 6.4.1 values were pulled
          from the UN SDG Global Database (India, 2000–2023). World Bank series from the WDI API.
          Ministry figures from PIB releases and CGWB assessments. No interpolated official number
          is presented as a measurement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border">
          {items.map((s) => (
            <li key={s.url + s.label} className="py-3 first:pt-0 last:pb-0">
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-fg underline-offset-4 hover:text-accent hover:underline"
              >
                {s.label}
              </a>
              <p className="mt-0.5 text-xs text-muted">
                {s.publisher} · {s.year}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs leading-relaxed text-faint">
          This is a compiled tracker, not a government dashboard. Jal Jeevan Mission IMIS updates
          daily; figures here freeze at published 2023 checkpoints. FAO and World Bank revise
          historical estimates when national accounts or withdrawal data are restated.
        </p>
      </CardContent>
    </Card>
  );
}
