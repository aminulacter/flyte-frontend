/**
 * Parses industry content.js files into lib/industries/
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";

const ROOT = path.resolve("app/industries");
const OUT_DETAIL = path.resolve("lib/industries/details.js");
const OUT_LANDING = path.resolve("lib/industries/landing.js");

const INDUSTRY_SLUGS = [
  "education",
  "enterprise",
  "fintech",
  "logistics",
  "media-and-entertainment",
  "medical-and-healthcare",
  "ngo",
  "real-estate",
  "retail-and-manufacturing",
  "startup",
  "technology-company",
];

function readHtml(file) {
  const mod = fs.readFileSync(file, "utf8");
  const match = mod.match(/export default "([\s\S]*)";?\s*$/);
  if (!match) throw new Error(`Could not read ${file}`);
  return match[1]
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\u([\dA-Fa-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

function text(el) {
  return el?.text?.trim().replace(/\s+/g, " ") || "";
}

function extractIconClass(el) {
  const i = el?.querySelector("i");
  return i?.getAttribute("class") || "";
}

function extractWhyChoose(root) {
  const h2 = [...root.querySelectorAll("h2")].find((h) => text(h).startsWith("Why Choose Us"));
  const section = h2?.closest(".container");
  const introP = section?.querySelector("p.text-\\[\\#2d2e2e\\]");
  const cards = [];
  for (const card of section?.querySelectorAll(".h-\\[190px\\]") || []) {
    const h4 = card.querySelector("h4");
    const p = card.querySelector("p");
    if (h4) cards.push({ icon: extractIconClass(card), title: text(h4), description: text(p) });
  }
  return { title: text(h2), description: text(introP), cards };
}

function extractExpertise(root) {
  const h2 = [...root.querySelectorAll("h2")].find(
    (h) => text(h).includes("Expertise") && !text(h).startsWith("Why")
  );
  const section = h2?.closest(".container");
  const cards = [];
  for (const card of section?.querySelectorAll(".p-6") || []) {
    const h2c = card.querySelector("h2");
    const p = card.querySelector("p.text-gray-600");
    if (h2c) {
      cards.push({
        icon: extractIconClass(card),
        title: text(h2c),
        description: text(p),
        variant: "filled",
      });
    }
  }
  return { title: text(h2), cards };
}

function extractTrends(root) {
  const h2 = [...root.querySelectorAll("h2")].find((h) => text(h).startsWith("Emerging Trends"));
  const section = h2?.closest(".container");
  const image = section?.querySelector("img")?.getAttribute("src") || "";
  const items = [];
  for (const row of section?.querySelectorAll(".border-b-2.border-\\[\\#dbe6ff\\]") || []) {
    const num = text(row.querySelector("span"));
    const h4 = row.querySelector("h4");
    const p = row.querySelector("p");
    if (h4) items.push({ number: num, title: text(h4), description: text(p) });
  }
  return { title: text(h2), image, items };
}

function parseIndustry(slug) {
  const file = path.join(ROOT, slug, "content.js");
  const root = parse(readHtml(file));
  const heroDiv = root.querySelector(".pt-10.lg\\:pt-44");
  const heroCta = heroDiv?.querySelector("a");

  return {
    slug,
    hero: {
      eyebrow: text(heroDiv?.querySelector("h4")),
      title: text(heroDiv?.querySelector("h1")),
      description: text(heroDiv?.querySelector("p")),
      image: heroDiv?.getAttribute("style")?.match(/url\(([^)]+)\)/)?.[1] || "",
      ctaLabel: text(heroCta) || "Book A Consultation",
      ctaHref: heroCta?.getAttribute("href") || "/schedule-consultation",
    },
    whyChoose: extractWhyChoose(root),
    expertise: extractExpertise(root),
    trends: extractTrends(root),
  };
}

function parseLanding() {
  const root = parse(readHtml(path.join(ROOT, "content.js")));
  const heroDiv = root.querySelector(".pt-10.lg\\:pt-44, .pt-10");
  const heroCta = heroDiv?.querySelector("a");
  const hero = {
    eyebrow: text(heroDiv?.querySelector("h4")),
    title: text(heroDiv?.querySelector("h1")),
    description: text(heroDiv?.querySelector("p")),
    image: heroDiv?.getAttribute("style")?.match(/url\(([^)]+)\)/)?.[1] || "",
    ctaLabel: text(heroCta) || "Book A Consultation",
    ctaHref: heroCta?.getAttribute("href") || "/schedule-consultation",
  };

  const items = [];
  for (const card of root.querySelectorAll("a[href^='/industries/']")) {
    const href = card.getAttribute("href") || "";
    const slug = href.replace("/industries/", "");
    if (!slug || items.some((i) => i.slug === slug)) continue;
    const title = text(card.querySelector("h2, h3, h4")) || text(card);
    const description = text(card.querySelector("p"));
    const image = card.querySelector("img")?.getAttribute("src") || "";
    if (title) items.push({ slug, title, description, image, href });
  }

  return { hero, items };
}

const details = INDUSTRY_SLUGS.map(parseIndustry);
const landing = parseLanding();

fs.mkdirSync(path.dirname(OUT_DETAIL), { recursive: true });
fs.writeFileSync(
  OUT_DETAIL,
  `/** Auto-generated by scripts/extract-industries.mjs */
export const INDUSTRY_DETAILS = ${JSON.stringify(details, null, 2)};
export const INDUSTRY_SLUGS = ${JSON.stringify(INDUSTRY_SLUGS, null, 2)};
export function getIndustry(slug) {
  return INDUSTRY_DETAILS.find((i) => i.slug === slug) || null;
}
`
);
fs.writeFileSync(
  OUT_LANDING,
  `/** Auto-generated by scripts/extract-industries.mjs */
export const INDUSTRIES_LANDING = ${JSON.stringify(landing, null, 2)};
`
);
console.log(`Wrote ${OUT_DETAIL} (${details.length} industries)`);
console.log(`Wrote ${OUT_LANDING}`);
