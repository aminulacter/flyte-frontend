import Link from "next/link";
import Marquee from "react-fast-marquee";
import ContactSection from "@/components/ContactSection";
import { resolveExploreRoleHref, techStackSlugForRole } from "@/lib/hire/catalog";
import { resolveSpecialtyExpertiseImage } from "@/lib/hire/catalogue";
import { TECH_STACK_CARDS } from "@/lib/hire/techStacks";
import type { HireRole } from "@/lib/types";
import {
  ClutchReviewsSection,
  DreamTeamCta,
  EngagementModelsSection,
  FiveStepsSection,
  TrustedLeadersSection,
} from "@/components/hire/HireSharedSections";
import "./section-title.css";
const imageAlt = "Hire Role Image";
function HireRoleHero({ hero }: { hero: HireRole["hero"] }) {
  const { eyebrow, title, description, image, ctaLabel, ctaHref } = hero;
  return (
    <section className="hire-sp-hero relative pt-10 lg:min-h-[610px] lg:pt-44">
      <div className="hire-sp-hero__inner container relative pb-8 lg:pb-16">
        <div className="hire-sp-hero__grid grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="hire-sp-hero__content">
            <div className="hire-sp-hero__copy space-y-4 lg:space-y-6">
              <p className="hire-sp-hero__eyebrow hire-eyebrow flex items-center uppercase tracking-wide text-[#5856d6]">
                {eyebrow}
              </p>
              <h1 className="hire-sp-hero__title hire-hero-title text-black">{title}</h1>
              <p className="hire-sp-hero__desc hire-hero-desc">{description}</p>
            </div>
            <div className="hire-sp-hero__actions mt-8 lg:mt-12">
              <Link href={ctaHref} className="btn-2">
                {ctaLabel}
              </Link>
            </div>
          </div>
          <div className="hire-sp-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hire-sp-hero__image w-full object-cover lg:h-[340px]"
              src={image}
              alt={imageAlt || title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ card }) {
  const bg = card.variant === "filled" ? "bg-gray-200" : "bg-transparent";
  return (
    <div>
      <div
        className={`p-6 w-full lg:h-[170px] rounded-xl space-y-3 group hover:bg-blue-100 transition duration-500 ${bg}`}
      >
        <i className={`${card.icon}`} />
        <h2 className="text-gray-800 text-lg font-semibold leading-5 h-10 flex items-center transition-transform transform origin-left group-hover:scale-x-110 duration-500">
          {card.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2 h-10 overflow-hidden">{card.description}</p>
      </div>
    </div>
  );
}

function WhyChooseSection({ section }) {
  return (
    <div className="bg-white">
      <div className="container pt-10 lg:pt-20 lg:pb-10">
        <h2 className="hire-section-title mb-3 text-[#060b13] lg:mb-6">{section.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.cards.map((card, i) => (
            <FeatureCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DevelopingSection({ developing }) {
  const { title, description, image, imageAlt, stepsTitle, steps, ctaLabel, ctaHref } = developing;
  return (
    <div className="bg-white py-5 lg:py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <h2 className="hire-section-title mb-2 w-full text-[#181a2a] lg:mb-5 lg:w-2/3">
            {title}
          </h2>
          <p className="text-[#12094a] mb-5">{description}</p>
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img className="w-full object-cover lg:h-[340px]" src={image} alt={imageAlt || title} /> */}
          </div>
        </div>
        <div>
          <h2 className="hire-section-title mb-4 text-[#181a2a] lg:mb-8">{stepsTitle}</h2>
          <div className="space-y-2.5">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-3.5 mb-2.5">
                  <span className="w-5 h-5 bg-[#5856d6] rounded-full flex justify-center items-center text-white text-xs font-semibold">
                    {i + 1}
                  </span>
                  <h4 className="text-center text-[#3b3c4e] text-base font-bold font-['Open_Sans']">
                    {step.title}
                  </h4>
                </div>
                <div className="flex gap-3.5">
                  {steps.length - 1 > i && <span className="w-0.5 h-auto mx-3 bg-[#d3d3d3]" />}
                  <p
                    className={`opacity-70 text-[#3b3c4e] text-sm ${steps.length - 1 === i ? "ml-10" : ""
                      }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link
        className="px-8 py-3 mt-8 ml-5 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md text-white w-fit lg:mx-auto block"
        href={ctaHref}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

function ExpertiseSection({
  expertise,
  slug,
}: {
  expertise: HireRole["expertise"];
  slug: string;
}) {
  if (!expertise?.title || !expertise.cards?.length) return null;
  const imageSrc = resolveSpecialtyExpertiseImage(slug, expertise);
  return (
    <div className="bg-[#f4f2f0]">
      <div className="container pt-10 lg:pb-10">
        <h2 className="hire-section-title mb-3 text-[#060b13] lg:mb-6">{expertise.title}</h2>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
            {expertise.cards.map((card, i) => (
              <FeatureCard key={i} card={card} />
            ))}
          </div>
          {imageSrc ? (
            <div className="flex items-center justify-center lg:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-auto w-full max-h-[341px] max-w-[391px] object-contain lg:max-w-[391px]"
                src={imageSrc}
                alt={expertise.title}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TechnologiesSection({ slug, technologies }: { slug: string; technologies?: HireRole["technologies"] }) {
  const stack = TECH_STACK_CARDS.find((card) => card.hireLinkName === techStackSlugForRole(slug));
  const items = stack
    ? stack.technologies.map((tech) => ({ src: tech.image, alt: tech.name }))
    : (technologies?.items || []).filter((item) => item.src);

  if (!items.length) return null;

  return (
    <div className="bg-white py-7 lg:py-10">
      <h2 className="hire-section-title mb-4 text-center text-[#181a2a] lg:mb-8">
        {technologies?.title || "Technologies We Work With"}
      </h2>
      <div className="container pt-2">
        <Marquee gradient={false} speed={100} pauseOnHover>
          {items.map((item) => (
            <span key={item.src} className="mx-5 inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="h-full w-full object-contain" src={item.src} alt={item.alt} />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

function ExploreRolesSection({ exploreRoles }) {
  if (!exploreRoles?.links?.length) return null;
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col gap-4 rounded-xl bg-[#31323c] px-3 py-5 lg:gap-8 lg:px-8 lg:py-10">
          <h2 className="hire-section-title text-[#f7f7f7]">{exploreRoles.title}</h2>
          <div className="relative h-[3px] w-20 bg-[#dda380]" />
          <p className="text-base font-normal text-[#d9d9d9]">
            Looking for a more specific role? Check out the options below:
          </p>
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-6">
            {exploreRoles.links.map((link, i) => (
              <Link
                key={i}
                href={resolveExploreRoleHref(link.href)}
                className="border-b border-white text-sm text-white hover:border-[#5856d6] hover:text-[#5856d6] lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Shared hire sections — composed differently in category vs specialty page wrappers. */
export function HireRoleSections({ role }: { role: HireRole }) {
  return (
    <>
      <HireRoleHero hero={role.hero} />
      <WhyChooseSection section={role.whyChoose} />
      {/* <TechnologiesSection slug={role.slug} technologies={role.technologies} />
      <ExploreRolesSection exploreRoles={role.exploreRoles} /> */}
      <DreamTeamCta />
      <DevelopingSection developing={role.developing} />
      <ExpertiseSection expertise={role.expertise} slug={role.slug} />
    </>
  );
}

export function HireRoleSharedTail() {
  return (
    <>

      <FiveStepsSection />
      <EngagementModelsSection />
      <TrustedLeadersSection />
      <ClutchReviewsSection />
      <ContactSection />
    </>
  );
}

/** Default page composer for `/hire-sp/[slug]` — customize sections here. */
export default function HireSpecificRolePage({ role }: { role: HireRole }) {
  return (
    <div>
      <HireRoleSections role={role} />
      <HireRoleSharedTail />
    </div>
  );
}
