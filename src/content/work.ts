// Everything on the results board is real: client names, their products and the work we did.
// Only add a figure here when it comes from our own client reporting and the client is happy to be named.

import { asset } from "./site";

export type Platform = "TikTok Shop" | "Shopee" | "Lazada" | "Shopify";

export type Brand = {
  id: string;
  name: string;
  what: string;
  market: string;
  platforms: Platform[];
  url?: string;
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
  logo?: { src: string; alt: string; width: number; height: number };
  work: string[];
};

export const creatorGrowth = {
  brand: "BluePansy.id",
  from: 6,
  to: 244,
  label: "active affiliate creators generating sales",
  context: "Women's jeans brand, Indonesia, launched November 2025",
  source: {
    label: "Launch coverage",
    url: "https://hitzlyfemedia.com/ayu-wira-utami-sukses-dirikan-brand-jeans-wanita-bluepansy-id-raup-ratusan-juta-dalam-satu-bulan-launching/",
  },
};

export const brands: Brand[] = [
  {
    id: "legendary",
    name: "Legendary® Perfume",
    what: "Heritage perfume house",
    market: "Malaysia",
    platforms: ["Shopee", "TikTok Shop", "Lazada", "Shopify"],
    url: "https://www.legendary.com.my/",
    image: { src: asset("brands/legendary-orchid-wide.webp"), alt: "Legendary Orchid eau de parfum on marble with white orchids" },
    work: [
      "We oversee Shopee Live and reconcile every session against the live vendor's billing.",
      "Our Shopee search tests showed “parfum” converts better than “perfume”, so the titles lead with it.",
      "Budget only scales when a session's GMV per hour clears a set threshold.",
    ],
  },
  {
    id: "bluepansy",
    name: "BluePansy.id",
    what: "Women's jeans",
    market: "Indonesia",
    platforms: ["TikTok Shop", "Shopee"],
    work: [
      "Grew active, sales-generating affiliate creators from 6 to 244.",
      "Traced a March sales spike to a single creator video. The creator brief we wrote next measurably lifted conversion.",
      "Recommended pulling the jeans line from Shopee and relaunching it on TikTok Shop, where it fits.",
    ],
  },
  {
    id: "kluang",
    name: "Kluang TV Coffee",
    what: "Coffee maker for over 60 years",
    market: "Malaysia",
    platforms: ["TikTok Shop"],
    url: "https://kluangcoffee.com.my/",
    image: { src: asset("brands/kluang-kopi-o.webp"), alt: "Kluang TV Coffee Kopi-O Kosong pack", fit: "contain" },
    logo: { src: asset("brands/kluang-logo.png"), alt: "Kluang TV Coffee logo", width: 200, height: 190 },
    work: ["Four months of TikTok Shop reporting on affiliates and SKUs, month by month, so the next month's push goes to what sold."],
  },
  {
    id: "epetz",
    name: "ePetz",
    what: "Smart cat-care gadgets",
    market: "Malaysia & Singapore",
    platforms: ["Shopify"],
    url: "https://www.epetz.my/",
    image: { src: asset("brands/epetz-neakasa.webp"), alt: "Neakasa M1 Plus self-cleaning litter box sold by ePetz", fit: "contain" },
    logo: { src: asset("brands/epetz-logo-white.png"), alt: "ePetz logo", width: 255, height: 325 },
    work: ["E-commerce brand management for an authorised Petkit, Neakasa and Petree supplier."],
  },
  {
    id: "franklab",
    name: "Franklab",
    what: "Electrochemistry supplies from Hangzhou",
    market: "United States & Canada",
    platforms: ["Shopify"],
    url: "https://franklab.shop/",
    image: { src: asset("brands/franklab-pt-ring.webp"), alt: "Franklab platinum mesh and coil electrodes", fit: "contain" },
    logo: { src: asset("brands/franklab-logo-white.png"), alt: "Franklab logo", width: 320, height: 68 },
    work: [
      "We run the Shopify B2B store for North American labs. Our outreach found a high-value industrial buyer who placed a significant order.",
    ],
  },
];

export const services = [
  {
    name: "Marketplace management",
    body: "Day-to-day running of your TikTok Shop, Shopee, Lazada and Shopify stores: catalogue, pricing, vouchers, stock and campaign calendars.",
    tags: ["TikTok Shop", "Shopee", "Lazada", "Shopify"],
  },
  {
    name: "Listings and search",
    body: "Titles inside Shopee's 120-character limit, keywords people actually type, and SKU clean-ups when a line isn't earning its place.",
    tags: ["Titles", "Keywords", "SKU review"],
  },
  {
    name: "Campaigns and ads",
    body: "Shopee Ads and TikTok GMV Max, planned around mega-sale days and cut the moment a campaign stops paying back.",
    tags: ["Shopee Ads", "GMV Max", "Mega sales"],
  },
  {
    name: "Livestreaming",
    body: "Hosts in Bahasa Malaysia, English and 中文, prime-time schedules, and a reconciliation of every session so you know what each hour earned.",
    tags: ["TikTok LIVE", "Shopee Live", "Hosts"],
  },
  {
    name: "Affiliates and creators",
    body: "Outreach, samples, briefs and commission design. The goal is creators who keep selling, measured by who actually generates GMV.",
    tags: ["Outreach", "Briefs", "Commission"],
  },
  {
    name: "Reporting and reviews",
    body: "Monthly diagnostics, competitor monitoring and founder-ready business reviews with the numbers behind every recommendation.",
    tags: ["Monthly report", "Competitors", "Founder deck"],
  },
];

export const history = [
  {
    year: "2009",
    title: "DuskBin Electronic Sports",
    body: "Founded in Malaysia with teams in StarCraft II, Heroes of Newerth, Counter-Strike and Dota 2.",
  },
  {
    year: "2010",
    title: "Ranked #4 by GosuGamers",
    body: "GosuGamers put DuskBin fourth among 2010's competitive Heroes of Newerth teams, noting its win over FnaticMSI.",
    source: { label: "GosuGamers", url: "https://www.gosugamers.net/news/14062-my-take-on-2010-top-10-competitive-teams" },
  },
  {
    year: "2011",
    title: "Champions at TGX 2011, Singapore",
    body: "DuskBin.HoN won the Heroes of Newerth event against teams from across Southeast Asia. The HoN division also won the UNGL Destiny Cup.",
    source: { label: "The Reimaru Files", url: "https://www.reimarufiles.com/2011/09/17/a-big-win-for-the-filipino-gamers/" },
  },
  {
    year: "On Twitch",
    title: "马来西亚虫王",
    body: "Our founder streamed StarCraft to Taiwanese audiences and managed pros including Sen from Taiwan and F91 from China.",
  },
  {
    year: "Now",
    title: "Duskbin, e-commerce",
    body: "The same work, a different stage: read the chat, hold the room, and turn the moment into orders.",
  },
];
