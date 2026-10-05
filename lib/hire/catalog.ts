import { TECH_STACK_CARDS } from "@/lib/hire/techStacks";

/** Broad hire lanes — match landing tech stacks and `/hire/[slug]`. */
export const HIRE_CATEGORY_SLUGS = TECH_STACK_CARDS.map((card) => card.hireLinkName);

/**
 * Framework / stack-specific pages under `/hire-sp/[slug]`.
 * Keys are specialty slugs; values are their parent category slug.
 */
export const HIRE_SPECIALTY_PARENT: Record<string, string> = {
  "reactjs-developer": "frontend-developer",
  "angular-developer": "frontend-developer",
  "vuejs-developer": "frontend-developer",
  "nextjs-developer": "frontend-developer",
  "nodejs-developer": "backend-developer",
  "laravel-developer": "backend-developer",
  "python-developer": "backend-developer",
  "flutter-developer": "mobile-app-developer",
  "android-developer": "mobile-app-developer",
  "react-native-developer": "mobile-app-developer",
};

export function isHireCategory(slug: string): boolean {
  return HIRE_CATEGORY_SLUGS.includes(slug);
}

export function isHireSpecialty(slug: string): boolean {
  return slug in HIRE_SPECIALTY_PARENT;
}

export function getSpecialtyParentCategory(slug: string): string | null {
  return HIRE_SPECIALTY_PARENT[slug] ?? null;
}

/** Public URL for a hire role slug (category or specialty). */
export function hireRolePath(slug: string): string {
  const normalized = slug.replace(/^\/+/, "").replace(/^(hire|hire-sp)\//, "");
  if (isHireCategory(normalized)) return `/hire/${normalized}`;
  if (isHireSpecialty(normalized)) return `/hire-sp/${normalized}`;
  return `/hire/${normalized}`;
}

/** All specialty URLs pre-rendered for static export (`output: "export"`). */
export const HIRE_SPECIALTY_SLUGS = Object.keys(HIRE_SPECIALTY_PARENT);

/** Slug to use when resolving tech stack marquee (specialties inherit their category). */
export function techStackSlugForRole(slug: string): string {
  return getSpecialtyParentCategory(slug) ?? slug;
}

export function resolveExploreRoleHref(href: string): string {
  if (!href) return "/hire";
  if (href.startsWith("/")) return href;
  return hireRolePath(href);
}
