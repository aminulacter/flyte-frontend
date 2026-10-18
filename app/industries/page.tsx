import IndustriesLandingPage from "@/components/industries/IndustriesLandingPage";
import { getIndustryIndex } from "@/lib/api";
import { pageToLanding } from "@/lib/cms";
import type { HeroContent, IndustryLandingItem } from "@/lib/types";

export const metadata = {
  title: "Industry | Flyte Solutions Ltd.",
  description:
    "Discover how Flyte Solutions Ltd. empowers diverse industries with cutting-edge web, mobile, and AI technologies. We deliver tailored digital solutions to drive growth and innovation.",
  alternates: {
    canonical: "/industries",
  },
};

export default async function Page() {
  const index = await getIndustryIndex();
  const content = pageToLanding<{ hero: HeroContent; items: IndustryLandingItem[] }>(index?.landing);
  return <IndustriesLandingPage content={content} />;
}
