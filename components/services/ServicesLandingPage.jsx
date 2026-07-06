import ContactSection from "@/components/ContactSection";
import { ClutchReviewsSection } from "@/components/hire/HireSharedSections";
import {
  MarketingHero,
  normalizeServiceHref,
  ServiceLandingRow,
} from "@/components/marketing/MarketingSections";
import { SERVICES_LANDING } from "@/lib/services/landing";

export default function ServicesLandingPage() {
  const { hero, items } = SERVICES_LANDING;
  const rows = items.map((item) => ({
    ...item,
    href: normalizeServiceHref(item.href),
  }));

  return (
    <div>
      <MarketingHero hero={hero} widthClass="lg:w-[50%]" />
      <div className="container mb-5">
        <div className="flex-col gap-2 w-full flex justify-center items-center my-8">
          <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Our Services</p>
          <h1 className="lg:w-full text-[#15161B] text-lg lg:text-3xl px-0 font-semibold text-start lg:leading-[50px]">
            Core Development Services
          </h1>
        </div>
        <div>
          {rows.map((item) => (
            <ServiceLandingRow key={item.eyebrow} item={item} />
          ))}
        </div>
      </div>
      <div className="container">
        <ClutchReviewsSection />
        <ContactSection />
      </div>
    </div>
  );
}
