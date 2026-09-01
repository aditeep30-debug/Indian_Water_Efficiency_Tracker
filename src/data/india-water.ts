/** Sourced figures for India's water-efficiency ledger, 1990–2023.
 *  Every numeric series carries a source id that maps to SOURCES. */

export type SourceId =
  | "fao-641"
  | "wb-productivity"
  | "wb-withdrawal"
  | "wb-stress"
  | "wb-jmp"
  | "cwc-percapita"
  | "pib-percapita"
  | "cgwb-2022"
  | "cgwb-2023"
  | "hindu-2022"
  | "jjm-pib"
  | "jjm-2023"
  | "pdmc-impri"
  | "pmksy-site"
  | "des-irrigation"
  | "niti-cwmi"
  | "iwmi-eff"
  | "fao-eff"
  | "imd-monsoon"
  | "sdg6-world";

export const SOURCES: Record<
  SourceId,
  { label: string; publisher: string; year: string; url: string; note: string }
> = {
  "fao-641": {
    label: "SDG 6.4.1 water-use efficiency",
    publisher: "FAO / UN SDG Global Database",
    year: "2000–2023",
    url: "https://unstats.un.org/sdgs/dataportal",
    note: "Series ER_H2O_WUEYST, India (area 356). Sector-weighted value added per m³, current USD. Nature: estimated.",
  },
  "wb-productivity": {
    label: "Water productivity (GDP / withdrawal)",
    publisher: "World Bank WDI / FAO AQUASTAT",
    year: "1990–2022",
    url: "https://data.worldbank.org/indicator/ER.GDP.FWTL.M3.KD?locations=IN",
    note: "ER.GDP.FWTL.M3.KD. Constant 2015 USD GDP divided by total freshwater withdrawal. Different numerator from FAO 6.4.1.",
  },
  "wb-withdrawal": {
    label: "Annual freshwater withdrawals",
    publisher: "World Bank WDI / FAO AQUASTAT",
    year: "1990–2022",
    url: "https://data.worldbank.org/indicator/ER.H2O.FWTL.K3?locations=IN",
    note: "ER.H2O.FWTL.K3, billion m³. Values freeze at 647.5 bcm from 2010 through 2022 — AQUASTAT did not refresh India's withdrawal after 2010.",
  },
  "wb-stress": {
    label: "Level of water stress (SDG 6.4.2)",
    publisher: "World Bank WDI / FAO AQUASTAT",
    year: "1990–2022",
    url: "https://data.worldbank.org/indicator/ER.H2O.FWST.ZS?locations=IN",
    note: "Freshwater withdrawal as % of available freshwater resources. Also frozen from 2010 at 66.5%.",
  },
  "wb-jmp": {
    label: "Safely managed drinking water",
    publisher: "WHO / UNICEF JMP (via World Bank)",
    year: "2000–2022",
    url: "https://data.worldbank.org/indicator/SH.H2O.SMDW.ZS?locations=IN",
    note: "Share of population using an improved source on premises, available when needed, free from faecal and priority chemical contamination. National (rural + urban).",
  },
  "cwc-percapita": {
    label: "Average annual per-capita water availability",
    publisher: "Central Water Commission / Ministry of Jal Shakti",
    year: "1991–2021",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1604871",
    note: "Total water resources divided by population. Falkenmark: <1,700 m³ = water-stressed; <1,000 m³ = water-scarce.",
  },
  "pib-percapita": {
    label: "PIB on per-capita availability",
    publisher: "Press Information Bureau, MoJS",
    year: "2020",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1604871",
    note: "Confirms 1,816 m³ (2001), 1,545 m³ (2011); 1,486 m³ (2021) and 1,367 m³ (2031) from CWC space-inputs reassessment, 2019.",
  },
  "cgwb-2022": {
    label: "Dynamic Ground Water Resources of India, 2022",
    publisher: "CGWB, Ministry of Jal Shakti",
    year: "2022",
    url: "https://cgwb.gov.in/",
    note: "Joint CGWB–State assessment. Recharge 437.60 bcm; extraction 239.16 bcm. 1,006 of 7,089 units over-exploited.",
  },
  "cgwb-2023": {
    label: "Dynamic Ground Water Resources of India, 2023",
    publisher: "CGWB / PIB",
    year: "2023",
    url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1981600",
    note: "Recharge 449.08 bcm; extraction 241.34 bcm; stage of extraction 59.23%. 736 of 6,553 units over-exploited. Unit count changed with methodology.",
  },
  "hindu-2022": {
    label: "Groundwater extraction lowest in 18 years",
    publisher: "The Hindu, citing CGWB 2022",
    year: "2022",
    url: "https://www.thehindu.com/sci-tech/energy-and-environment/level-of-groundwater-extraction-lowest-in-18-years-finds-study/article66116836.ece",
    note: "Places 2022 extraction (239.16 bcm) against 2004 (231 bcm), 2017 (249 bcm) and 2020 (245 bcm).",
  },
  "jjm-pib": {
    label: "Jal Jeevan Mission baseline",
    publisher: "Ministry of Jal Shakti / PIB",
    year: "2019–2026",
    url: "https://jaljeevanmission.gov.in/",
    note: "15 Aug 2019: 3.23 crore rural households (16.7%) had a tap. Mission target: functional household tap at 55 lpcd.",
  },
  "jjm-2023": {
    label: "JJM coverage, end-2023",
    publisher: "JJM IMIS / PIB / NDTV",
    year: "2023",
    url: "https://ejalshakti.gov.in/jjmreport/jjmindia.aspx",
    note: "December 2023: ~14 crore rural households (72.7%) reported with tap connections. Connection ≠ always-on, quality-assured supply.",
  },
  "pdmc-impri": {
    label: "Per Drop More Crop micro-irrigation",
    publisher: "DA&FW / IMPRI citing PDMC",
    year: "2015–23",
    url: "https://pmksy.gov.in/",
    note: "Cumulative PDMC coverage 70.04 lakh ha by 2022–23. 2022–23 annual: 5.32 lakh ha drip + 5.70 lakh ha sprinkler.",
  },
  "pmksy-site": {
    label: "PMKSY-PDMC progress",
    publisher: "pmksy.gov.in",
    year: "2022–23",
    url: "https://pmksy.gov.in/",
    note: "Official dashboard for micro-irrigation area covered under Per Drop More Crop.",
  },
  "des-irrigation": {
    label: "Net irrigated area",
    publisher: "DES / Land Use Statistics, MoA&FW",
    year: "1990–2020",
    url: "https://desagri.gov.in/",
    note: "Net irrigated area: 48.0 mha (1990–91), 55.3 mha (2000–01), 63.6 mha (2010–11), 69.5 mha (2019–20). Distinct from FAO 'area equipped for irrigation'.",
  },
  "niti-cwmi": {
    label: "Composite Water Management Index",
    publisher: "NITI Aayog",
    year: "2018–19",
    url: "https://www.niti.gov.in/node/727",
    note: "Flagged 600 million people in high-to-extreme water stress and projected 21 cities could exhaust groundwater by 2020 — a projection that did not materialise as stated.",
  },
  "iwmi-eff": {
    label: "Irrigation efficiency reviews",
    publisher: "IWMI / CWC / agronomy literature",
    year: "2007–2024",
    url: "https://www.agronomyjournals.com/article/view/1117/7-7-51",
    note: "National composite surface-irrigation efficiency persistently cited at ~38% (conveyance ~70%, field application 60% surface / 75% sprinkler / 90% drip). India does not publish an official annual composite series.",
  },
  "fao-eff": {
    label: "FAO indicative field application efficiency",
    publisher: "FAO Irrigation Manual",
    year: "reference",
    url: "https://www.fao.org/4/t7202e/t7202e08.htm",
    note: "Surface 60%, sprinkler 75%, drip 90% at field scale. Scheme-level 40% is 'reasonable'; 20–30% is poor.",
  },
  "imd-monsoon": {
    label: "All-India summer monsoon",
    publisher: "India Meteorological Department",
    year: "1990–2023",
    url: "https://mausam.imd.gov.in/",
    note: "Severe deficit years used as climatic markers: 2002 (~81% of LPA), 2009 (~78%), 2014–15, 2015–16 El Niño drought, 2023 El Niño with uneven rain.",
  },
  "sdg6-world": {
    label: "Global WUE benchmark 2023",
    publisher: "UN-Water / FAO SDG 6 Data Portal",
    year: "2023",
    url: "https://sdg6data.org/indicator/6.4.1",
    note: "World 2023: 21.52 USD/m³ overall; agriculture 0.69; industry 38.05; services 115.46. India 3.80 / 0.65 / 43.43 / 30.54.",
  },
};

