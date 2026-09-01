import {
  Area,
  AreaChart,
  Bar,
  BarChart,
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
import {
  GROUNDWATER,
  IRRIGATION_EFFICIENCY,
  JMP_SAFE_WATER,
  JJM_TAPS,
  MICRO_IRRIGATION,
  NET_IRRIGATED_MHA,
  PER_CAPITA_M3,
  WB_STRESS_PCT,
  WB_WITHDRAWAL_BCM,
} from "@/data/india-water";
import { CHART, tooltipStyle } from "./chart-theme";

export function PerCapitaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Per-capita availability, CWC</CardTitle>
        <CardDescription>
          2,209 m³ in 1991 → 1,486 m³ in 2021. India crossed the Falkenmark water-stress line of
          1,700 m³ between 2001 and 2011. Source: CWC / PIB PRID 1604871.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PER_CAPITA_M3} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} width={44} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="value" stroke={CHART.accent} fill={CHART.accent} fillOpacity={0.18} name="m³ / person" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function WithdrawalChart() {
  const data = [1990, 1995, 2000, 2003, 2004, 2010, 2015, 2022].map((year) => ({
    year,
    withdrawal: WB_WITHDRAWAL_BCM.find((p) => p.year === year)?.value ?? (year > 2010 ? 647.5 : null),
    stress: WB_STRESS_PCT.find((p) => p.year === year)?.value ?? (year > 2010 ? 66.5 : null),
  }));
  return (
    <Card>
      <CardHeader>
        <CardTitle>FAO withdrawals vs water stress</CardTitle>
        <CardDescription>
          AQUASTAT freezes India's withdrawal at 647.5 bcm and stress at 66.5% from 2010 to
          2022. Treat the flat tail as a missing update, not as proof that pumping stopped rising.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis yAxisId="l" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} width={40} />
              <YAxis yAxisId="r" orientation="right" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} width={32} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, color: CHART.muted }} />
              <Line yAxisId="l" type="monotone" dataKey="withdrawal" stroke={CHART.accent} strokeWidth={2} name="Withdrawal (bcm)" dot />
              <Line yAxisId="r" type="monotone" dataKey="stress" stroke={CHART.drought} strokeWidth={2} name="Stress (%)" dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function GroundwaterChart() {
  return (
    <Card id="groundwater" className="scroll-mt-20">
      <CardHeader>
        <CardTitle>Groundwater, CGWB assessments</CardTitle>
        <CardDescription>
          Extraction 249 bcm (2017) → 241.34 bcm (2023). Stage of extraction 63.3% → 59.23%.
          Over-exploited units are not strictly comparable: the 2023 assessment uses 6,553 units,
          2022 used 7,089. National improvement coexists with mining in Punjab–Haryana.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={GROUNDWATER} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} width={40} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, color: CHART.muted }} />
              <Bar dataKey="recharge" fill={CHART.flood} name="Recharge (bcm)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="extraction" fill={CHART.accent} name="Extraction (bcm)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function AccessChart() {
  const jjmRows = [
    { year: 2019, jjm: 16.7, jmp: 67.9 },
    { year: 2021, jjm: 42, jmp: 71.3 },
    { year: 2022, jjm: 55, jmp: 73.0 },
    { year: 2023, jjm: 72.7, jmp: null },
  ];
  return (
    <Card id="access" className="scroll-mt-20">
      <CardHeader>
        <CardTitle>Rural taps vs safely managed water</CardTitle>
        <CardDescription>
          Jal Jeevan Mission (rural household tap connections, MoJS) against WHO/UNICEF JMP
          safely managed drinking water (national, quality-conditioned). Similar 2022–23
          percentages, different definitions — see the comparison table.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={jjmRows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} width={32} domain={[0, 100]} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, color: CHART.muted }} />
              <Line type="monotone" dataKey="jjm" stroke={CHART.accent} strokeWidth={2.25} name="JJM rural taps %" />
              <Line type="monotone" dataKey="jmp" stroke={CHART.services} strokeWidth={2.25} name="JMP safely managed %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          JMP series {JMP_SAFE_WATER[0]?.year}–{JMP_SAFE_WATER.at(-1)?.year}:{" "}
          {JMP_SAFE_WATER[0]?.value}% → {JMP_SAFE_WATER.at(-1)?.value}%. JJM baseline{" "}
          {JJM_TAPS[0]?.pct}% in Aug 2019.
        </p>
      </CardContent>
    </Card>
  );
}

export function IrrigationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Irrigation expansion and method efficiency</CardTitle>
        <CardDescription>
          Net irrigated area, DES: 48 mha (1990–91) to 69.5 mha (2019–20). PDMC micro-irrigation
          reached 70.04 lakh ha by 2022–23 — still a single-digit share of net sown area. Field
          efficiencies below are FAO/IWMI reference values, not a CWC time series.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={NET_IRRIGATED_MHA} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={CHART.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: CHART.faint, fontSize: 11 }} tickLine={false} axisLine={false} width={36} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="value" stroke={CHART.accent} fill={CHART.accent} fillOpacity={0.18} name="Net irrigated (mha)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <ul className="space-y-3">
          {IRRIGATION_EFFICIENCY.map((row) => (
            <li key={row.method}>
              <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                <span className="text-muted">{row.method}</span>
                <span className="font-mono tabular-nums text-fg">
                  {row.pct}% <span className="text-faint">({row.range})</span>
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-inset">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </li>
          ))}
          <li className="text-xs leading-relaxed text-muted">
            PDMC cumulative: {MICRO_IRRIGATION.map((m) => `${m.year} ${m.pdmcLakhHa} lakh ha`).join(" · ")}.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
