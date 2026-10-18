import { notFound } from "next/navigation";
import IndustryDetailPage from "@/components/industries/IndustryDetailPage";
import { getIndustryIndex, getIndustryPage } from "@/lib/api";
import { pageToIndustry } from "@/lib/cms";
import { getIndustry, INDUSTRY_SLUGS } from "@/lib/industries/details";

export async function generateStaticParams() {
  const index = await getIndustryIndex();
  const slugs = new Set(INDUSTRY_SLUGS);
  index?.items?.forEach((item) => item.slug && slugs.add(item.slug));
  return [...slugs].map((slug) => ({ slug }));
}

import type { SlugPageProps } from "@/lib/types";

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const industry = pageToIndustry(await getIndustryPage(slug)) || getIndustry(slug);
  if (!industry) return { title: "Industries | Flyte Solutions Ltd." };
  return {
    title: `${industry.hero.title} | Flyte Solutions Ltd.`,
    description: industry.hero.description,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustrySlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const industry = pageToIndustry(await getIndustryPage(slug)) || getIndustry(slug);
  if (!industry) notFound();
  return <IndustryDetailPage industry={industry} />;
}
