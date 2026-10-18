import { notFound } from "next/navigation";
import CareerDetail from "@/components/career/CareerDetail";
import { getCareerDetails, getCareers } from "@/lib/api";
import type { SlugPageProps } from "@/lib/types";

export async function generateStaticParams() {
  const jobs = await getCareers();
  return (jobs || []).filter((job) => job.slug).map((job) => ({ slug: String(job.slug) }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const job = await getCareerDetails(slug);
  if (!job) return { title: "Career | Flyte Solutions" };
  return {
    title: `${job.title} | Flyte Solutions`,
    description: job.short_description,
    alternates: { canonical: `/career/${slug}` },
  };
}

export default async function CareerDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const job = await getCareerDetails(slug);
  if (!job) notFound();
  return <CareerDetail job={job} />;
}
