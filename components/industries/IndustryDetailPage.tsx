import ContactSection from "@/components/ContactSection";
import {
  ClutchReviewsSection,
  DreamTeamCta,
  TrustedLeadersSection,
} from "@/components/hire/HireSharedSections";
import {
  ExpertiseCardsSection,
  IndustryWhySection,
  MarketingHero,
  TrendsSection,
} from "@/components/marketing/MarketingSections";
import type { IndustryDetail } from "@/lib/types";

export default function IndustryDetailPage({ industry }: { industry: IndustryDetail }) {
  return (
    <div>
      <MarketingHero hero={industry.hero} />
      <IndustryWhySection section={industry.whyChoose} />
      <ExpertiseCardsSection expertise={industry.expertise} />
      <TrendsSection trends={industry.trends} />
      <DreamTeamCta />
      <TrustedLeadersSection />
      <ClutchReviewsSection />
      <ContactSection />
    </div>
  );
}
