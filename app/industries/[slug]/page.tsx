import { notFound } from "next/navigation";
import IndustryDetailPage from "@/components/industries/IndustryDetailPage";
import { getIndustry, INDUSTRY_SLUGS } from "@/lib/industries/details";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

import type { SlugPageProps } from "@/lib/types";

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industries | Flyte Solutions Ltd." };
  return {
    title: `${industry.hero.title} | Flyte Solutions Ltd.`,
    description: industry.hero.description,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustrySlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryDetailPage industry={industry} />;
}
