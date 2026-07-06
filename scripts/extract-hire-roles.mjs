/**
 * Parses hire role content.js HTML into structured data for lib/hire/roles.js
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";

const ROOT = path.resolve("app/hire");
const OUT = path.resolve("lib/hire/roles.js");

const ROLE_SLUGS = [
  "ai-ml-developer",
  "angular-developer",
  "backend-developer",
  "devops-engineer",
  "frontend-developer",
  "mobile-app-developer",
  "nextjs-developer",
  "qa-engineer",
  "reactjs-developer",
  "vuejs-developer",
];

function text(el) {
  return el?.text?.trim().replace(/\s+/g, " ") || "";
}

function extractIconClass(el) {
  const i = el?.querySelector("i");
  if (!i) return "";
  return i.getAttribute("class") || "";
}

function extractCards(container) {
  const cards = [];
  for (const card of container?.querySelectorAll(".p-6") || []) {
    const h2 = card.querySelector("h2");
    const p = card.querySelector("p");
    if (!h2) continue;
    cards.push({
      icon: extractIconClass(card),
      title: text(h2),
      description: text(p),
      variant: card.getAttribute("class")?.includes("bg-gray-200") ? "filled" : "transparent",
    });
  }
  return cards;
}

function extractSteps(container) {
  const steps = [];
  for (const block of container?.querySelectorAll(".space-y-2\\.5 > div, .space-y-2\\.5 > div") || []) {
    const h4 = block.querySelector("h4");
    const p = block.querySelector("p");
    if (h4) steps.push({ title: text(h4), description: text(p) });
  }
  // fallback: direct children
  if (!steps.length) {
    const parent = container?.querySelector(".space-y-2\\.5");
    if (parent) {
      for (const block of parent.childNodes.filter((n) => n.tagName === "DIV")) {
        const h4 = block.querySelector("h4");
        const p = block.querySelector("p");
        if (h4) steps.push({ title: text(h4), description: text(p) });
      }
    }
  }
  return steps;
}

function parseRole(slug) {
  const file = path.join(ROOT, slug, "content.js");
  const mod = fs.readFileSync(file, "utf8");
  const match = mod.match(/export default "([\s\S]*)";?\s*$/);
  if (!match) throw new Error(`Could not read ${file}`);
  const html = match[1]
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\u([\dA-Fa-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
  const root = parse(html);

  // Hero
  const heroDiv = root.querySelector(".pt-10.lg\\:pt-44");
  const heroBg = heroDiv?.getAttribute("style")?.match(/url\(([^)]+)\)/)?.[1] || "";
  const eyebrow = text(heroDiv?.querySelector("h4"));
  const title = text(heroDiv?.querySelector("h1"));
  const description = text(heroDiv?.querySelector("p"));
  const cta = heroDiv?.querySelector("a");
  const ctaLabel = text(cta);
  let ctaHref = cta?.getAttribute("href") || "/hire/application-form";
  if (!ctaHref.startsWith("/")) ctaHref = `/hire/${ctaHref}`;

  // Why Choose
  const whyH2 = [...root.querySelectorAll("h2")].find((h) => text(h).startsWith("Why Choose"));
  const whySection = whyH2?.closest(".container");
  const whyChoose = {
    title: text(whyH2),
    cards: extractCards(whySection?.querySelector(".grid")),
  };

  // Development (two-column section)
  const devGrid = root.querySelector(".container.grid.grid-cols-1.lg\\:grid-cols-2");
  const devLeft = devGrid?.childNodes.find((n) => n.tagName === "DIV");
  const devRight = devGrid?.childNodes.filter((n) => n.tagName === "DIV")[1];
  const devImg = devLeft?.querySelector("img");
  const devCta = root.querySelector('a[href*="application-form"]');
  const developing = {
    title: text(devLeft?.querySelector("h2")),
    description: text(devLeft?.querySelector("p")),
    image: devImg?.getAttribute("src") || "",
    imageAlt: devImg?.getAttribute("alt") || "",
    stepsTitle: text(devRight?.querySelector("h2")),
    steps: extractSteps(devRight),
    ctaLabel: text(devCta)?.includes("Start") ? text(devCta) : "Start Hiring",
    ctaHref: "/hire/application-form",
  };

  // Expertise
  const expH2 = [...root.querySelectorAll("h2")].find(
    (h) => text(h).includes("Expertise") || text(h).includes("Expert Team")
  );
  const expSection = expH2?.closest(".container");
  const expGrid = expSection?.querySelector(".grid");
  const expertiseImage = expGrid?.querySelector("img")?.getAttribute("src") || "";
  const expertise = {
    title: text(expH2),
    cards: extractCards(expGrid?.querySelector(".grid") || expGrid),
    image: expertiseImage,
  };

  // Technologies (optional)
  const techH2 = [...root.querySelectorAll("h2")].find((h) => text(h).includes("Technologies We Work"));
  let technologies = null;
  if (techH2) {
    const techSection = techH2.closest(".container");
    technologies = {
      title: text(techH2),
      items: [...(techSection?.querySelectorAll("img") || [])].map((img) => ({
        src: img.getAttribute("src"),
        alt: img.getAttribute("alt"),
      })),
    };
  }

  // Explore more roles (optional)
  const exploreH2 = [...root.querySelectorAll("h2")].find((h) =>
    text(h).includes("Explore More Developer Roles")
  );
  let exploreRoles = null;
  if (exploreH2) {
    const section = exploreH2.closest(".container") || exploreH2.parentNode;
    exploreRoles = {
      title: text(exploreH2),
      links: [...(section?.querySelectorAll("a") || [])].map((a) => ({
        href: a.getAttribute("href"),
        label: text(a),
      })),
    };
  }

  return {
    slug,
    hero: { eyebrow, title, description, image: heroBg, ctaLabel, ctaHref },
    whyChoose,
    developing,
    expertise,
    ...(technologies ? { technologies } : {}),
    ...(exploreRoles ? { exploreRoles } : {}),
  };
}

const roles = ROLE_SLUGS.map(parseRole);
const source = `// Auto-generated from app/hire/*/content.js by scripts/extract-hire-roles.mjs
export const HIRE_ROLES = ${JSON.stringify(roles, null, 2)};

export const HIRE_ROLE_SLUGS = ${JSON.stringify(ROLE_SLUGS, null, 2)};

export function getHireRole(slug) {
  return HIRE_ROLES.find((r) => r.slug === slug) || null;
}
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, source);
console.log(`Wrote ${OUT} (${roles.length} roles)`);
