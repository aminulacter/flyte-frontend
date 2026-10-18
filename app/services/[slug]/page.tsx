import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getServiceIndex, getServicePage } from "@/lib/api";
import { pageToService } from "@/lib/cms";
import { getService, SERVICE_SLUGS } from "@/lib/services/details";

export async function generateStaticParams() {
  const index = await getServiceIndex();
  const slugs = new Set(SERVICE_SLUGS);
  index?.items?.forEach((item) => item.slug && slugs.add(item.slug));
  return [...slugs].map((slug) => ({ slug }));
}

import type { SlugPageProps } from "@/lib/types";

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const service = pageToService(await getServicePage(slug)) || getService(slug);
  if (!service) return { title: "Services | Flyte Solutions Ltd." };
  return {
    title: `${service.hero.title} | Flyte Solutions Ltd.`,
    description: service.hero.description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceSlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const service = pageToService(await getServicePage(slug)) || getService(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
