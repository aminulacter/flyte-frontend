import ContactSection from "@/components/ContactSection";
import TechnologyStacksSection from "@/components/hire/TechnologyStacksSection";
import HomeAbout from "@/components/home/HomeAbout";
import HomeAiMl from "@/components/home/HomeAiMl";
import HomeBrandsMarquee from "@/components/home/HomeBrandsMarquee";
import HomeHero from "@/components/home/HomeHero";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeProducts from "@/components/home/HomeProducts";
import HomeServices from "@/components/home/HomeServices";
import HomeSoftwareSolutions from "@/components/home/HomeSoftwareSolutions";
import { getProducts, getSoftwareSolutions } from "@/lib/api";

export default async function HomePage() {
  const [productsRes, solutions] = await Promise.all([getProducts(), getSoftwareSolutions()]);
  const products = productsRes?.data || [];

  return (
    <div>
      <HomeHero />
      <HomeBrandsMarquee />
      <HomeAbout />
      <HomeServices />
      <HomeProducts products={products} />
      <HomeAiMl />
      <HomeIndustries />
      <TechnologyStacksSection />
      <HomeSoftwareSolutions solutions={solutions || []} />
      <ContactSection />
    </div>
  );
}
