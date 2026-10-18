import ServicesLandingPage from "@/components/services/ServicesLandingPage";
import { getServiceIndex } from "@/lib/api";
import { pageToLanding } from "@/lib/cms";
import type { ServiceLandingItem } from "@/lib/types";
import type { HeroContent } from "@/lib/types";

export const metadata = {
  title: "Our Services | Flyte Solutions Ltd.",
  description:
    "Explore a wide range of software development services at Flyte Solutions Ltd., including web development, mobile apps, DevOps, AI/ML, and more. We turn ideas into scalable digital solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default async function Page() {
  const index = await getServiceIndex();
  const content = pageToLanding<{ hero: HeroContent; items: ServiceLandingItem[] }>(index?.landing);
  return <ServicesLandingPage content={content} />;
}
