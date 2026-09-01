import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FAO_WUE_TOTAL, WB_PRODUCTIVITY } from "@/data/india-water";
import { CHART, tooltipStyle } from "./chart-theme";

const rows = Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => ({
  year,
  fao: FAO_WUE_TOTAL.find((p) => p.year === year)?.value ?? null,
  wb: WB_PRODUCTIVITY.find((p) => p.year === year)?.value ?? null,
}));

const MARKERS = [
  { year: 2002, label: "2002 drought" },
  { year: 2009, label: "2009 drought" },
  { year: 2015, label: "El Niño" },
  { year: 2020, label: "COVID dip" },
];

export function WueChart({ year }: { year: number }) {
  return (
    <Card id="ledger" className="scroll-mt-20">
      <CardHeader>
        <CardTitle>Two global measures of water-use efficiency</CardTitle>
        <CardDescription>
          FAO SDG 6.4.1 (current USD, sector-weighted value added per m³) versus World Bank water
          productivity (constant 2015 USD GDP per m³ withdrawn). Same country; different arithmetic.
          Markers are drought and shock years — not causes proven by the series.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72 w-full md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fill: CHART.faint, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval={4}
              />
              <YAxis
                tick={{ fill: CHART.faint, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={36}
                domain={[0, 5]}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value, name) => {
                  const n = typeof value === "number" ? value.toFixed(2) : String(value);
                  const label = name === "fao" ? "FAO 6.4.1 (USD/m³)" : "World Bank (2015 USD/m³)";
                  return [n, label];
                }}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Legend
                wrapperStyle={{ fontSize: 12, color: CHART.muted }}
                formatter={(value) => (value === "fao" ? "FAO 6.4.1" : "World Bank productivity")}
              />
              {MARKERS.map((m) => (
                <ReferenceLine
                  key={m.year}
                  x={m.year}
                  stroke={CHART.drought}
                  strokeDasharray="3 3"
                  strokeOpacity={0.7}
                />
              ))}
              <ReferenceLine x={year} stroke={CHART.fg} strokeOpacity={0.35} />
              <Line
                type="monotone"
                dataKey="fao"
                stroke={CHART.accent}
                strokeWidth={2.25}
                dot={false}
                connectNulls={false}
                name="fao"
              />
              <Line
                type="monotone"
                dataKey="wb"
                stroke={CHART.services}
                strokeWidth={2.25}
                dot={false}
                connectNulls={false}
                name="wb"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          {MARKERS.map((m) => (
            <li key={m.year} className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-drought" />
              {m.label}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