export type Point = { year: number; value: number };

export const FAO_WUE_TOTAL: Point[] = [
  { year: 2000, value: 1.07 },
  { year: 2001, value: 1.12 },
  { year: 2002, value: 1.13 },
  { year: 2003, value: 1.2 },
  { year: 2004, value: 1.31 },
  { year: 2005, value: 1.4 },
  { year: 2006, value: 1.49 },
  { year: 2007, value: 1.57 },
  { year: 2008, value: 1.63 },
  { year: 2009, value: 1.72 },
  { year: 2010, value: 1.81 },
  { year: 2011, value: 1.91 },
  { year: 2012, value: 2.01 },
  { year: 2013, value: 2.13 },
  { year: 2014, value: 2.3 },
  { year: 2015, value: 2.46 },
  { year: 2016, value: 2.65 },
  { year: 2017, value: 2.83 },
  { year: 2018, value: 3.03 },
  { year: 2019, value: 3.18 },
  { year: 2020, value: 3.02 },
  { year: 2021, value: 3.32 },
  { year: 2022, value: 3.55 },
  { year: 2023, value: 3.8 },
];

export const FAO_WUE_AG: Point[] = [
  { year: 2000, value: 0.19 },
  { year: 2001, value: 0.21 },
  { year: 2002, value: 0.18 },
  { year: 2003, value: 0.2 },
  { year: 2004, value: 0.2 },
  { year: 2005, value: 0.22 },
  { year: 2006, value: 0.22 },
  { year: 2007, value: 0.24 },
  { year: 2008, value: 0.24 },
  { year: 2009, value: 0.25 },
  { year: 2010, value: 0.28 },
  { year: 2011, value: 0.3 },
  { year: 2012, value: 0.31 },
  { year: 2013, value: 0.34 },
  { year: 2014, value: 0.36 },
  { year: 2015, value: 0.38 },
  { year: 2016, value: 0.41 },
  { year: 2017, value: 0.45 },
  { year: 2018, value: 0.48 },
  { year: 2019, value: 0.54 },
  { year: 2020, value: 0.59 },
  { year: 2021, value: 0.61 },
  { year: 2022, value: 0.62 },
  { year: 2023, value: 0.65 },
];

