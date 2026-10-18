import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.resolve(frontendRoot, "../flyte-admin/database/legacy/static-content.json");

function extractConst(relativeFile, name) {
  const source = fs.readFileSync(path.join(frontendRoot, relativeFile), "utf8");
  const marker = new RegExp(`export const ${name}(?![A-Za-z0-9_])`);
  const found = marker.exec(source);
  if (!found) {
    throw new Error(`Missing ${name} in ${relativeFile}`);
  }
  const start = found.index;

  let index = source.indexOf("=", start);
  index += 1;
  while (/\s/.test(source[index])) index += 1;

  return parseLiteral(source, index).value;
}

function parseLiteral(source, start) {
  const opening = source[start];
  if (opening !== "{" && opening !== "[") {
    throw new Error(`Expected object or array at ${start}`);
  }

  const closing = opening === "{" ? "}" : "]";
  let depth = 0;
  let quote = null;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (char === "\\") {
        index += 1;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === opening) depth += 1;
    if (char === closing) {
      depth -= 1;
      if (depth === 0) {
        const literal = source.slice(start, index + 1);
        return { value: Function(`"use strict"; return (${literal});`)(), end: index };
      }
    }
  }

  throw new Error("Unclosed literal");
}

function block(type, data) {
  return data ? { type, data } : null;
}

function servicePage(detail) {
  return {
    type: "service",
    slug: detail.slug,
    title: detail.hero?.title || detail.slug,
    blocks: [
      block("hero", detail.hero),
      block("steps", detail.developing),
      block("feature_grid", detail.whyProcess),
      block("use_cases", detail.useCases),
    ].filter(Boolean),
  };
}

function industryPage(detail) {
  return {
    type: "industry",
    slug: detail.slug,
    title: detail.hero?.title || detail.slug,
    blocks: [
      block("hero", detail.hero),
      block("feature_grid", detail.whyChoose),
      block("expertise", detail.expertise),
      block("cta", detail.cta),
      block("trends", detail.trends),
    ].filter(Boolean),
  };
}

function hirePage(role, parentSlug) {
  const logos = role.technologies?.items?.map((item) => ({ src: item.src, alt: item.alt })) || [];

  return {
    type: parentSlug ? "hire_specialty" : "hire_role",
    slug: role.slug,
    title: role.hero?.title || role.slug,
    parent_slug: parentSlug || null,
    blocks: [
      block("hero", role.hero),
      block("feature_grid", role.whyChoose),
      block("steps", role.developing),
      block("expertise", role.expertise),
      block("logo_cloud", logos.length ? { title: role.technologies?.title || "Technologies", logos } : null),
      block("link_list", role.exploreRoles),
    ].filter(Boolean),
  };
}

const services = extractConst("lib/services/details.ts", "SERVICE_DETAILS");
const industries = extractConst("lib/industries/details.ts", "INDUSTRY_DETAILS");
const hireRoles = extractConst("lib/hire/roles.ts", "HIRE_ROLES");
const specialtyParents = extractConst("lib/hire/catalog.ts", "HIRE_SPECIALTY_PARENT");
const megaMenus = extractConst("lib/navigation.ts", "MEGA_MENUS");
const companyMenu = extractConst("lib/navigation.ts", "COMPANY_MENU");
const brands = extractConst("lib/brands.ts", "BRANDS");
const industryBrands = extractConst("lib/industries/landing.ts", "INDUSTRY_BRANDS");
const servicesLanding = extractConst("lib/services/landing.ts", "SERVICES_LANDING");
const industriesLanding = extractConst("lib/industries/landing.ts", "INDUSTRIES_LANDING");
const hireHero = extractConst("lib/hire/landing.ts", "HIRE_LANDING_HERO");
const hireAdvantages = extractConst("lib/hire/landing.ts", "HIRE_ADVANTAGES");
const homeHero = extractConst("lib/home/static.ts", "HOME_HERO");
const homeAbout = extractConst("lib/home/static.ts", "HOME_ABOUT");
const homeServices = extractConst("lib/home/static.ts", "HOME_SERVICES");

const pages = [
  {
    type: "home",
    slug: "home",
    title: homeHero.title,
    blocks: [
      block("hero", { ...homeHero, eyebrow: "", image: "", ctaLabel: "", ctaHref: "" }),
      block("rich_text", { html: `<h2>${homeAbout.title || ""}</h2><p>${homeAbout.description || ""}</p>` }),
      block("feature_grid", { title: "Services", cards: homeServices }),
    ].filter(Boolean),
  },
  {
    type: "page",
    slug: "services",
    title: servicesLanding.hero?.title || "Services",
    blocks: [
      block("hero", servicesLanding.hero),
      block("feature_grid", { title: "Services", cards: servicesLanding.items || [] }),
    ].filter(Boolean),
  },
  {
    type: "page",
    slug: "industries",
    title: industriesLanding.hero?.title || "Industries",
    blocks: [
      block("hero", industriesLanding.hero),
      block("feature_grid", { title: "Industries", cards: industriesLanding.items || [] }),
    ].filter(Boolean),
  },
  {
    type: "page",
    slug: "hire",
    title: hireHero.title,
    blocks: [
      block("hero", hireHero),
      block("feature_grid", { title: "Advantages", cards: hireAdvantages }),
    ].filter(Boolean),
  },
  ...services.map(servicePage),
  ...industries.map(industryPage),
  ...hireRoles.map((role) => hirePage(role, specialtyParents[role.slug] || null)),
];

const payload = {
  brands: [
    ...brands.map((brand) => ({ name: brand.alt, logo: brand.src, alt: brand.alt, group: "home" })),
    ...industryBrands.map((brand) => ({ name: brand.alt, logo: brand.src, alt: brand.alt, group: "industries" })),
  ],
  menus: {
    header: {
      name: "Header",
      items: megaMenus.map((menu) => ({
        label: menu.label,
        href: menu.moreHref,
        description: menu.description,
        children: (menu.items || []).map((item) => ({
          label: item.title,
          href: item.href,
          description: item.desc,
          icon: item.icon,
        })),
      })),
    },
    header_company: {
      name: "Company",
      items: [
        {
          label: companyMenu.label,
          href: companyMenu.moreHref,
          description: companyMenu.description,
          children: (companyMenu.items || []).map((item) => ({
            label: item.title || item.label,
            href: item.href,
            description: item.desc,
            icon: item.icon,
          })),
        },
      ],
    },
  },
  pages,
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(payload, null, 2));
console.log(`Wrote ${pages.length} pages to ${output}`);
