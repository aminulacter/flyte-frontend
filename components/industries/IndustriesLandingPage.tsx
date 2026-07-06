import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { ClutchReviewsSection } from "@/components/hire/HireSharedSections";
import { MarketingHero } from "@/components/marketing/MarketingSections";
import { INDUSTRIES_LANDING } from "@/lib/industries/landing";

export default function IndustriesLandingPage() {
  const { hero, items } = INDUSTRIES_LANDING;

  return (
    <div>
      <MarketingHero hero={hero} widthClass="lg:w-[50%]" />
      <div className="container py-10">
        <div className="mb-10">
          <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans']">Our Industries</p>
          <h2 className="text-[#15161B] text-2xl lg:text-3xl font-semibold lg:leading-[50px]">
            Industry-Specific Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group p-6 bg-white hover:bg-[#F0F2FF] border border-[#DEE1E6] rounded-[32px] shadow-sm transition-colors duration-300"
            >
              <h3 className="text-xl text-[#171A1F] font-medium mb-3 group-hover:text-[#5856D6] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#565D6D] text-sm">{item.description}</p>
              <span className="inline-flex items-center gap-2 mt-5 text-[#5856D6] text-sm font-semibold">
                Learn More
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
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
