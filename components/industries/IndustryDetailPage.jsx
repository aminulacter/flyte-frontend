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

export default function IndustryDetailPage({ industry }) {
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
