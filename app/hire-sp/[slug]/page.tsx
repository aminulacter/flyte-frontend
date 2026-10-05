import { notFound } from "next/navigation";
import HireSpecificRolePage from "@/components/hire/HireSpecificRolePage";
import { HIRE_SPECIALTY_SLUGS, isHireSpecialty } from "@/lib/hire/catalog";
import { getHireSpecialtyRole } from "@/lib/hire/roles";
import type { SlugPageProps } from "@/lib/types";

export function generateStaticParams() {
  return HIRE_SPECIALTY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  if (!isHireSpecialty(slug)) return { title: "Hire | Flyte Solutions Ltd." };
  const role = getHireSpecialtyRole(slug);
  if (!role) return { title: "Hire | Flyte Solutions Ltd." };
  return {
    title: `${role.hero.title} | Flyte Solutions Ltd.`,
    description: role.hero.description,
    alternates: { canonical: `/hire-sp/${slug}` },
  };
}

export default async function HireSpecialtyRoutePage({ params }: SlugPageProps) {
  const { slug } = await params;
  if (!isHireSpecialty(slug)) notFound();
  const role = getHireSpecialtyRole(slug);
  if (!role) notFound();
  return <HireSpecificRolePage role={role} />;
}
