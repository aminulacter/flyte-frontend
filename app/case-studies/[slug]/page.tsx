import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import ContactSection from "@/components/ContactSection";
import { getCaseStudiesByCategory, getSpecificCaseStudy } from "@/lib/api";

// Pre-render every case study at build time (static export). The list API
// pages 12 at a time, and `output: "export"` refuses any slug that is missing here.
export async function generateStaticParams() {
  const first = await getCaseStudiesByCategory({ categoryId: 0, page: 1 });
  const last = first?.last_page || 1;
  const pages = await Promise.all(
    Array.from({ length: last }, (_, index) =>
      index === 0 ? Promise.resolve(first) : getCaseStudiesByCategory({ categoryId: 0, page: index + 1 }),
    ),
  );
  const slugs = new Set(
    pages.flatMap((page) => (page?.data || []).map((study) => study?.slug).filter(Boolean)),
  );
  return [...slugs].map((slug) => ({ slug }));
}

import type { SlugPageProps } from "@/lib/types";

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const data = await getSpecificCaseStudy(slug);
  if (!data) {
    return { title: "Case Study | Flyte Solutions Ltd." };
  }
  return {
    title: data.meta_title || `${data.title} | Flyte Solutions Ltd.`,
    description: data.meta_description || data.short_description,
    keywords: data.meta_keyword,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const data = await getSpecificCaseStudy(slug);
  if (!data) notFound();

  return (
    <div className="bg-white">
      <CaseStudyDetail data={data} />
      <ContactSection />
    </div>
  );
}
