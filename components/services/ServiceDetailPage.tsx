import ContactSection from "@/components/ContactSection";
import HomeSoftwareSolutions from "@/components/home/HomeSoftwareSolutions";
import {
  ClutchReviewsSection,
  DreamTeamCta,
  TrustedLeadersSection,
} from "@/components/hire/HireSharedSections";
import TechnologyStacksSection from "@/components/hire/TechnologyStacksSection";
import {
  DevelopingSection,
  MarketingHero,
  ProcessCardsSection,
  UseCasesSection,
} from "@/components/marketing/MarketingSections";
import { getSoftwareSolutions } from "@/lib/api";
import type { ServiceDetail } from "@/lib/types";

export default async function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const solutions = await getSoftwareSolutions();

  return (
    <div>
      <MarketingHero hero={service.hero} />
      <DevelopingSection developing={service.developing} />
      <ProcessCardsSection section={service.whyProcess} />
      <DreamTeamCta />
      <TechnologyStacksSection />
      <HomeSoftwareSolutions solutions={solutions || []} />
      <UseCasesSection useCases={service.useCases} />
      <TrustedLeadersSection />
      <ClutchReviewsSection />
      <ContactSection />
    </div>
  );
}
