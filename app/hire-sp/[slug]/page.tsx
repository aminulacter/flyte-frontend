import { notFound } from "next/navigation";
import HireSpecificRolePage from "@/components/hire/HireSpecificRolePage";
import { getHireIndex, getHirePage } from "@/lib/api";
import { pageToHireRole } from "@/lib/cms";
import { HIRE_SPECIALTY_SLUGS } from "@/lib/hire/catalog";
import { getHireSpecialtyRole } from "@/lib/hire/roles";
import type { SlugPageProps } from "@/lib/types";

export async function generateStaticParams() {
  const index = await getHireIndex();
  const slugs = new Set(HIRE_SPECIALTY_SLUGS);
  index?.items?.filter((item) => item.type === "hire_specialty").forEach((item) => slugs.add(item.slug));
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const role = pageToHireRole(await getHirePage(slug)) || getHireSpecialtyRole(slug);
  if (!role) return { title: "Hire | Flyte Solutions Ltd." };
  return {
    title: `${role.hero.title} | Flyte Solutions Ltd.`,
    description: role.hero.description,
    alternates: { canonical: `/hire-sp/${slug}` },
  };
}

export default async function HireSpecialtyRoutePage({ params }: SlugPageProps) {
  const { slug } = await params;
  const role = pageToHireRole(await getHirePage(slug)) || getHireSpecialtyRole(slug);
  if (!role) notFound();
  return <HireSpecificRolePage role={role} />;
}
