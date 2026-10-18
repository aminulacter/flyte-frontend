import type { CmsPage } from "@/lib/api";
import type { HireRole, IndustryDetail, ServiceDetail } from "@/lib/types";

function block(page: CmsPage | null | undefined, type: string) {
  return page?.blocks?.find((item) => item.type === type)?.data;
}

export function pageToService(page: CmsPage | null | undefined): ServiceDetail | null {
  const hero = block(page, "hero");
  const developing = block(page, "steps");
  const whyProcess = block(page, "feature_grid");
  const useCases = block(page, "use_cases");
  if (!page || !hero || !developing || !whyProcess || !useCases) return null;
  return {
    slug: page.slug,
    hero,
    developing,
    whyProcess,
    useCases,
  } as unknown as ServiceDetail;
}

export function pageToIndustry(page: CmsPage | null | undefined): IndustryDetail | null {
  const hero = block(page, "hero");
  const whyChoose = block(page, "feature_grid");
  const expertise = block(page, "expertise");
  const trends = block(page, "trends");
  const cta = block(page, "cta");
  if (!page || !hero || !whyChoose || !expertise || !trends || !cta) return null;
  return { slug: page.slug, hero, whyChoose, expertise, trends, cta } as unknown as IndustryDetail;
}

export function pageToHireRole(page: CmsPage | null | undefined): HireRole | null {
  const hero = block(page, "hero");
  const whyChoose = block(page, "feature_grid");
  const developing = block(page, "steps");
  const expertise = block(page, "expertise");
  if (!page || !hero || !whyChoose || !developing || !expertise) return null;

  const logos = block(page, "logo_cloud") as { title?: string; logos?: Array<{ src: string; alt: string }> } | undefined;
  const links = block(page, "link_list") as { title?: string; links?: Array<{ href: string; label: string }> } | undefined;

  return {
    slug: page.slug,
    hero,
    whyChoose,
    developing,
    expertise,
    technologies: logos ? { title: logos.title || "Technologies", items: logos.logos || [] } : undefined,
    exploreRoles: links?.links ? { title: links.title || "Explore roles", links: links.links } : undefined,
  } as unknown as HireRole;
}

export function pageToLanding<T>(page: CmsPage | null | undefined): T | null {
  const hero = block(page, "hero");
  const grid = block(page, "feature_grid") as { title?: string; cards?: unknown[] } | undefined;
  if (!hero) return null;
  return { hero, items: grid?.cards || [], title: grid?.title } as T;
}
