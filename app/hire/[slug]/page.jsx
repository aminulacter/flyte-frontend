import { notFound } from "next/navigation";
import HireRolePage from "@/components/hire/HireRolePage";
import { getHireRole, HIRE_ROLE_SLUGS } from "@/lib/hire/roles";

export function generateStaticParams() {
  return HIRE_ROLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) return { title: "Hire | Flyte Solutions Ltd." };
  return {
    title: `${role.hero.title} | Flyte Solutions Ltd.`,
    description: role.hero.description,
    alternates: { canonical: `/hire/${slug}` },
  };
}

export default async function HireRoleDetailPage({ params }) {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) notFound();
  return <HireRolePage role={role} />;
}
