/**
 * Parses service content.js files into lib/services/
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";

const ROOT = path.resolve("app/services");
const OUT_DETAIL = path.resolve("lib/services/details.js");
const OUT_LANDING = path.resolve("lib/services/landing.js");

const SERVICE_SLUGS = [
  "custom-software-development",
  "enterprise-software-development",
  "mobile-app-development",
  "mvp-development",
  "qa-and-testing",
  "team-extension",
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

function extractSteps(container) {
  const steps = [];
  const parent = container?.querySelector(".space-y-2\\.5");
  if (!parent) return steps;
  for (const block of parent.childNodes.filter((n) => n.tagName === "DIV")) {
    const h4 = block.querySelector("h4");
    const p = block.querySelector("p");
    if (h4) steps.push({ title: text(h4), description: text(p) });
  }
  return steps;
}

function extractProcessCards(section) {
  const cards = [];
  for (const card of section?.querySelectorAll(".p-6") || []) {
    const h2 = card.querySelector("h2");
    const p = card.querySelector("p.text-gray-600");
    if (!h2) continue;
    cards.push({
      icon: extractIconClass(card),
      title: text(h2),
      description: text(p),
      variant: card.classNames?.includes("bg-gray-200") ? "filled" : "transparent",
    });
  }
  return cards;
}

function extractUseCases(root) {
  const useH1 = [...root.querySelectorAll("h1")].find((h) => text(h).includes("Boost Efficiency"));
  const section = useH1?.closest(".container");
  const cards = [];
  for (const card of section?.querySelectorAll(".bg-\\[\\#F9FAFB\\]") || []) {
    const h2 = card.querySelector("h2");
    const p = card.querySelector("p.text-gray-600");
    const bullets = [...card.querySelectorAll(".text-\\[\\#3b3c4a\\]")].map((el) => text(el));
    if (h2) {
      cards.push({
        icon: extractIconClass(card),
        title: text(h2),
        description: text(p),
        bullets,
      });
    }
  }
  return {
    eyebrow: text(section?.querySelector("p.text-btnColor")),
    title: text(useH1),
    cards,
  };
}

function parseService(slug) {
  const file = path.join(ROOT, slug, "content.js");
  const root = parse(readHtml(file));

  const heroDiv = root.querySelector(".pt-10.lg\\:pt-44");
  const heroBg = heroDiv?.getAttribute("style")?.match(/url\(([^)]+)\)/)?.[1] || "";
  const heroCta = heroDiv?.querySelector("a");

  const devGrid = root.querySelector(".container.grid.grid-cols-1.lg\\:grid-cols-2");
  const devChildren = devGrid?.childNodes.filter((n) => n.tagName === "DIV") || [];
  const devLeft = devChildren[0];
  const devRight = devChildren[1];
  const devImg = devLeft?.querySelector("img");
  const devCta = root.querySelector('a[href*="schedule-consultation"]');

  const processH2 = [...root.querySelectorAll("h2")].find((h) => text(h).includes("Why Our Process"));
  const processSection = processH2?.closest(".container");

  return {
    slug,
    hero: {
      eyebrow: text(heroDiv?.querySelector("h4")),
      title: text(heroDiv?.querySelector("h1")),
      description: text(heroDiv?.querySelector("p")),
      image: heroBg,
      ctaLabel: text(heroCta) || "Book A Consultation",
      ctaHref: heroCta?.getAttribute("href") || "/schedule-consultation",
    },
    developing: {
      title: text(devLeft?.querySelector("h2")),
      description: text(devLeft?.querySelector("p")),
      image: devImg?.getAttribute("src") || "",
      imageAlt: devImg?.getAttribute("alt") || "",
      stepsTitle: text(devRight?.querySelector("h2")),
      steps: extractSteps(devRight),
      ctaLabel: text(devCta)?.includes("Start") ? text(devCta) : "Start Custom Project",
      ctaHref: "/schedule-consultation",
    },
    whyProcess: {
      title: text(processH2) || "Why Our Process Works?",
      cards: extractProcessCards(processSection),
    },
    useCases: extractUseCases(root),
  };
}

function parseLanding() {
  const root = parse(readHtml(path.join(ROOT, "content.js")));
  const heroDiv = root.querySelector(".pt-10.lg\\:pt-44");
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
  for (const block of root.querySelectorAll(".bg-white.py-10.md\\:flex")) {
    const eyebrow = text(block.querySelector("h4"));
    const title = text(block.querySelector("h2"));
    const description = text(block.querySelector("p.text-\\[\\#6e6e6e\\]"));
    const tags = [...block.querySelectorAll("p.text-neutral-600")].map((el) => text(el));
    const images = [...block.querySelectorAll("img")].map((img) => ({
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt"),
    }));
    const link = block.querySelector("a");
    let href = link?.getAttribute("href") || "#";
    if (href && !href.startsWith("/")) href = `/services/${href}`;
    if (eyebrow && title) {
      items.push({
        eyebrow,
        title,
        description,
        tags,
        images,
        href,
        reversed: block.classNames?.includes("flex-row-reverse") || false,
      });
    }
  }

  return { hero, items };
}

const details = SERVICE_SLUGS.map(parseService);
const landing = parseLanding();

fs.mkdirSync(path.dirname(OUT_DETAIL), { recursive: true });
fs.writeFileSync(
  OUT_DETAIL,
  `/** Auto-generated by scripts/extract-services.mjs */
export const SERVICE_DETAILS = ${JSON.stringify(details, null, 2)};
export const SERVICE_SLUGS = ${JSON.stringify(SERVICE_SLUGS, null, 2)};
export function getService(slug) {
  return SERVICE_DETAILS.find((s) => s.slug === slug) || null;
}
`
);
fs.writeFileSync(
  OUT_LANDING,
  `/** Auto-generated by scripts/extract-services.mjs */
export const SERVICES_LANDING = ${JSON.stringify(landing, null, 2)};
`
);
console.log(`Wrote ${OUT_DETAIL} (${details.length} services)`);
console.log(`Wrote ${OUT_LANDING}`);
