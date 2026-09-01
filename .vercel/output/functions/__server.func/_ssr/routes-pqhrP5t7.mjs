import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Flame, c as ChevronDown, i as Landmark, l as ArrowDown, o as Droplets, r as Scale, s as CloudRain, t as Wind } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as XAxis, c as CartesianGrid, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as ReferenceLine, n as BarChart, o as Area, p as Legend, r as LineChart, s as Line, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-pqhrP5t7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatNumber(value, options = {}) {
	return new Intl.NumberFormat("en-IN", options).format(value);
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-raised text-muted",
		accent: "bg-accent/15 text-accent",
		drought: "bg-drought/15 text-drought",
		flood: "bg-flood/15 text-flood",
		danger: "bg-danger/15 text-danger",
		outline: "shadow-border text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent-dim",
			secondary: "bg-raised text-fg shadow-border hover:shadow-border-hover",
			ghost: "text-muted hover:bg-raised hover:text-fg",
			outline: "text-fg shadow-border hover:bg-raised"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl bg-surface text-fg shadow-border", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 p-5 pb-0 md:p-6 md:pb-0", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: cn("font-display text-lg font-semibold leading-snug tracking-tight", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm leading-relaxed text-muted", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-5 md:p-6", className),
		...props
	});
}
var SOURCES = {
	"fao-641": {
		label: "SDG 6.4.1 water-use efficiency",
		publisher: "FAO / UN SDG Global Database",
		year: "2000–2023",
		url: "https://unstats.un.org/sdgs/dataportal",
		note: "Series ER_H2O_WUEYST, India (area 356). Sector-weighted value added per m³, current USD. Nature: estimated."
	},
	"wb-productivity": {
		label: "Water productivity (GDP / withdrawal)",
		publisher: "World Bank WDI / FAO AQUASTAT",
		year: "1990–2022",
		url: "https://data.worldbank.org/indicator/ER.GDP.FWTL.M3.KD?locations=IN",
		note: "ER.GDP.FWTL.M3.KD. Constant 2015 USD GDP divided by total freshwater withdrawal. Different numerator from FAO 6.4.1."
	},
	"wb-withdrawal": {
		label: "Annual freshwater withdrawals",
		publisher: "World Bank WDI / FAO AQUASTAT",
		year: "1990–2022",
		url: "https://data.worldbank.org/indicator/ER.H2O.FWTL.K3?locations=IN",
		note: "ER.H2O.FWTL.K3, billion m³. Values freeze at 647.5 bcm from 2010 through 2022 — AQUASTAT did not refresh India's withdrawal after 2010."
	},
	"wb-stress": {
		label: "Level of water stress (SDG 6.4.2)",
		publisher: "World Bank WDI / FAO AQUASTAT",
		year: "1990–2022",
		url: "https://data.worldbank.org/indicator/ER.H2O.FWST.ZS?locations=IN",
		note: "Freshwater withdrawal as % of available freshwater resources. Also frozen from 2010 at 66.5%."
	},
	"wb-jmp": {
		label: "Safely managed drinking water",
		publisher: "WHO / UNICEF JMP (via World Bank)",
		year: "2000–2022",
		url: "https://data.worldbank.org/indicator/SH.H2O.SMDW.ZS?locations=IN",
		note: "Share of population using an improved source on premises, available when needed, free from faecal and priority chemical contamination. National (rural + urban)."
	},
	"cwc-percapita": {
		label: "Average annual per-capita water availability",
		publisher: "Central Water Commission / Ministry of Jal Shakti",
		year: "1991–2021",
		url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1604871",
		note: "Total water resources divided by population. Falkenmark: <1,700 m³ = water-stressed; <1,000 m³ = water-scarce."
	},
	"pib-percapita": {
		label: "PIB on per-capita availability",
		publisher: "Press Information Bureau, MoJS",
		year: "2020",
		url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1604871",
		note: "Confirms 1,816 m³ (2001), 1,545 m³ (2011); 1,486 m³ (2021) and 1,367 m³ (2031) from CWC space-inputs reassessment, 2019."
	},
	"cgwb-2022": {
		label: "Dynamic Ground Water Resources of India, 2022",
		publisher: "CGWB, Ministry of Jal Shakti",
		year: "2022",
		url: "https://cgwb.gov.in/",
		note: "Joint CGWB–State assessment. Recharge 437.60 bcm; extraction 239.16 bcm. 1,006 of 7,089 units over-exploited."
	},
	"cgwb-2023": {
		label: "Dynamic Ground Water Resources of India, 2023",
		publisher: "CGWB / PIB",
		year: "2023",
		url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1981600",
		note: "Recharge 449.08 bcm; extraction 241.34 bcm; stage of extraction 59.23%. 736 of 6,553 units over-exploited. Unit count changed with methodology."
	},
	"hindu-2022": {
		label: "Groundwater extraction lowest in 18 years",
		publisher: "The Hindu, citing CGWB 2022",
		year: "2022",
		url: "https://www.thehindu.com/sci-tech/energy-and-environment/level-of-groundwater-extraction-lowest-in-18-years-finds-study/article66116836.ece",
		note: "Places 2022 extraction (239.16 bcm) against 2004 (231 bcm), 2017 (249 bcm) and 2020 (245 bcm)."
	},
	"jjm-pib": {
		label: "Jal Jeevan Mission baseline",
		publisher: "Ministry of Jal Shakti / PIB",
		year: "2019–2026",
		url: "https://jaljeevanmission.gov.in/",
		note: "15 Aug 2019: 3.23 crore rural households (16.7%) had a tap. Mission target: functional household tap at 55 lpcd."
	},
	"jjm-2023": {
		label: "JJM coverage, end-2023",
		publisher: "JJM IMIS / PIB / NDTV",
		year: "2023",
		url: "https://ejalshakti.gov.in/jjmreport/jjmindia.aspx",
		note: "December 2023: ~14 crore rural households (72.7%) reported with tap connections. Connection ≠ always-on, quality-assured supply."
	},
	"pdmc-impri": {
		label: "Per Drop More Crop micro-irrigation",
		publisher: "DA&FW / IMPRI citing PDMC",
		year: "2015–23",
		url: "https://pmksy.gov.in/",
		note: "Cumulative PDMC coverage 70.04 lakh ha by 2022–23. 2022–23 annual: 5.32 lakh ha drip + 5.70 lakh ha sprinkler."
	},
	"pmksy-site": {
		label: "PMKSY-PDMC progress",
		publisher: "pmksy.gov.in",
		year: "2022–23",
		url: "https://pmksy.gov.in/",
		note: "Official dashboard for micro-irrigation area covered under Per Drop More Crop."
	},
	"des-irrigation": {
		label: "Net irrigated area",
		publisher: "DES / Land Use Statistics, MoA&FW",
		year: "1990–2020",
		url: "https://desagri.gov.in/",
		note: "Net irrigated area: 48.0 mha (1990–91), 55.3 mha (2000–01), 63.6 mha (2010–11), 69.5 mha (2019–20). Distinct from FAO 'area equipped for irrigation'."
	},
	"niti-cwmi": {
		label: "Composite Water Management Index",
		publisher: "NITI Aayog",
		year: "2018–19",
		url: "https://www.niti.gov.in/node/727",
		note: "Flagged 600 million people in high-to-extreme water stress and projected 21 cities could exhaust groundwater by 2020 — a projection that did not materialise as stated."
	},
	"iwmi-eff": {
		label: "Irrigation efficiency reviews",
		publisher: "IWMI / CWC / agronomy literature",
		year: "2007–2024",
		url: "https://www.agronomyjournals.com/article/view/1117/7-7-51",
		note: "National composite surface-irrigation efficiency persistently cited at ~38% (conveyance ~70%, field application 60% surface / 75% sprinkler / 90% drip). India does not publish an official annual composite series."
	},
	"fao-eff": {
		label: "FAO indicative field application efficiency",
		publisher: "FAO Irrigation Manual",
		year: "reference",
		url: "https://www.fao.org/4/t7202e/t7202e08.htm",
		note: "Surface 60%, sprinkler 75%, drip 90% at field scale. Scheme-level 40% is 'reasonable'; 20–30% is poor."
	},
	"imd-monsoon": {
		label: "All-India summer monsoon",
		publisher: "India Meteorological Department",
		year: "1990–2023",
		url: "https://mausam.imd.gov.in/",
		note: "Severe deficit years used as climatic markers: 2002 (~81% of LPA), 2009 (~78%), 2014–15, 2015–16 El Niño drought, 2023 El Niño with uneven rain."
	},
	"sdg6-world": {
		label: "Global WUE benchmark 2023",
		publisher: "UN-Water / FAO SDG 6 Data Portal",
		year: "2023",
		url: "https://sdg6data.org/indicator/6.4.1",
		note: "World 2023: 21.52 USD/m³ overall; agriculture 0.69; industry 38.05; services 115.46. India 3.80 / 0.65 / 43.43 / 30.54."
	}
};
var FAO_WUE_TOTAL = [
	{
		year: 2e3,
		value: 1.07
	},
	{
		year: 2001,
		value: 1.12
	},
	{
		year: 2002,
		value: 1.13
	},
	{
		year: 2003,
		value: 1.2
	},
	{
		year: 2004,
		value: 1.31
	},
	{
		year: 2005,
		value: 1.4
	},
	{
		year: 2006,
		value: 1.49
	},
	{
		year: 2007,
		value: 1.57
	},
	{
		year: 2008,
		value: 1.63
	},
	{
		year: 2009,
		value: 1.72
	},
	{
		year: 2010,
		value: 1.81
	},
	{
		year: 2011,
		value: 1.91
	},
	{
		year: 2012,
		value: 2.01
	},
	{
		year: 2013,
		value: 2.13
	},
	{
		year: 2014,
		value: 2.3
	},
	{
		year: 2015,
		value: 2.46
	},
	{
		year: 2016,
		value: 2.65
	},
	{
		year: 2017,
		value: 2.83
	},
	{
		year: 2018,
		value: 3.03
	},
	{
		year: 2019,
		value: 3.18
	},
	{
		year: 2020,
		value: 3.02
	},
	{
		year: 2021,
		value: 3.32
	},
	{
		year: 2022,
		value: 3.55
	},
	{
		year: 2023,
		value: 3.8
	}
];
var FAO_WUE_AG = [
	{
		year: 2e3,
		value: .19
	},
	{
		year: 2001,
		value: .21
	},
	{
		year: 2002,
		value: .18
	},
	{
		year: 2003,
		value: .2
	},
	{
		year: 2004,
		value: .2
	},
	{
		year: 2005,
		value: .22
	},
	{
		year: 2006,
		value: .22
	},
	{
		year: 2007,
		value: .24
	},
	{
		year: 2008,
		value: .24
	},
	{
		year: 2009,
		value: .25
	},
	{
		year: 2010,
		value: .28
	},
	{
		year: 2011,
		value: .3
	},
	{
		year: 2012,
		value: .31
	},
	{
		year: 2013,
		value: .34
	},
	{
		year: 2014,
		value: .36
	},
	{
		year: 2015,
		value: .38
	},
	{
		year: 2016,
		value: .41
	},
	{
		year: 2017,
		value: .45
	},
	{
		year: 2018,
		value: .48
	},
	{
		year: 2019,
		value: .54
	},
	{
		year: 2020,
		value: .59
	},
	{
		year: 2021,
		value: .61
	},
	{
		year: 2022,
		value: .62
	},
	{
		year: 2023,
		value: .65
	}
];
var FAO_WUE_INDUSTRY = [
	{
		year: 2e3,
		value: 19.5
	},
	{
		year: 2001,
		value: 18.77
	},
	{
		year: 2002,
		value: 18.8
	},
	{
		year: 2003,
		value: 19.14
	},
	{
		year: 2004,
		value: 21.66
	},
	{
		year: 2005,
		value: 22.53
	},
	{
		year: 2006,
		value: 24.42
	},
	{
		year: 2007,
		value: 25.06
	},
	{
		year: 2008,
		value: 25.04
	},
	{
		year: 2009,
		value: 25.68
	},
	{
		year: 2010,
		value: 26.49
	},
	{
		year: 2011,
		value: 27.19
	},
	{
		year: 2012,
		value: 27.87
	},
	{
		year: 2013,
		value: 28.4
	},
	{
		year: 2014,
		value: 29.69
	},
	{
		year: 2015,
		value: 31.46
	},
	{
		year: 2016,
		value: 33.23
	},
	{
		year: 2017,
		value: 35.05
	},
	{
		year: 2018,
		value: 37.35
	},
	{
		year: 2019,
		value: 35.66
	},
	{
		year: 2020,
		value: 34.38
	},
	{
		year: 2021,
		value: 40.07
	},
	{
		year: 2022,
		value: 41.13
	},
	{
		year: 2023,
		value: 43.43
	}
];
var FAO_WUE_SERVICES = [
	{
		year: 2e3,
		value: 8.37
	},
	{
		year: 2001,
		value: 8.75
	},
	{
		year: 2002,
		value: 9.01
	},
	{
		year: 2003,
		value: 9.4
	},
	{
		year: 2004,
		value: 10.12
	},
	{
		year: 2005,
		value: 10.65
	},
	{
		year: 2006,
		value: 11.07
	},
	{
		year: 2007,
		value: 11.58
	},
	{
		year: 2008,
		value: 12.05
	},
	{
		year: 2009,
		value: 12.73
	},
	{
		year: 2010,
		value: 13.14
	},
	{
		year: 2011,
		value: 14.02
	},
	{
		year: 2012,
		value: 15.06
	},
	{
		year: 2013,
		value: 16.2
	},
	{
		year: 2014,
		value: 17.78
	},
	{
		year: 2015,
		value: 19.25
	},
	{
		year: 2016,
		value: 20.78
	},
	{
		year: 2017,
		value: 22.23
	},
	{
		year: 2018,
		value: 23.97
	},
	{
		year: 2019,
		value: 25.76
	},
	{
		year: 2020,
		value: 23.3
	},
	{
		year: 2021,
		value: 25.47
	},
	{
		year: 2022,
		value: 28.08
	},
	{
		year: 2023,
		value: 30.54
	}
];
var WB_PRODUCTIVITY = [
	{
		year: 1990,
		value: .93
	},
	{
		year: 1991,
		value: .92
	},
	{
		year: 1992,
		value: .95
	},
	{
		year: 1993,
		value: .97
	},
	{
		year: 1994,
		value: 1.02
	},
	{
		year: 1995,
		value: 1.07
	},
	{
		year: 1996,
		value: 1.13
	},
	{
		year: 1997,
		value: 1.16
	},
	{
		year: 1998,
		value: 1.2
	},
	{
		year: 1999,
		value: 1.29
	},
	{
		year: 2e3,
		value: 1.31
	},
	{
		year: 2001,
		value: 1.34
	},
	{
		year: 2002,
		value: 1.36
	},
	{
		year: 2003,
		value: 1.43
	},
	{
		year: 2004,
		value: 1.62
	},
	{
		year: 2005,
		value: 1.74
	},
	{
		year: 2006,
		value: 1.87
	},
	{
		year: 2007,
		value: 2
	},
	{
		year: 2008,
		value: 2.05
	},
	{
		year: 2009,
		value: 2.2
	},
	{
		year: 2010,
		value: 2.37
	},
	{
		year: 2011,
		value: 2.5
	},
	{
		year: 2012,
		value: 2.63
	},
	{
		year: 2013,
		value: 2.8
	},
	{
		year: 2014,
		value: 3.01
	},
	{
		year: 2015,
		value: 3.25
	},
	{
		year: 2016,
		value: 3.52
	},
	{
		year: 2017,
		value: 3.76
	},
	{
		year: 2018,
		value: 4
	},
	{
		year: 2019,
		value: 4.15
	},
	{
		year: 2020,
		value: 3.91
	},
	{
		year: 2021,
		value: 4.29
	},
	{
		year: 2022,
		value: 4.62
	}
];
var WB_WITHDRAWAL_BCM = [
	{
		year: 1990,
		value: 500
	},
	{
		year: 1995,
		value: 555.2
	},
	{
		year: 2e3,
		value: 610.4
	},
	{
		year: 2003,
		value: 655.6
	},
	{
		year: 2004,
		value: 625.2
	},
	{
		year: 2010,
		value: 647.5
	},
	{
		year: 2022,
		value: 647.5
	}
];
var WB_STRESS_PCT = [
	{
		year: 1990,
		value: 51.3
	},
	{
		year: 1995,
		value: 57
	},
	{
		year: 2e3,
		value: 62.7
	},
	{
		year: 2003,
		value: 67.3
	},
	{
		year: 2004,
		value: 64.2
	},
	{
		year: 2010,
		value: 66.5
	},
	{
		year: 2022,
		value: 66.5
	}
];
var JMP_SAFE_WATER = [
	{
		year: 2e3,
		value: 37.6
	},
	{
		year: 2001,
		value: 39.1
	},
	{
		year: 2002,
		value: 40.6
	},
	{
		year: 2003,
		value: 42.1
	},
	{
		year: 2004,
		value: 43.7
	},
	{
		year: 2005,
		value: 45.2
	},
	{
		year: 2006,
		value: 46.8
	},
	{
		year: 2007,
		value: 48.3
	},
	{
		year: 2008,
		value: 49.9
	},
	{
		year: 2009,
		value: 51.5
	},
	{
		year: 2010,
		value: 53.1
	},
	{
		year: 2011,
		value: 54.7
	},
	{
		year: 2012,
		value: 56.3
	},
	{
		year: 2013,
		value: 57.9
	},
	{
		year: 2014,
		value: 59.6
	},
	{
		year: 2015,
		value: 61.2
	},
	{
		year: 2016,
		value: 62.9
	},
	{
		year: 2017,
		value: 64.6
	},
	{
		year: 2018,
		value: 66.2
	},
	{
		year: 2019,
		value: 67.9
	},
	{
		year: 2020,
		value: 69.6
	},
	{
		year: 2021,
		value: 71.3
	},
	{
		year: 2022,
		value: 73
	}
];
var PER_CAPITA_M3 = [
	{
		year: 1991,
		value: 2209,
		source: "cwc-percapita"
	},
	{
		year: 2001,
		value: 1816,
		source: "pib-percapita"
	},
	{
		year: 2011,
		value: 1545,
		source: "pib-percapita"
	},
	{
		year: 2021,
		value: 1486,
		source: "pib-percapita"
	}
];
var GROUNDWATER = [
	{
		year: 2004,
		recharge: null,
		extraction: 231,
		stage: 58,
		overExploited: null,
		units: null
	},
	{
		year: 2017,
		recharge: 432,
		extraction: 249,
		stage: 63.3,
		overExploited: null,
		units: null
	},
	{
		year: 2020,
		recharge: 436,
		extraction: 245,
		stage: 61.6,
		overExploited: 1114,
		units: null
	},
	{
		year: 2022,
		recharge: 437.6,
		extraction: 239.16,
		stage: 60.1,
		overExploited: 1006,
		units: 7089
	},
	{
		year: 2023,
		recharge: 449.08,
		extraction: 241.34,
		stage: 59.23,
		overExploited: 736,
		units: 6553
	}
];
var JJM_TAPS = [
	{
		year: 2019,
		month: "Aug",
		householdsCr: 3.23,
		pct: 16.7
	},
	{
		year: 2021,
		month: "Mar",
		householdsCr: 8.1,
		pct: 42
	},
	{
		year: 2022,
		month: "Dec",
		householdsCr: 10.6,
		pct: 55
	},
	{
		year: 2023,
		month: "Mar",
		householdsCr: 11.5,
		pct: 59
	},
	{
		year: 2023,
		month: "Dec",
		householdsCr: 14,
		pct: 72.7
	}
];
var NET_IRRIGATED_MHA = [
	{
		year: 1991,
		value: 48
	},
	{
		year: 2001,
		value: 55.3
	},
	{
		year: 2011,
		value: 63.6
	},
	{
		year: 2016,
		value: 66.7
	},
	{
		year: 2020,
		value: 69.5
	}
];
var MICRO_IRRIGATION = [
	{
		year: 2015,
		label: "PDMC launch",
		pdmcLakhHa: 0,
		note: "Per Drop More Crop begins under PMKSY"
	},
	{
		year: 2021,
		label: "PDMC to date",
		pdmcLakhHa: 59.37,
		note: "Cumulative since 2015–16 (Jain/DA&FW)"
	},
	{
		year: 2023,
		label: "2022–23 close",
		pdmcLakhHa: 70.04,
		note: "IMPRI / DA&FW; 11.02 lakh ha added in 2022–23"
	}
];
var IRRIGATION_EFFICIENCY = [
	{
		method: "Surface / canal (scheme)",
		pct: 38,
		range: "30–40",
		source: "iwmi-eff"
	},
	{
		method: "Groundwater irrigation",
		pct: 60,
		range: "55–70",
		source: "iwmi-eff"
	},
	{
		method: "Sprinkler (field)",
		pct: 75,
		range: "70–80",
		source: "fao-eff"
	},
	{
		method: "Drip (field)",
		pct: 90,
		range: "80–95",
		source: "fao-eff"
	}
];
var WORLD_WUE_2023 = {
	total: 21.52,
	agriculture: .69,
	industry: 38.05,
	services: 115.46
};
var EVENTS = [
	{
		year: 1991,
		kind: "policy",
		title: "Water-stress threshold crossed",
		detail: "Per-capita availability ~2,209 m³. India is already near the Falkenmark water-stress line of 1,700 m³."
	},
	{
		year: 1998,
		kind: "cyclone",
		title: "Odisha super cyclone",
		detail: "One of the deadliest storms of the century; coastal flooding and saline inundation of farmland."
	},
	{
		year: 2002,
		kind: "drought",
		title: "All-India monsoon drought",
		detail: "Among the most severe monsoon failures of the instrumental era (~81% of long-period average). Groundwater pumping surged."
	},
	{
		year: 2002,
		kind: "policy",
		title: "National Water Policy 2002",
		detail: "First major post-1990s rewrite: river-basin planning, water as an economic good, participatory irrigation."
	},
	{
		year: 2005,
		kind: "flood",
		title: "Mumbai floods",
		detail: "26 July cloudburst. Urban drainage failure becomes a national water-governance issue."
	},
	{
		year: 2009,
		kind: "drought",
		title: "El Niño drought",
		detail: "All-India monsoon ~78% of LPA. Second major drought of the decade after 2002."
	},
	{
		year: 2012,
		kind: "policy",
		title: "National Water Policy 2012",
		detail: "Equity, ecological flows, and a push to treat water as a common-pool resource."
	},
	{
		year: 2013,
		kind: "flood",
		title: "Uttarakhand / Kedarnath disaster",
		detail: "Cloudburst and glacial-lake outburst in the Himalaya. Hydropower and unplanned construction implicated."
	},
	{
		year: 2014,
		kind: "flood",
		title: "Kashmir floods",
		detail: "Jhelum and Chenab overflow; Srinagar inundated. Same year, a monsoon deficit in many plains states."
	},
	{
		year: 2014,
		kind: "policy",
		title: "Namami Gange launched",
		detail: "National Mission for Clean Ganga consolidated under a flagship programme."
	},
	{
		year: 2015,
		endYear: 2016,
		kind: "drought",
		title: "El Niño drought years",
		detail: "Marathwada, Bundelkhand and interior Karnataka hit hard. Back-to-back poor monsoons; drinking-water trains deployed."
	},
	{
		year: 2015,
		kind: "policy",
		title: "PMKSY / Per Drop More Crop",
		detail: "Har Khet Ko Pani + micro-irrigation subsidies. The ministry's main farm-level efficiency instrument."
	},
	{
		year: 2018,
		kind: "flood",
		title: "Kerala floods",
		detail: "Extreme rainfall over already-full reservoirs. Dam-operation and Western Ghats land-use debated."
	},
	{
		year: 2018,
		kind: "policy",
		title: "NITI Aayog Composite Water Management Index",
		detail: "First national scorecard. Warned that 600 million people face high-to-extreme water stress; 21-city groundwater headline followed."
	},
	{
		year: 2019,
		kind: "flood",
		title: "Excess monsoon, widespread floods",
		detail: "All-India rainfall ~110% of LPA after a delayed onset. Floods in Bihar, Assam, Maharashtra, Karnataka."
	},
	{
		year: 2019,
		kind: "policy",
		title: "Jal Shakti ministry + Jal Jeevan Mission",
		detail: "Water resources and drinking water unified. JJM starts at 16.7% rural tap coverage with a 2024 universal-tap target."
	},
	{
		year: 2020,
		kind: "policy",
		title: "Atal Bhujal Yojana",
		detail: "Community-led groundwater management in seven water-stressed states. COVID year also dips economic WUE."
	},
	{
		year: 2022,
		kind: "heat",
		title: "Record pre-monsoon heatwave",
		detail: "March–May heat over northwest and central India; wheat yields and power-water demand stressed."
	},
	{
		year: 2023,
		kind: "drought",
		title: "El Niño, delayed and uneven monsoon",
		detail: "Onset delayed; long dry spells then extreme rainfall. Global hottest year on record. FAO WUE for India reaches 3.80 USD/m³."
	}
];
var DISCREPANCIES = [
	{
		id: "wue-method",
		theme: "efficiency",
		indicator: "National water-use efficiency",
		year: "2022",
		ministry: "No official MoJS composite USD/m³ series. CWC tracks physical irrigation efficiency, not economic WUE.",
		ministrySource: "iwmi-eff",
		global: "FAO 6.4.1: 3.55 USD/m³. World Bank productivity: 4.62 constant-2015 USD/m³.",
		globalSource: "fao-641",
		kind: "definitional",
		gap: "FAO 3.55 vs WB 4.62 (+30%)",
		why: "FAO 6.4.1 is sector-weighted value added (agriculture + industry + services) in current USD per m³ used. World Bank divides total GDP (constant 2015 USD) by total withdrawal. Same country, different numerator, different price basis. Neither is 'wrong' — they answer different questions."
	},
	{
		id: "wue-world",
		theme: "efficiency",
		indicator: "India vs world WUE",
		year: "2023",
		ministry: "Agriculture still takes ~84–90% of withdrawn water (NCIWRD / MoJS).",
		ministrySource: "pib-percapita",
		global: "India 3.80 USD/m³ vs world 21.52. Agriculture 0.65 vs world 0.69. Industry 43.43 vs world 38.05.",
		globalSource: "sdg6-world",
		kind: "aligned",
		gap: "18% of world average",
		why: "India's overall WUE is low mainly because agriculture dominates withdrawals, and farm value added per m³ is small everywhere (world ag is 0.69). India's industrial WUE is actually above the world mean. Comparing headline WUE without sector weights overstates 'inefficiency'."
	},
	{
		id: "withdrawal-freeze",
		theme: "resources",
		indicator: "Annual freshwater withdrawal",
		year: "2010–2022",
		ministry: "CWC: average annual water resources 1,869 bcm; utilizable 1,123 bcm (690 surface + 433 groundwater). These are resource, not withdrawal, figures.",
		ministrySource: "cwc-percapita",
		global: "FAO/World Bank: 647.5 bcm every year from 2010 through 2022.",
		globalSource: "wb-withdrawal",
		kind: "divergent",
		gap: "Frozen 647.5 bcm",
		why: "AQUASTAT did not receive a fresh national withdrawal update after ~2010, so global databases repeat 647.5 bcm for 12 years. Ministry figures describe renewable availability, not actual use. Journals that treat the 647.5 series as an annual measurement overstate stasis."
	},
	{
		id: "per-capita",
		theme: "resources",
		indicator: "Per-capita water availability",
		year: "2021",
		ministry: "CWC / PIB: 1,486 m³ per person (total water resources ÷ population).",
		ministrySource: "pib-percapita",
		global: "FAO AQUASTAT 'internal renewable freshwater per capita' is typically ~1,080 m³ — internal river flow and groundwater, excluding some transboundary inflows counted by CWC.",
		globalSource: "wb-stress",
		kind: "definitional",
		gap: "1,486 vs ~1,080 m³",
		why: "CWC uses total average annual water resources (including contributions from transboundary rivers as estimated in Indian basin accounts). FAO's internal renewable resource excludes a portion of those inflows. Both show a country below the 1,700 m³ stress line."
	},
	{
		id: "taps-vs-jmp",
		theme: "access",
		indicator: "Household drinking water",
		year: "2022–23",
		ministry: "Jal Jeevan Mission IMIS: rural tap connections 16.7% (Aug 2019) → 72.7% (Dec 2023).",
		ministrySource: "jjm-2023",
		global: "WHO/UNICEF JMP safely managed drinking water, all-India: 67.9% (2019) → 73.0% (2022).",
		globalSource: "wb-jmp",
		kind: "definitional",
		gap: "Taps 72.7% vs JMP 73.0%",
		why: "The similar percentages hide different universes. JJM counts rural household tap connections reported by states. JMP is national (rural + urban) and requires water on premises, available when needed, and free from faecal/priority chemical contamination. A tap that is dry, intermittent, or contaminated still counts in JJM; it does not count as JMP 'safely managed'."
	},
	{
		id: "irrigation-eff",
		theme: "irrigation",
		indicator: "Irrigation efficiency (physical)",
		year: "1990–2023",
		ministry: "No official annual national composite. Efficiency is tracked via micro-irrigation hectares (PDMC: 70.04 lakh ha by 2022–23) and irrigation potential created/utilized.",
		ministrySource: "pdmc-impri",
		global: "Reviews (IWMI, CWC syntheses, agronomy journals) still cite ~38% overall surface-scheme efficiency, 55–70% groundwater, 75% sprinkler, 90% drip — almost unchanged as a headline since the 2000s.",
		globalSource: "iwmi-eff",
		kind: "divergent",
		gap: "Hectares vs 38% headline",
		why: "The ministry reports activity (area brought under drip/sprinkler). Global papers report a scheme-level ratio that has not been re-estimated nationally on a regular cadence. Both can be true: micro-irrigation is expanding, and the remaining canal-command stock still leaks at 1990s rates. Without a CWC composite time series, journals keep recycling 38%."
	},
	{
		id: "irrigated-share",
		theme: "irrigation",
		indicator: "Share of farmland irrigated",
		year: "2010 / 2019–20",
		ministry: "DES net irrigated area 63.6 mha (2010–11) and 69.5 mha (2019–20), roughly 45–50% of net sown area.",
		ministrySource: "des-irrigation",
		global: "World Bank (circa 2010): 'only about 35% of agricultural land is reliably irrigated.' FAO 'area equipped for irrigation' uses a third definition.",
		globalSource: "des-irrigation",
		kind: "definitional",
		gap: "35% vs ~45–50%",
		why: "'Reliably irrigated' excludes land that is counted as irrigated in the land-use statistics but does not receive a dependable watering. Net irrigated area, gross irrigated area, and area equipped for irrigation are three different numbers. Papers that mix them produce fake gaps."
	},
	{
		id: "gw-grace",
		theme: "groundwater",
		indicator: "Groundwater extraction trend",
		year: "2004–2023",
		ministry: "CGWB 2022: 239.16 bcm extracted — 'lowest since 2004' (231 bcm). 2023: 241.34 bcm, stage of extraction 59.23%, over-exploited units down to 736.",
		ministrySource: "cgwb-2023",
		global: "NASA GRACE satellite studies (Rodell et al. and follow-ons) show persistent groundwater storage loss in northwest India (Punjab, Haryana, western UP, Rajasthan) even as the national average improves.",
		globalSource: "hindu-2022",
		kind: "divergent",
		gap: "National down, NW still falling",
		why: "CGWB is a national sum of assessment units; GRACE is a gravity-anomaly regional signal. National extraction can fall (eastern and peninsular recharge, more water-conservation structures) while the Green Revolution belt continues to mine aquifers. Averaging hides Punjab/Haryana."
	},
	{
		id: "niti-cities",
		theme: "groundwater",
		indicator: "21 cities 'running out' of groundwater",
		year: "2018 vs 2020",
		ministry: "NITI Aayog CWMI 2018: 21 major cities, including Delhi, Bengaluru, Chennai, Hyderabad, were projected to run out of groundwater by 2020.",
		ministrySource: "niti-cwmi",
		global: "Observed 2020: cities did not exhaust groundwater. Chennai's 2019 Day Zero scare was real; 2020 monsoon + COVID demand drop changed the path. Journals still cite the 21-city line as fact.",
		globalSource: "niti-cwmi",
		kind: "divergent",
		gap: "Projection ≠ outcome",
		why: "The CWMI sentence was a stress scenario, not a measurement. Global commentary often dropped the conditional. Local scarcity in Chennai (2019) and Shimla was genuine; nationwide municipal 'zero groundwater' in 2020 was not."
	},
	{
		id: "ag-wue-gain",
		theme: "efficiency",
		indicator: "Agricultural water-use efficiency",
		year: "2000–2023",
		ministry: "PDMC and PMKSY are the official instruments; reported in hectares, not USD/m³.",
		ministrySource: "pdmc-impri",
		global: "FAO agricultural WUE: 0.19 (2000) → 0.65 (2023) USD/m³, a 242% rise — the largest relative sectoral gain.",
		globalSource: "fao-641",
		kind: "aligned",
		gap: "+242% FAO ag WUE",
		why: "Directionally, ministry programmes and FAO's agricultural WUE agree: more crop (and more high-value crop) per drop. The units still do not match, so the size of the gain cannot be reconciled without a joint methodology."
	}
];
var THEME_LABEL = {
	efficiency: "Efficiency",
	access: "Drinking water",
	groundwater: "Groundwater",
	irrigation: "Irrigation",
	resources: "Resources"
};
var KIND_LABEL = {
	divergent: "Figures diverge",
	definitional: "Same topic, different definition",
	aligned: "Directionally aligned"
};
function valueAt(series, year) {
	const exact = series.find((p) => p.year === year);
	if (exact) return exact.value;
	return null;
}
function nearest(series, year) {
	if (!series.length) return null;
	let best = series[0];
	let bestDist = Math.abs(series[0].year - year);
	for (const p of series) {
		const d = Math.abs(p.year - year);
		if (d < bestDist) {
			best = p;
			bestDist = d;
		}
	}
	return best;
}
var YEAR_MIN = 1990;
var YEAR_MAX = 2023;
var THEMES = [
	"all",
	"efficiency",
	"access",
	"groundwater",
	"irrigation",
	"resources"
];
var KINDS = [
	"all",
	"divergent",
	"definitional",
	"aligned"
];
function KindBadge({ kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: kind === "divergent" ? "danger" : kind === "aligned" ? "accent" : "outline",
		children: KIND_LABEL[kind]
	});
}
function Row({ row, open, onToggle }) {
	const min = SOURCES[row.ministrySource];
	const glob = SOURCES[row.globalSource];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-inset",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			className: "flex w-full min-h-11 items-start gap-3 px-4 py-3 text-left",
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindBadge, { kind: row.kind }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs tracking-wide text-faint uppercase",
							children: [
								THEME_LABEL[row.theme],
								" · ",
								row.year
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-base font-semibold tracking-tight",
						children: row.indicator
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-xs text-accent",
						children: row.gap
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("mt-1 size-4 shrink-0 text-muted transition-transform duration-200", open && "rotate-180") })]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 border-t border-border px-4 py-4 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-faint uppercase",
						children: "Indian official"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg",
						children: row.ministry
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-muted",
						children: [
							min.label,
							" · ",
							min.publisher,
							" (",
							min.year,
							")"
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-faint uppercase",
						children: "Global journals / FAO / WB / JMP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg",
						children: row.global
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-muted",
						children: [
							glob.label,
							" · ",
							glob.publisher,
							" (",
							glob.year,
							")"
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2 rounded-lg bg-surface px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-accent uppercase",
						children: "Why the figures differ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: row.why
					})]
				})
			]
		}) : null]
	});
}
function DiscrepancyTable() {
	const [theme, setTheme] = (0, import_react.useState)("all");
	const [kind, setKind] = (0, import_react.useState)("all");
	const [openId, setOpenId] = (0, import_react.useState)(DISCREPANCIES[0]?.id ?? null);
	const rows = (0, import_react.useMemo)(() => DISCREPANCIES.filter((r) => theme === "all" ? true : r.theme === theme).filter((r) => kind === "all" ? true : r.kind === kind), [theme, kind]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "compare",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Ministry data vs global datasets" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Ten documented collisions — not a scorecard of who is right. Filter by theme or by whether the gap is a real divergence, a definition mismatch, or an aligned story told in different units. Open a row for sources and the reconciliation." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: theme === t ? "default" : "secondary",
							onClick: () => setTheme(t),
							children: t === "all" ? "All themes" : THEME_LABEL[t]
						}, t))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: kind === k ? "default" : "ghost",
							onClick: () => setKind(k),
							children: k === "all" ? "All gap types" : KIND_LABEL[k]
						}, k))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						rows.length,
						" of ",
						DISCREPANCIES.length,
						" comparisons"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						row,
						open: openId === row.id,
						onToggle: () => setOpenId((id) => id === row.id ? null : row.id)
					}, row.id)), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-inset px-4 py-6 text-center text-sm text-muted",
						children: "No comparisons in this filter."
					}) : null]
				})
			]
		})]
	});
}
var KIND_META = {
	drought: {
		label: "Drought",
		variant: "drought",
		Icon: Flame
	},
	flood: {
		label: "Flood",
		variant: "flood",
		Icon: CloudRain
	},
	cyclone: {
		label: "Cyclone",
		variant: "flood",
		Icon: Wind
	},
	heat: {
		label: "Heat",
		variant: "drought",
		Icon: Flame
	},
	policy: {
		label: "Policy",
		variant: "accent",
		Icon: Landmark
	}
};
function EventTimeline({ year }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "climate",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Climatic shocks and policy turns" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Droughts, floods, cyclones and the laws that answered them. The highlighted row is the year on the inspector. Efficiency series often dip the same year as a monsoon failure (2002, 2009, 2015) or a GDP shock (2020) — correlation, not a causal model." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-0 border-l border-border pl-5",
			children: EVENTS.map((ev) => {
				const meta = KIND_META[ev.kind];
				const Icon = meta.Icon;
				const active = year >= ev.year && year <= (ev.endYear ?? ev.year);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("-ml-8 grid grid-cols-[1.5rem_5.5rem_1fr] items-start gap-3 rounded-xl py-3 pr-2", active && "bg-raised"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 flex size-6 items-center justify-center rounded-full bg-surface text-muted shadow-border",
							children: ev.kind === "policy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-3 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pt-0.5 font-mono text-xs tabular-nums text-muted",
							children: [ev.year, ev.endYear ? `–${ev.endYear}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-fg",
									children: ev.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: meta.variant,
									children: meta.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: ev.detail
							})]
						})
					]
				}, `${ev.year}-${ev.title}`);
			})
		}) })]
	});
}
var CHART = {
	accent: "#3db8a6",
	accentDim: "#2a7f73",
	muted: "#8a9a92",
	faint: "#5c6e66",
	fg: "#e8efe9",
	grid: "rgba(232, 239, 233, 0.06)",
	drought: "#c4894a",
	flood: "#6b93c4",
	industry: "#8ab4a8",
	services: "#c5d4ce",
	ag: "#3db8a6"
};
var tooltipStyle = {
	background: "#182420",
	border: "1px solid #334740",
	borderRadius: 12,
	color: "#e8efe9",
	fontSize: 12,
	padding: "8px 12px"
};
function PerCapitaChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Per-capita availability, CWC" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "2,209 m³ in 1991 → 1,486 m³ in 2021. India crossed the Falkenmark water-stress line of 1,700 m³ between 2001 and 2011. Source: CWC / PIB PRID 1604871." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: PER_CAPITA_M3,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: CHART.grid,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						width: 44
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "value",
						stroke: CHART.accent,
						fill: CHART.accent,
						fillOpacity: .18,
						name: "m³ / person"
					})
				]
			})
		})
	}) })] });
}
function WithdrawalChart() {
	const data = [
		1990,
		1995,
		2e3,
		2003,
		2004,
		2010,
		2015,
		2022
	].map((year) => ({
		year,
		withdrawal: WB_WITHDRAWAL_BCM.find((p) => p.year === year)?.value ?? (year > 2010 ? 647.5 : null),
		stress: WB_STRESS_PCT.find((p) => p.year === year)?.value ?? (year > 2010 ? 66.5 : null)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "FAO withdrawals vs water stress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "AQUASTAT freezes India's withdrawal at 647.5 bcm and stress at 66.5% from 2010 to 2022. Treat the flat tail as a missing update, not as proof that pumping stopped rising." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: CHART.grid,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "l",
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						width: 40
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "r",
						orientation: "right",
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						width: 32
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						fontSize: 12,
						color: CHART.muted
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "l",
						type: "monotone",
						dataKey: "withdrawal",
						stroke: CHART.accent,
						strokeWidth: 2,
						name: "Withdrawal (bcm)",
						dot: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "r",
						type: "monotone",
						dataKey: "stress",
						stroke: CHART.drought,
						strokeWidth: 2,
						name: "Stress (%)",
						dot: true
					})
				]
			})
		})
	}) })] });
}
function GroundwaterChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "groundwater",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Groundwater, CGWB assessments" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Extraction 249 bcm (2017) → 241.34 bcm (2023). Stage of extraction 63.3% → 59.23%. Over-exploited units are not strictly comparable: the 2023 assessment uses 6,553 units, 2022 used 7,089. National improvement coexists with mining in Punjab–Haryana." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: GROUNDWATER,
					margin: {
						top: 8,
						right: 8,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: CHART.grid,
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "year",
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false,
							width: 40
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
							fontSize: 12,
							color: CHART.muted
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "recharge",
							fill: CHART.flood,
							name: "Recharge (bcm)",
							radius: [
								6,
								6,
								0,
								0
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "extraction",
							fill: CHART.accent,
							name: "Extraction (bcm)",
							radius: [
								6,
								6,
								0,
								0
							]
						})
					]
				})
			})
		}) })]
	});
}
function AccessChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "access",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Rural taps vs safely managed water" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Jal Jeevan Mission (rural household tap connections, MoJS) against WHO/UNICEF JMP safely managed drinking water (national, quality-conditioned). Similar 2022–23 percentages, different definitions — see the comparison table." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data: [
						{
							year: 2019,
							jjm: 16.7,
							jmp: 67.9
						},
						{
							year: 2021,
							jjm: 42,
							jmp: 71.3
						},
						{
							year: 2022,
							jjm: 55,
							jmp: 73
						},
						{
							year: 2023,
							jjm: 72.7,
							jmp: null
						}
					],
					margin: {
						top: 8,
						right: 8,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: CHART.grid,
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "year",
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false,
							width: 32,
							domain: [0, 100]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
							fontSize: 12,
							color: CHART.muted
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "jjm",
							stroke: CHART.accent,
							strokeWidth: 2.25,
							name: "JJM rural taps %"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "jmp",
							stroke: CHART.services,
							strokeWidth: 2.25,
							name: "JMP safely managed %"
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-xs leading-relaxed text-muted",
			children: [
				"JMP series ",
				JMP_SAFE_WATER[0]?.year,
				"–",
				JMP_SAFE_WATER.at(-1)?.year,
				":",
				" ",
				JMP_SAFE_WATER[0]?.value,
				"% → ",
				JMP_SAFE_WATER.at(-1)?.value,
				"%. JJM baseline",
				" ",
				JJM_TAPS[0]?.pct,
				"% in Aug 2019."
			]
		})] })]
	});
}
function IrrigationChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Irrigation expansion and method efficiency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Net irrigated area, DES: 48 mha (1990–91) to 69.5 mha (2019–20). PDMC micro-irrigation reached 70.04 lakh ha by 2022–23 — still a single-digit share of net sown area. Field efficiencies below are FAO/IWMI reference values, not a CWC time series." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "grid gap-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: NET_IRRIGATED_MHA,
					margin: {
						top: 8,
						right: 8,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: CHART.grid,
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "year",
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false,
							width: 36
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "value",
							stroke: CHART.accent,
							fill: CHART.accent,
							fillOpacity: .18,
							name: "Net irrigated (mha)"
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "space-y-3",
			children: [IRRIGATION_EFFICIENCY.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-baseline justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: row.method
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono tabular-nums text-fg",
					children: [
						row.pct,
						"% ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-faint",
							children: [
								"(",
								row.range,
								")"
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 overflow-hidden rounded-full bg-inset",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-accent",
					style: { width: `${row.pct}%` }
				})
			})] }, row.method)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-xs leading-relaxed text-muted",
				children: [
					"PDMC cumulative: ",
					MICRO_IRRIGATION.map((m) => `${m.year} ${m.pdmcLakhHa} lakh ha`).join(" · "),
					"."
				]
			})]
		})]
	})] });
}
var rows$1 = FAO_WUE_AG.map((p, i) => ({
	year: p.year,
	agriculture: p.value,
	industry: FAO_WUE_INDUSTRY[i]?.value ?? null,
	services: FAO_WUE_SERVICES[i]?.value ?? null
}));
function SectorChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Sectoral efficiency, FAO 6.4.1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Agriculture rose from 0.19 to 0.65 USD/m³ (2000–2023) — a 242% gain, still near the world farm mean of 0.69. Industry at 43.43 sits above the world 38.05. Services at 30.54 remain far below the world 115.46. India's low headline WUE is mostly composition, not a collapsing farm sector." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: rows$1,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: CHART.grid,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						interval: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: CHART.faint,
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						width: 36
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						fontSize: 12,
						color: CHART.muted
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "agriculture",
						stroke: CHART.ag,
						strokeWidth: 2,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "industry",
						stroke: CHART.industry,
						strokeWidth: 2,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "services",
						stroke: CHART.services,
						strokeWidth: 2,
						dot: false
					})
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-inset px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] text-faint uppercase",
					children: "World total 2023"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-lg tabular-nums",
					children: WORLD_WUE_2023.total
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-inset px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] text-faint uppercase",
					children: "World agriculture"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-lg tabular-nums",
					children: WORLD_WUE_2023.agriculture
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-inset px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] text-faint uppercase",
					children: "World industry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-lg tabular-nums",
					children: WORLD_WUE_2023.industry
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-inset px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] text-faint uppercase",
					children: "World services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-lg tabular-nums",
					children: WORLD_WUE_2023.services
				})]
			})
		]
	})] })] });
}
var NAV = [
	{
		href: "#ledger",
		label: "Efficiency"
	},
	{
		href: "#compare",
		label: "Compare"
	},
	{
		href: "#climate",
		label: "Climate"
	},
	{
		href: "#groundwater",
		label: "Groundwater"
	},
	{
		href: "#access",
		label: "Access"
	},
	{
		href: "#sources",
		label: "Sources"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-h-11 items-center gap-2.5 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-8 items-center justify-center rounded-md bg-accent/15 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, {
							className: "size-4",
							strokeWidth: 2
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Jal Rekha"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Sections",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-wide text-faint md:text-xs",
					children: "1990–2023"
				})
			]
		})
	});
}
function SourcesPanel() {
	const items = Object.values(SOURCES);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "sources",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Sources" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Every chart on this ledger is built from the series below. FAO 6.4.1 values were pulled from the UN SDG Global Database (India, 2000–2023). World Bank series from the WDI API. Ministry figures from PIB releases and CGWB assessments. No interpolated official number is presented as a measurement." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border",
			children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "py-3 first:pt-0 last:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.url,
						target: "_blank",
						rel: "noreferrer",
						className: "font-medium text-fg underline-offset-4 hover:text-accent hover:underline",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: [
							s.publisher,
							" · ",
							s.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: s.note
					})
				]
			}, s.url + s.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 text-xs leading-relaxed text-faint",
			children: "This is a compiled tracker, not a government dashboard. Jal Jeevan Mission IMIS updates daily; figures here freeze at published 2023 checkpoints. FAO and World Bank revise historical estimates when national accounts or withdrawal data are restated."
		})] })]
	});
}
var rows = Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => ({
	year,
	fao: FAO_WUE_TOTAL.find((p) => p.year === year)?.value ?? null,
	wb: WB_PRODUCTIVITY.find((p) => p.year === year)?.value ?? null
}));
var MARKERS = [
	{
		year: 2002,
		label: "2002 drought"
	},
	{
		year: 2009,
		label: "2009 drought"
	},
	{
		year: 2015,
		label: "El Niño"
	},
	{
		year: 2020,
		label: "COVID dip"
	}
];
function WueChart({ year }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "ledger",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Two global measures of water-use efficiency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "FAO SDG 6.4.1 (current USD, sector-weighted value added per m³) versus World Bank water productivity (constant 2015 USD GDP per m³ withdrawn). Same country; different arithmetic. Markers are drought and shock years — not causes proven by the series." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-72 w-full md:h-80",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data: rows,
					margin: {
						top: 12,
						right: 8,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: CHART.grid,
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "year",
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false,
							interval: 4
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: CHART.faint,
								fontSize: 11
							},
							tickLine: false,
							axisLine: false,
							width: 36,
							domain: [0, 5]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							contentStyle: tooltipStyle,
							formatter: (value, name) => {
								return [typeof value === "number" ? value.toFixed(2) : String(value), name === "fao" ? "FAO 6.4.1 (USD/m³)" : "World Bank (2015 USD/m³)"];
							},
							labelFormatter: (label) => `Year ${label}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							wrapperStyle: {
								fontSize: 12,
								color: CHART.muted
							},
							formatter: (value) => value === "fao" ? "FAO 6.4.1" : "World Bank productivity"
						}),
						MARKERS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
							x: m.year,
							stroke: CHART.drought,
							strokeDasharray: "3 3",
							strokeOpacity: .7
						}, m.year)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
							x: year,
							stroke: CHART.fg,
							strokeOpacity: .35
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "fao",
							stroke: CHART.accent,
							strokeWidth: 2.25,
							dot: false,
							connectNulls: false,
							name: "fao"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "wb",
							stroke: CHART.services,
							strokeWidth: 2.25,
							dot: false,
							connectNulls: false,
							name: "wb"
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",
			children: MARKERS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-drought" }), m.label]
			}, m.year))
		})] })]
	});
}
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none items-center select-none", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-border-strong",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-accent" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-fg shadow-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60" })]
}));
Slider.displayName = Slider$1.displayName;
var JUMP_YEARS = [
	1991,
	2002,
	2009,
	2015,
	2019,
	2023
];
function Stat({ label, value, unit, asOf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 rounded-xl bg-inset px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-wide text-faint uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-display text-xl font-semibold tabular-nums tracking-tight md:text-2xl",
				children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 font-sans text-xs font-medium text-muted",
					children: unit
				}) : null]
			}),
			asOf ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-faint",
				children: ["Observation ", asOf]
			}) : null
		]
	});
}
function YearPanel({ year, onYear }) {
	const fao = valueAt(FAO_WUE_TOTAL, year) ?? nearest(FAO_WUE_TOTAL, year);
	const wb = valueAt(WB_PRODUCTIVITY, year) ?? nearest(WB_PRODUCTIVITY, year);
	const jmp = nearest(JMP_SAFE_WATER, year);
	const capita = nearest(PER_CAPITA_M3.map((p) => ({
		year: p.year,
		value: p.value
	})), year);
	const gw = GROUNDWATER.reduce((best, row) => Math.abs(row.year - year) < Math.abs(best.year - year) ? row : best);
	const jjm = JJM_TAPS.filter((r) => r.year <= year).at(-1);
	const yearEvents = EVENTS.filter((e) => year >= e.year && year <= (e.endYear ?? e.year));
	const faoVal = typeof fao === "number" ? fao : fao?.value;
	const faoYear = typeof fao === "number" ? year : fao?.year;
	const wbVal = typeof wb === "number" ? wb : wb?.value;
	const wbYear = typeof wb === "number" ? year : wb?.year;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "scroll-mt-20 rounded-2xl bg-surface p-5 shadow-border md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-accent uppercase",
					children: "Year inspector"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tabular-nums tracking-tight md:text-4xl",
					children: year
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm leading-relaxed text-muted",
					children: "Jump to a shock year or drag 1990–2023. Sparse official series show the nearest published observation rather than interpolating a number India never released."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: JUMP_YEARS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: year === y ? "default" : "secondary",
					onClick: () => onYear(y),
					"aria-pressed": year === y,
					children: y
				}, y))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: YEAR_MIN,
					max: YEAR_MAX,
					step: 1,
					value: [year],
					onValueChange: (v) => onYear(v[0] ?? year),
					"aria-label": "Select year"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between font-mono text-xs text-faint",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1990" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2000" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2010" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2023" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-2 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "FAO 6.4.1 WUE",
						value: faoVal != null ? formatNumber(faoVal, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						}) : "—",
						unit: "USD/m³",
						asOf: faoYear !== year ? faoYear : year < 2e3 ? faoYear : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "World Bank productivity",
						value: wbVal != null ? formatNumber(wbVal, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						}) : "—",
						unit: "2015 USD/m³",
						asOf: wbYear !== year ? wbYear : year > 2022 ? wbYear : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Per-capita availability",
						value: capita ? formatNumber(Math.round(capita.value)) : "—",
						unit: "m³",
						asOf: capita && capita.year !== year ? capita.year : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "JMP safely managed",
						value: jmp ? formatNumber(jmp.value, { maximumFractionDigits: 1 }) : "—",
						unit: "%",
						asOf: jmp && jmp.year !== year ? jmp.year : year < 2e3 ? jmp?.year : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "GW extraction",
						value: formatNumber(gw.extraction, { maximumFractionDigits: 1 }),
						unit: "bcm",
						asOf: gw.year !== year ? gw.year : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Stage of GW extraction",
						value: formatNumber(gw.stage, { maximumFractionDigits: 1 }),
						unit: "%",
						asOf: gw.year !== year ? gw.year : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Rural tap connections",
						value: jjm ? formatNumber(jjm.pct, { maximumFractionDigits: 1 }) : "n/a",
						unit: jjm ? "%" : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Events this year",
						value: String(yearEvents.length)
					})
				]
			}),
			yearEvents.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: yearEvents.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-inset px-3 py-2 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-fg",
							children: [ev.title, "."]
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: ev.detail
						})
					]
				}, `${ev.year}-${ev.title}`))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					"No flagged climatic or policy event in ",
					year,
					"."
				]
			})
		]
	});
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-w-xs rounded-lg bg-raised px-3 py-2 text-xs leading-relaxed text-fg shadow-border-hover", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function Home() {
	const [year, setYear] = (0, import_react.useState)(2023);
	const fao0 = FAO_WUE_TOTAL[0];
	const faoN = FAO_WUE_TOTAL.at(-1);
	const ag0 = FAO_WUE_AG[0];
	const agN = FAO_WUE_AG.at(-1);
	const capita0 = PER_CAPITA_M3[0];
	const capitaN = PER_CAPITA_M3.at(-1);
	const jjm0 = JJM_TAPS[0];
	const jjmN = JJM_TAPS.at(-1);
	const wueGain = fao0 && faoN ? Math.round((faoN.value - fao0.value) / fao0.value * 100) : 0;
	const agGain = ag0 && agN ? Math.round((agN.value - ag0.value) / ag0.value * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "top",
			className: "min-h-dvh bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:gap-10 md:px-6 md:py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "relative overflow-hidden rounded-2xl bg-surface px-5 py-8 shadow-border md:px-10 md:py-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ledger-grid pointer-events-none absolute inset-0 opacity-40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-widest text-accent uppercase",
											children: "India · 1990–2023"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl",
											children: "Jal Rekha"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
											children: "A ledger of water-efficiency achievements — farm, factory, tap and aquifer — with the official number and the global number sitting in the same row. Where they disagree, the disagreement is the story."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "relative mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
											label: "FAO WUE 2000→2023",
											value: `${fao0?.value.toFixed(2)} → ${faoN?.value.toFixed(2)}`,
											hint: `+${wueGain}% USD/m³`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
											label: "Agricultural WUE",
											value: `${ag0?.value} → ${agN?.value}`,
											hint: `+${agGain}% FAO 6.4.1`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
											label: "Rural tap connections",
											value: `${jjm0?.pct}% → ${jjmN?.pct}%`,
											hint: "Jal Jeevan Mission"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
											label: "Per-capita water",
											value: `${capita0?.value} → ${capitaN?.value}`,
											hint: "m³, CWC / PIB"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#compare",
									className: "relative mt-8 inline-flex h-11 items-center gap-2 text-sm text-accent",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4" }),
										"Jump to ministry vs global table",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearPanel, {
							year,
							onYear: setYear
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WueChart, { year }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectorChart, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiscrepancyTable, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventTimeline, { year }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerCapitaChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithdrawalChart, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundwaterChart, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessChart, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IrrigationChart, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcesPanel, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-border px-4 py-8 text-center text-xs leading-relaxed text-faint md:px-6",
					children: "Jal Rekha compiles FAO, World Bank, WHO/UNICEF JMP, CWC, CGWB and Ministry of Jal Shakti publications for 1990–2023. It is not an official government product."
				})
			]
		})
	});
}
function Kpi({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-inset px-3 py-3 md:px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[11px] tracking-wide text-faint uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 font-display text-lg font-semibold tabular-nums tracking-tight md:text-xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: hint
			})
		]
	});
}
//#endregion
export { Home as component };