export const FAO_WUE_INDUSTRY: Point[] = [
  { year: 2000, value: 19.5 },
  { year: 2001, value: 18.77 },
  { year: 2002, value: 18.8 },
  { year: 2003, value: 19.14 },
  { year: 2004, value: 21.66 },
  { year: 2005, value: 22.53 },
  { year: 2006, value: 24.42 },
  { year: 2007, value: 25.06 },
  { year: 2008, value: 25.04 },
  { year: 2009, value: 25.68 },
  { year: 2010, value: 26.49 },
  { year: 2011, value: 27.19 },
  { year: 2012, value: 27.87 },
  { year: 2013, value: 28.4 },
  { year: 2014, value: 29.69 },
  { year: 2015, value: 31.46 },
  { year: 2016, value: 33.23 },
  { year: 2017, value: 35.05 },
  { year: 2018, value: 37.35 },
  { year: 2019, value: 35.66 },
  { year: 2020, value: 34.38 },
  { year: 2021, value: 40.07 },
  { year: 2022, value: 41.13 },
  { year: 2023, value: 43.43 },
];

export const FAO_WUE_SERVICES: Point[] = [
  { year: 2000, value: 8.37 },
  { year: 2001, value: 8.75 },
  { year: 2002, value: 9.01 },
  { year: 2003, value: 9.4 },
  { year: 2004, value: 10.12 },
  { year: 2005, value: 10.65 },
  { year: 2006, value: 11.07 },
  { year: 2007, value: 11.58 },
  { year: 2008, value: 12.05 },
  { year: 2009, value: 12.73 },
  { year: 2010, value: 13.14 },
  { year: 2011, value: 14.02 },
  { year: 2012, value: 15.06 },
  { year: 2013, value: 16.2 },
  { year: 2014, value: 17.78 },
  { year: 2015, value: 19.25 },
  { year: 2016, value: 20.78 },
  { year: 2017, value: 22.23 },
  { year: 2018, value: 23.97 },
  { year: 2019, value: 25.76 },
  { year: 2020, value: 23.3 },
  { year: 2021, value: 25.47 },
  { year: 2022, value: 28.08 },
  { year: 2023, value: 30.54 },
];

