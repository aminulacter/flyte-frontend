import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getService, SERVICE_SLUGS } from "@/lib/services/details";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Services | Flyte Solutions Ltd." };
  return {
    title: `${service.hero.title} | Flyte Solutions Ltd.`,
    description: service.hero.description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
