import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import ContactSection from "@/components/ContactSection";
import { getCaseStudiesByCategory, getSpecificCaseStudy } from "@/lib/api";

// Pre-render every case study at build time (static export).
export async function generateStaticParams() {
  const list = await getCaseStudiesByCategory({ categoryId: 0, page: 1 });
  const items = list?.data || [];
  return items.filter((cs) => cs?.slug).map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
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

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const data = await getSpecificCaseStudy(slug);
  if (!data) notFound();

  return (
    <div>
      <CaseStudyDetail data={data} />
      <ContactSection />
    </div>
  );
}
