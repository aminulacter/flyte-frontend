import ContactSection from "@/components/ContactSection";
import TechnologyStacksSection from "@/components/hire/TechnologyStacksSection";
import HomeAbout from "@/components/home/HomeAbout";
import HomeBrandsMarquee from "@/components/home/HomeBrandsMarquee";
import HomeCaseStudies from "@/components/home/HomeCaseStudies";
import HomeHero from "@/components/home/HomeHero";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeProducts from "@/components/home/HomeProducts";
import HomeServices from "@/components/home/HomeServices";
import { getCaseStudies, getProducts } from "@/lib/api";

import "./home.css";

export default async function HomePage() {
  const [productsRes, caseStudiesRes] = await Promise.all([
    getProducts(),
    getCaseStudies(),
  ]);
  const products = productsRes?.data || [];
  const caseStudies = caseStudiesRes?.data || [];

  return (
    <div>
      <HomeHero />
      <HomeBrandsMarquee />
      <HomeAbout />
      <HomeServices />
      <HomeProducts products={products} />
      <HomeIndustries />
      <TechnologyStacksSection variant="home" />
      <HomeCaseStudies caseStudies={caseStudies} />
      <ContactSection />
    </div>
  );
}