export const WB_PRODUCTIVITY: Point[] = [
  { year: 1990, value: 0.93 },
  { year: 1991, value: 0.92 },
  { year: 1992, value: 0.95 },
  { year: 1993, value: 0.97 },
  { year: 1994, value: 1.02 },
  { year: 1995, value: 1.07 },
  { year: 1996, value: 1.13 },
  { year: 1997, value: 1.16 },
  { year: 1998, value: 1.2 },
  { year: 1999, value: 1.29 },
  { year: 2000, value: 1.31 },
  { year: 2001, value: 1.34 },
  { year: 2002, value: 1.36 },
  { year: 2003, value: 1.43 },
  { year: 2004, value: 1.62 },
  { year: 2005, value: 1.74 },
  { year: 2006, value: 1.87 },
  { year: 2007, value: 2.0 },
  { year: 2008, value: 2.05 },
  { year: 2009, value: 2.2 },
  { year: 2010, value: 2.37 },
  { year: 2011, value: 2.5 },
  { year: 2012, value: 2.63 },
  { year: 2013, value: 2.8 },
  { year: 2014, value: 3.01 },
  { year: 2015, value: 3.25 },
  { year: 2016, value: 3.52 },
  { year: 2017, value: 3.76 },
  { year: 2018, value: 4.0 },
  { year: 2019, value: 4.15 },
  { year: 2020, value: 3.91 },
  { year: 2021, value: 4.29 },
  { year: 2022, value: 4.62 },
];

export const WB_WITHDRAWAL_BCM: Point[] = [
  { year: 1990, value: 500 },
  { year: 1995, value: 555.2 },
  { year: 2000, value: 610.4 },
  { year: 2003, value: 655.6 },
  { year: 2004, value: 625.2 },
  { year: 2010, value: 647.5 },
  { year: 2022, value: 647.5 },
];

export const WB_STRESS_PCT: Point[] = [
  { year: 1990, value: 51.3 },
  { year: 1995, value: 57.0 },
  { year: 2000, value: 62.7 },
  { year: 2003, value: 67.3 },
  { year: 2004, value: 64.2 },
  { year: 2010, value: 66.5 },
  { year: 2022, value: 66.5 },
];

