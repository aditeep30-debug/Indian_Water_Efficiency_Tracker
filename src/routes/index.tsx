import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Scale } from "lucide-react";
import { DiscrepancyTable } from "@/components/tracker/discrepancy-table";
import { EventTimeline } from "@/components/tracker/event-timeline";
import {
  AccessChart,
  GroundwaterChart,
  IrrigationChart,
  PerCapitaChart,
  WithdrawalChart,
} from "@/components/tracker/resource-charts";
import { SectorChart } from "@/components/tracker/sector-chart";
import { SiteHeader } from "@/components/tracker/site-header";
import { SourcesPanel } from "@/components/tracker/sources-panel";
import { WueChart } from "@/components/tracker/wue-chart";
import { YearPanel } from "@/components/tracker/year-panel";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FAO_WUE_AG, FAO_WUE_TOTAL, JJM_TAPS, PER_CAPITA_M3 } from "@/data/india-water";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [year, setYear] = useState(2023);
  const fao0 = FAO_WUE_TOTAL[0];
  const faoN = FAO_WUE_TOTAL.at(-1);
  const ag0 = FAO_WUE_AG[0];
  const agN = FAO_WUE_AG.at(-1);
  const capita0 = PER_CAPITA_M3[0];
  const capitaN = PER_CAPITA_M3.at(-1);
  const jjm0 = JJM_TAPS[0];
  const jjmN = JJM_TAPS.at(-1);
  const wueGain =
    fao0 && faoN ? Math.round(((faoN.value - fao0.value) / fao0.value) * 100) : 0;
  const agGain = ag0 && agN ? Math.round(((agN.value - ag0.value) / ag0.value) * 100) : 0;

  return (
    <TooltipProvider delayDuration={200}>
      <div id="top" className="min-h-dvh bg-bg text-fg">
        <SiteHeader />
        <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:gap-10 md:px-6 md:py-12">
          <section className="relative overflow-hidden rounded-2xl bg-surface px-5 py-8 shadow-border md:px-10 md:py-12">
            <div className="ledger-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative max-w-3xl">
              <p className="text-xs tracking-widest text-accent uppercase">India · 1990–2023</p>

              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Jal Rekha
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                A ledger of water-efficiency achievements — farm, factory, tap and aquifer — with
                the official number and the global number sitting in the same row. Where they
                disagree, the disagreement is the story.
              </p>
            </div>
            <dl className="relative mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Kpi
                label="FAO WUE 2000→2023"
                value={`${fao0?.value.toFixed(2)} → ${faoN?.value.toFixed(2)}`}
                hint={`+${wueGain}% USD/m³`}
              />
              <Kpi
                label="Agricultural WUE"
                value={`${ag0?.value} → ${agN?.value}`}
                hint={`+${agGain}% FAO 6.4.1`}
              />
              <Kpi
                label="Rural tap connections"
                value={`${jjm0?.pct}% → ${jjmN?.pct}%`}
                hint="Jal Jeevan Mission"
              />
              <Kpi
                label="Per-capita water"
                value={`${capita0?.value} → ${capitaN?.value}`}
                hint="m³, CWC / PIB"
              />
            </dl>
            <a
              href="#compare"
              className="relative mt-8 inline-flex h-11 items-center gap-2 text-sm text-accent"
            >
              <Scale className="size-4" />
              Jump to ministry vs global table
              <ArrowDown className="size-4" />
            </a>
          </section>

          <YearPanel year={year} onYear={setYear} />
          <WueChart year={year} />
          <SectorChart />
          <DiscrepancyTable />
          <EventTimeline year={year} />

          <div className="grid gap-8 md:grid-cols-2">
            <PerCapitaChart />
            <WithdrawalChart />
          </div>
          <GroundwaterChart />
          <AccessChart />
          <IrrigationChart />
          <SourcesPanel />
        </main>
        <footer className="border-t border-border px-4 py-8 text-center text-xs leading-relaxed text-faint md:px-6">
          Jal Rekha compiles FAO, World Bank, WHO/UNICEF JMP, CWC, CGWB and Ministry of Jal Shakti
          publications for 1990–2023. It is not an official government product.
        </footer>
      </div>
    </TooltipProvider>
  );
}

function Kpi({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl bg-inset px-3 py-3 md:px-4">
      <dt className="text-[11px] tracking-wide text-faint uppercase">{label}</dt>
      <dd className="mt-1 font-display text-lg font-semibold tabular-nums tracking-tight md:text-xl">
        {value}
      </dd>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </div>
  );
}
