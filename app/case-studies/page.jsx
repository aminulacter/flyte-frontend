import CaseStudiesIntro from "@/components/case-studies/CaseStudiesIntro";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import ContactSection from "@/components/ContactSection";
import { getContentCaseStudies, getCaseStudiesByCategory } from "@/lib/api";

export const metadata = {
  title: "Case Studies | Flyte Solutions Ltd.",
  description:
    "See how Flyte Solutions Ltd. helps clients succeed through real-world software solutions. Our case studies showcase impactful results in web, mobile, and AI projects.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default async function CaseStudiesPage() {
  // Build-time (SSG) data: intro copy, marquee images, category tabs and the
  // first ("All Industries") page of case studies. Subsequent category/page
  // changes are fetched on the client inside <CaseStudiesList />.
  const [content, initialList] = await Promise.all([
    getContentCaseStudies(),
    getCaseStudiesByCategory({ categoryId: 0, page: 1 }),
  ]);

  const intro = content?.contents?.[0] || null;
  const images = content?.images || [];
  const categories = content?.categories || [];

  return (
    <div>
      <CaseStudiesIntro content={intro} images={images} />
      <div className="bg-white py-5 lg:py-10">
        <CaseStudiesList categories={categories} initial={initialList} />
      </div>
      <ContactSection />
    </div>
  );
}