export const JMP_SAFE_WATER: Point[] = [
  { year: 2000, value: 37.6 },
  { year: 2001, value: 39.1 },
  { year: 2002, value: 40.6 },
  { year: 2003, value: 42.1 },
  { year: 2004, value: 43.7 },
  { year: 2005, value: 45.2 },
  { year: 2006, value: 46.8 },
  { year: 2007, value: 48.3 },
  { year: 2008, value: 49.9 },
  { year: 2009, value: 51.5 },
  { year: 2010, value: 53.1 },
  { year: 2011, value: 54.7 },
  { year: 2012, value: 56.3 },
  { year: 2013, value: 57.9 },
  { year: 2014, value: 59.6 },
  { year: 2015, value: 61.2 },
  { year: 2016, value: 62.9 },
  { year: 2017, value: 64.6 },
  { year: 2018, value: 66.2 },
  { year: 2019, value: 67.9 },
  { year: 2020, value: 69.6 },
  { year: 2021, value: 71.3 },
  { year: 2022, value: 73.0 },
];


export const PER_CAPITA_M3 = [
  { year: 1991, value: 2209, source: "cwc-percapita" as SourceId },
  { year: 2001, value: 1816, source: "pib-percapita" as SourceId },
  { year: 2011, value: 1545, source: "pib-percapita" as SourceId },
  { year: 2021, value: 1486, source: "pib-percapita" as SourceId },
];

export const GROUNDWATER = [
  {
    year: 2004,
    recharge: null as number | null,
    extraction: 231,
    stage: 58,
    overExploited: null as number | null,
    units: null as number | null,
  },
  { year: 2017, recharge: 432, extraction: 249, stage: 63.3, overExploited: null, units: null },
  { year: 2020, recharge: 436, extraction: 245, stage: 61.6, overExploited: 1114, units: null },
  { year: 2022, recharge: 437.6, extraction: 239.16, stage: 60.1, overExploited: 1006, units: 7089 },
  { year: 2023, recharge: 449.08, extraction: 241.34, stage: 59.23, overExploited: 736, units: 6553 },
];

export const JJM_TAPS = [
  { year: 2019, month: "Aug", householdsCr: 3.23, pct: 16.7 },
  { year: 2021, month: "Mar", householdsCr: 8.1, pct: 42 },
  { year: 2022, month: "Dec", householdsCr: 10.6, pct: 55 },
  { year: 2023, month: "Mar", householdsCr: 11.5, pct: 59 },
  { year: 2023, month: "Dec", householdsCr: 14.0, pct: 72.7 },
];

export const NET_IRRIGATED_MHA: Point[] = [
  { year: 1991, value: 48.0 },
  { year: 2001, value: 55.3 },
  { year: 2011, value: 63.6 },
  { year: 2016, value: 66.7 },
  { year: 2020, value: 69.5 },
];

export const MICRO_IRRIGATION = [
  { year: 2015, label: "PDMC launch", pdmcLakhHa: 0, note: "Per Drop More Crop begins under PMKSY" },
  { year: 2021, label: "PDMC to date", pdmcLakhHa: 59.37, note: "Cumulative since 2015–16 (Jain/DA&FW)" },
  { year: 2023, label: "2022–23 close", pdmcLakhHa: 70.04, note: "IMPRI / DA&FW; 11.02 lakh ha added in 2022–23" },
];

export const IRRIGATION_EFFICIENCY = [
  { method: "Surface / canal (scheme)", pct: 38, range: "30–40", source: "iwmi-eff" as SourceId },
  { method: "Groundwater irrigation", pct: 60, range: "55–70", source: "iwmi-eff" as SourceId },
  { method: "Sprinkler (field)", pct: 75, range: "70–80", source: "fao-eff" as SourceId },
  { method: "Drip (field)", pct: 90, range: "80–95", source: "fao-eff" as SourceId },
];

export const WORLD_WUE_2023 = {
  total: 21.52,
  agriculture: 0.69,
  industry: 38.05,
  services: 115.46,
};

export type EventKind = "drought" | "flood" | "cyclone" | "heat" | "policy";

export type ClimateEvent = {
  year: number;
  endYear?: number;
  kind: EventKind;
  title: string;
  detail: string;
};

