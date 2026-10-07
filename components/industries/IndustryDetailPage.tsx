import ContactSection from "@/components/ContactSection";
import {
  ClutchReviewsSection,
  TrustedLeadersSection,
} from "@/components/hire/HireSharedSections";
import { IndustryCta } from "@/components/industries/IndustryCta";
import { IndustryHero } from "@/components/industries/IndustryHero";
import {
  ExpertiseCardsSection,
  IndustryWhySection,
  TrendsSection,
} from "@/components/marketing/MarketingSections";
import type { IndustryDetail } from "@/lib/types";

export default function IndustryDetailPage({ industry }: { industry: IndustryDetail }) {
  return (
    <>
      <IndustryHero hero={industry.hero} />
      <IndustryWhySection section={industry.whyChoose} />
      <ExpertiseCardsSection expertise={industry.expertise} />
      <IndustryCta cta={industry.cta} />
      <TrendsSection trends={industry.trends} />

      <TrustedLeadersSection />
      <ClutchReviewsSection />
      <ContactSection />
    </>
  );
}
