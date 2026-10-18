import HireLandingPage from "@/components/hire/HireLandingPage";
import { getHireIndex } from "@/lib/api";
import { pageToLanding } from "@/lib/cms";
import type { HeroContent } from "@/lib/types";

export const metadata = {
  title: "Hire | Flyte Solutions Ltd.",
  description:
    "Looking to join a forward-thinking software company? Flyte Solutions Ltd. is hiring talented professionals passionate about web, mobile, and AI technologies. Apply now and grow your career with us!",
  alternates: { canonical: "/hire" },
};

export default async function HirePage() {
  const index = await getHireIndex();
  const landing = pageToLanding<{ hero: HeroContent; items: Array<{ title: string; description: string }> }>(index?.landing);
  return (
    <HireLandingPage
      hero={landing?.hero}
      advantages={landing?.items?.length ? landing.items : undefined}
      advantagesTitle={landing && "title" in landing ? String(landing.title || "") : undefined}
    />
  );
}