export const EVENTS: ClimateEvent[] = [
  {
    year: 1991,
    kind: "policy",
    title: "Water-stress threshold crossed",
    detail:
      "Per-capita availability ~2,209 m³. India is already near the Falkenmark water-stress line of 1,700 m³.",
  },
  {
    year: 1998,
    kind: "cyclone",
    title: "Odisha super cyclone",
    detail: "One of the deadliest storms of the century; coastal flooding and saline inundation of farmland.",
  },
  {
    year: 2002,
    kind: "drought",
    title: "All-India monsoon drought",
    detail:
      "Among the most severe monsoon failures of the instrumental era (~81% of long-period average). Groundwater pumping surged.",
  },
  {
    year: 2002,
    kind: "policy",
    title: "National Water Policy 2002",
    detail: "First major post-1990s rewrite: river-basin planning, water as an economic good, participatory irrigation.",
  },
  {
    year: 2005,
    kind: "flood",
    title: "Mumbai floods",
    detail: "26 July cloudburst. Urban drainage failure becomes a national water-governance issue.",
  },
  {
    year: 2009,
    kind: "drought",
    title: "El Niño drought",
    detail: "All-India monsoon ~78% of LPA. Second major drought of the decade after 2002.",
  },
  {
    year: 2012,
    kind: "policy",
    title: "National Water Policy 2012",
    detail: "Equity, ecological flows, and a push to treat water as a common-pool resource.",
  },
  {
    year: 2013,
    kind: "flood",
    title: "Uttarakhand / Kedarnath disaster",
    detail: "Cloudburst and glacial-lake outburst in the Himalaya. Hydropower and unplanned construction implicated.",
  },
  {
    year: 2014,
    kind: "flood",
    title: "Kashmir floods",
    detail: "Jhelum and Chenab overflow; Srinagar inundated. Same year, a monsoon deficit in many plains states.",
  },
  {
    year: 2014,
    kind: "policy",
    title: "Namami Gange launched",
    detail: "National Mission for Clean Ganga consolidated under a flagship programme.",
  },
  {
    year: 2015,
    endYear: 2016,
    kind: "drought",
    title: "El Niño drought years",
    detail:
      "Marathwada, Bundelkhand and interior Karnataka hit hard. Back-to-back poor monsoons; drinking-water trains deployed.",
  },
  {
    year: 2015,
    kind: "policy",
    title: "PMKSY / Per Drop More Crop",
    detail: "Har Khet Ko Pani + micro-irrigation subsidies. The ministry's main farm-level efficiency instrument.",
  },
  {
    year: 2018,
    kind: "flood",
    title: "Kerala floods",
    detail: "Extreme rainfall over already-full reservoirs. Dam-operation and Western Ghats land-use debated.",
  },
  {
    year: 2018,
    kind: "policy",
    title: "NITI Aayog Composite Water Management Index",
    detail:
      "First national scorecard. Warned that 600 million people face high-to-extreme water stress; 21-city groundwater headline followed.",
  },
  {
    year: 2019,
    kind: "flood",
    title: "Excess monsoon, widespread floods",
    detail: "All-India rainfall ~110% of LPA after a delayed onset. Floods in Bihar, Assam, Maharashtra, Karnataka.",
  },
  {
    year: 2019,
    kind: "policy",
    title: "Jal Shakti ministry + Jal Jeevan Mission",
    detail:
      "Water resources and drinking water unified. JJM starts at 16.7% rural tap coverage with a 2024 universal-tap target.",
  },
  {
    year: 2020,
    kind: "policy",
    title: "Atal Bhujal Yojana",
    detail: "Community-led groundwater management in seven water-stressed states. COVID year also dips economic WUE.",
  },
  {
    year: 2022,
    kind: "heat",
    title: "Record pre-monsoon heatwave",
    detail: "March–May heat over northwest and central India; wheat yields and power-water demand stressed.",
  },
  {
    year: 2023,
    kind: "drought",
    title: "El Niño, delayed and uneven monsoon",
    detail:
      "Onset delayed; long dry spells then extreme rainfall. Global hottest year on record. FAO WUE for India reaches 3.80 USD/m³.",
  },
];

