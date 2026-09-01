import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  EVENTS,
  FAO_WUE_TOTAL,
  GROUNDWATER,
  JMP_SAFE_WATER,
  JJM_TAPS,
  PER_CAPITA_M3,
  WB_PRODUCTIVITY,
  YEAR_MAX,
  YEAR_MIN,
  nearest,
  valueAt,
} from "@/data/india-water";
import { formatNumber } from "@/lib/utils";

const JUMP_YEARS = [1991, 2002, 2009, 2015, 2019, 2023];

function Stat({
  label,
  value,
  unit,
  asOf,
}: {
  label: string;
  value: string;
  unit?: string;
  asOf?: number | null;
}) {
  return (
    <div className="min-w-0 rounded-xl bg-inset px-3 py-3">
      <p className="text-[11px] tracking-wide text-faint uppercase">{label}</p>
      <p className="mt-1 font-display text-xl font-semibold tabular-nums tracking-tight md:text-2xl">
        {value}
        {unit ? <span className="ml-1 font-sans text-xs font-medium text-muted">{unit}</span> : null}
      </p>
      {asOf ? <p className="mt-1 text-xs text-faint">Observation {asOf}</p> : null}
    </div>
  );
}

export function YearPanel({ year, onYear }: { year: number; onYear: (y: number) => void }) {
  const fao = valueAt(FAO_WUE_TOTAL, year) ?? nearest(FAO_WUE_TOTAL, year);
  const wb = valueAt(WB_PRODUCTIVITY, year) ?? nearest(WB_PRODUCTIVITY, year);
  const jmp = nearest(JMP_SAFE_WATER, year);
  const capita = nearest(
    PER_CAPITA_M3.map((p) => ({ year: p.year, value: p.value })),
    year,
  );
  const gw = GROUNDWATER.reduce((best, row) =>
    Math.abs(row.year - year) < Math.abs(best.year - year) ? row : best,
  );
  const jjm = JJM_TAPS.filter((r) => r.year <= year).at(-1);
  const yearEvents = EVENTS.filter((e) => year >= e.year && year <= (e.endYear ?? e.year));

  const faoVal = typeof fao === "number" ? fao : fao?.value;
  const faoYear = typeof fao === "number" ? year : fao?.year;
  const wbVal = typeof wb === "number" ? wb : wb?.value;
  const wbYear = typeof wb === "number" ? year : wb?.year;

  return (
    <section className="scroll-mt-20 rounded-2xl bg-surface p-5 shadow-border md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs tracking-wide text-accent uppercase">Year inspector</p>
          <h2 className="font-display text-3xl font-semibold tabular-nums tracking-tight md:text-4xl">
            {year}
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Jump to a shock year or drag 1990–2023. Sparse official series show the nearest published
          observation rather than interpolating a number India never released.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {JUMP_YEARS.map((y) => (
          <Button
            key={y}
            size="sm"
            variant={year === y ? "default" : "secondary"}
            onClick={() => onYear(y)}
            aria-pressed={year === y}
          >
            {y}
          </Button>
        ))}
      </div>
      <div className="mt-5">
        <Slider
          min={YEAR_MIN}
          max={YEAR_MAX}
          step={1}
          value={[year]}
          onValueChange={(v) => onYear(v[0] ?? year)}
          aria-label="Select year"
        />
        <div className="mt-2 flex justify-between font-mono text-xs text-faint">
          <span>1990</span>
          <span>2000</span>
          <span>2010</span>
          <span>2023</span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
        <Stat
          label="FAO 6.4.1 WUE"
          value={faoVal != null ? formatNumber(faoVal, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—"}
          unit="USD/m³"
          asOf={faoYear !== year ? faoYear : year < 2000 ? faoYear : null}
        />
        <Stat
          label="World Bank productivity"
          value={wbVal != null ? formatNumber(wbVal, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—"}
          unit="2015 USD/m³"
          asOf={wbYear !== year ? wbYear : year > 2022 ? wbYear : null}
        />
        <Stat
          label="Per-capita availability"
          value={capita ? formatNumber(Math.round(capita.value)) : "—"}
          unit="m³"
          asOf={capita && capita.year !== year ? capita.year : null}
        />
        <Stat
          label="JMP safely managed"
          value={jmp ? formatNumber(jmp.value, { maximumFractionDigits: 1 }) : "—"}
          unit="%"
          asOf={jmp && jmp.year !== year ? jmp.year : year < 2000 ? jmp?.year : null}
        />
        <Stat
          label="GW extraction"
          value={formatNumber(gw.extraction, { maximumFractionDigits: 1 })}
          unit="bcm"
          asOf={gw.year !== year ? gw.year : null}
        />
        <Stat
          label="Stage of GW extraction"
          value={formatNumber(gw.stage, { maximumFractionDigits: 1 })}
          unit="%"
          asOf={gw.year !== year ? gw.year : null}
        />
        <Stat
          label="Rural tap connections"
          value={jjm ? formatNumber(jjm.pct, { maximumFractionDigits: 1 }) : "n/a"}
          unit={jjm ? "%" : undefined}
        />
        <Stat label="Events this year" value={String(yearEvents.length)} />
      </div>
      {yearEvents.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {yearEvents.map((ev) => (
            <li
              key={`${ev.year}-${ev.title}`}
              className="rounded-xl bg-inset px-3 py-2 text-sm leading-relaxed"
            >
              <span className="font-medium text-fg">{ev.title}.</span>{" "}
              <span className="text-muted">{ev.detail}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-muted">No flagged climatic or policy event in {year}.</p>
      )}
    </section>
  );
}
