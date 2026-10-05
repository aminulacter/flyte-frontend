import { notFound, redirect } from "next/navigation";
import HireCategoryRolePage from "@/components/hire/HireCategoryRolePage";
import {
  HIRE_CATEGORY_SLUGS,
  hireRolePath,
  isHireCategory,
  isHireSpecialty,
} from "@/lib/hire/catalog";
import { getHireRole } from "@/lib/hire/roles";
import type { SlugPageProps } from "@/lib/types";

export function generateStaticParams() {
  return HIRE_CATEGORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) return { title: "Hire | Flyte Solutions Ltd." };
  return {
    title: `${role.hero.title} | Flyte Solutions Ltd.`,
    description: role.hero.description,
    alternates: { canonical: `/hire/${slug}` },
  };
}

export default async function HireCategoryRoutePage({ params }: SlugPageProps) {
  const { slug } = await params;
  if (isHireSpecialty(slug)) {
    redirect(hireRolePath(slug));
  }
  if (!isHireCategory(slug)) notFound();
  const role = getHireRole(slug);
  if (!role) notFound();
  return <HireCategoryRolePage role={role} />;
}