export type GapKind = "divergent" | "definitional" | "aligned";
export type GapTheme = "efficiency" | "access" | "groundwater" | "irrigation" | "resources";

export type DiscrepancyRow = {
  id: string;
  theme: GapTheme;
  indicator: string;
  year: string;
  ministry: string;
  ministrySource: SourceId;
  global: string;
  globalSource: SourceId;
  kind: GapKind;
  gap: string;
  why: string;
};

export const DISCREPANCIES: DiscrepancyRow[] = [
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
    why: "FAO 6.4.1 is sector-weighted value added (agriculture + industry + services) in current USD per m³ used. World Bank divides total GDP (constant 2015 USD) by total withdrawal. Same country, different numerator, different price basis. Neither is 'wrong' — they answer different questions.",
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
    why: "India's overall WUE is low mainly because agriculture dominates withdrawals, and farm value added per m³ is small everywhere (world ag is 0.69). India's industrial WUE is actually above the world mean. Comparing headline WUE without sector weights overstates 'inefficiency'.",
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
    why: "AQUASTAT did not receive a fresh national withdrawal update after ~2010, so global databases repeat 647.5 bcm for 12 years. Ministry figures describe renewable availability, not actual use. Journals that treat the 647.5 series as an annual measurement overstate stasis.",
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
    why: "CWC uses total average annual water resources (including contributions from transboundary rivers as estimated in Indian basin accounts). FAO's internal renewable resource excludes a portion of those inflows. Both show a country below the 1,700 m³ stress line.",
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
    why: "The similar percentages hide different universes. JJM counts rural household tap connections reported by states. JMP is national (rural + urban) and requires water on premises, available when needed, and free from faecal/priority chemical contamination. A tap that is dry, intermittent, or contaminated still counts in JJM; it does not count as JMP 'safely managed'.",
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
    why: "The ministry reports activity (area brought under drip/sprinkler). Global papers report a scheme-level ratio that has not been re-estimated nationally on a regular cadence. Both can be true: micro-irrigation is expanding, and the remaining canal-command stock still leaks at 1990s rates. Without a CWC composite time series, journals keep recycling 38%.",
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
    why: "'Reliably irrigated' excludes land that is counted as irrigated in the land-use statistics but does not receive a dependable watering. Net irrigated area, gross irrigated area, and area equipped for irrigation are three different numbers. Papers that mix them produce fake gaps.",
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
    why: "CGWB is a national sum of assessment units; GRACE is a gravity-anomaly regional signal. National extraction can fall (eastern and peninsular recharge, more water-conservation structures) while the Green Revolution belt continues to mine aquifers. Averaging hides Punjab/Haryana.",
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
    why: "The CWMI sentence was a stress scenario, not a measurement. Global commentary often dropped the conditional. Local scarcity in Chennai (2019) and Shimla was genuine; nationwide municipal 'zero groundwater' in 2020 was not.",
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
    why: "Directionally, ministry programmes and FAO's agricultural WUE agree: more crop (and more high-value crop) per drop. The units still do not match, so the size of the gain cannot be reconciled without a joint methodology.",
  },
];

export const THEME_LABEL: Record<GapTheme, string> = {
  efficiency: "Efficiency",
  access: "Drinking water",
  groundwater: "Groundwater",
  irrigation: "Irrigation",
  resources: "Resources",
};

export const KIND_LABEL: Record<GapKind, string> = {
  divergent: "Figures diverge",
  definitional: "Same topic, different definition",
  aligned: "Directionally aligned",
};

export function valueAt(series: Point[], year: number): number | null {
  const exact = series.find((p) => p.year === year);
  if (exact) return exact.value;
  return null;
}

export function nearest(series: Point[], year: number): Point | null {
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

export const YEAR_MIN = 1990;
export const YEAR_MAX = 2023;
