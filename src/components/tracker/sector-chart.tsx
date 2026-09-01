import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FAO_WUE_AG, FAO_WUE_INDUSTRY, FAO_WUE_SERVICES, WORLD_WUE_2023 } from "@/data/india-water";
import { CHART, tooltipStyle } from "./chart-theme";

const rows = FAO_WUE_AG.map((p, i) => ({
  year: p.year,
  agriculture: p.value,
  industry: FAO_WUE_INDUSTRY[i]?.value ?? null,
  services: FAO_WUE_SERVICES[i]?.value ?? null,
}));

export function SectorChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sectoral efficiency, FAO 6.4.1</CardTitle>
        <CardDescription>
          Agriculture rose from 0.19 to 0.65 USD/m³ (2000–2023) — a 242% gain, still near the world
          farm mean of 0.69. Industry at 43.43 sits above the world 38.05. Services at 30.54 remain
          far below the world 115.46. India's low headline WUE is mostly composition, not a
          collapsing farm sector.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fill: CHART.faint, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval={3}
              />
              <YAxis
                tick={{ fill: CHART.faint, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={36}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, color: CHART.muted }} />
              <Line type="monotone" dataKey="agriculture" stroke={CHART.ag} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="industry" stroke={CHART.industry} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="services" stroke={CHART.services} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
          <div className="rounded-xl bg-inset px-3 py-2">
            <dt className="text-[11px] text-faint uppercase">World total 2023</dt>
            <dd className="font-display text-lg tabular-nums">{WORLD_WUE_2023.total}</dd>
          </div>
          <div className="rounded-xl bg-inset px-3 py-2">
            <dt className="text-[11px] text-faint uppercase">World agriculture</dt>
            <dd className="font-display text-lg tabular-nums">{WORLD_WUE_2023.agriculture}</dd>
          </div>
          <div className="rounded-xl bg-inset px-3 py-2">
            <dt className="text-[11px] text-faint uppercase">World industry</dt>
            <dd className="font-display text-lg tabular-nums">{WORLD_WUE_2023.industry}</dd>
          </div>
          <div className="rounded-xl bg-inset px-3 py-2">
            <dt className="text-[11px] text-faint uppercase">World services</dt>
            <dd className="font-display text-lg tabular-nums">{WORLD_WUE_2023.services}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
