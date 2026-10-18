import { notFound, redirect } from "next/navigation";
import HireCategoryRolePage from "@/components/hire/HireCategoryRolePage";
import { getHireIndex, getHirePage } from "@/lib/api";
import { pageToHireRole } from "@/lib/cms";
import {
  HIRE_CATEGORY_SLUGS,
  hireRolePath,
  isHireSpecialty,
} from "@/lib/hire/catalog";
import { getHireRole } from "@/lib/hire/roles";
import type { SlugPageProps } from "@/lib/types";

export async function generateStaticParams() {
  const index = await getHireIndex();
  const slugs = new Set(HIRE_CATEGORY_SLUGS);
  index?.items?.filter((item) => item.type === "hire_role").forEach((item) => item.slug && slugs.add(item.slug));
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const role = pageToHireRole(await getHirePage(slug)) || getHireRole(slug);
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
  const role = pageToHireRole(await getHirePage(slug)) || getHireRole(slug);
  if (!role) notFound();
  return <HireCategoryRolePage role={role} />;
}
