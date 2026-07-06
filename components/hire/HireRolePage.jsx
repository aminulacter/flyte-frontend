import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import {
  ClutchReviewsSection,
  DreamTeamCta,
  EngagementModelsSection,
  FiveStepsSection,
  TrustedLeadersSection,
} from "@/components/hire/HireSharedSections";

function HireRoleHero({ hero }) {
  const { eyebrow, title, description, image, ctaLabel, ctaHref } = hero;
  return (
    <div
      className="pt-10 lg:pt-44 relative lg:min-h-[610px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="container pb-8 lg:pb-16 relative">
        <div className="w-full lg:w-[60%]">
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-[#6ec1ff] text-base lg:text-lg uppercase font-bold tracking-wide flex lg:items-center gap-2">
              <div className="w-[22px] h-0.5 bg-[#6ec1ff] mt-3 lg:mt-0" /> {eyebrow}
            </h4>
            <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[46px]">{title}</h1>
            <p className="text-[#dddddd] text-sm leading-snug">{description}</p>
          </div>
          <div className="mt-8 lg:mt-12">
            <Link
              href={ctaHref}
              className="w-fit inline-block px-8 py-3 bgGradientNevyBlue rounded-md text-white text-base font-semibold"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
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
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">{section.title}</h2>
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
          <h2 className="text-[#181a2a] text-xl lg:text-3xl font-semibold mb-2 lg:mb-5 w-full lg:w-2/3">
            {title}
          </h2>
          <p className="text-[#12094a] mb-5">{description}</p>
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full object-cover lg:h-[340px]" src={image} alt={imageAlt || title} />
          </div>
        </div>
        <div>
          <h2 className="text-[#181a2a] text-xl lg:text-2xl font-semibold mb-4 lg:mb-8">{stepsTitle}</h2>
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
                    className={`opacity-70 text-[#3b3c4e] text-sm ${
                      steps.length - 1 === i ? "ml-10" : ""
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

function ExpertiseSection({ expertise }) {
  return (
    <div className="bg-[#f4f2f0]">
      <div className="container pt-10 lg:pb-10">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">{expertise.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2">
            {expertise.cards.map((card, i) => (
              <FeatureCard key={i} card={card} />
            ))}
          </div>
          {expertise.image ? (
            <div className="lg:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="lg:max-w-[391px] max-h-[341px] object-cover"
                src={expertise.image}
                alt="Expertise"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TechnologiesSection({ technologies }) {
  if (!technologies) return null;
  return (
    <div className="bg-white py-5 lg:py-10">
      <div className="container">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-6 text-center">
          {technologies.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.items.map((item, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} className="h-10 w-auto" src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExploreRolesSection({ exploreRoles }) {
  if (!exploreRoles?.links?.length) return null;
  return (
    <div className="bg-white py-5 lg:py-10">
      <div className="container text-center">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-6">{exploreRoles.title}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {exploreRoles.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="px-4 py-2 border border-[#5856d6] text-[#5856d6] rounded-md hover:bg-[#5856d6] hover:text-white transition duration-300 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Full hire role detail page composed from extracted role data. */
export default function HireRolePage({ role }) {
  return (
    <div>
      <HireRoleHero hero={role.hero} />
      <WhyChooseSection section={role.whyChoose} />
      <DevelopingSection developing={role.developing} />
      <ExpertiseSection expertise={role.expertise} />
      <TechnologiesSection technologies={role.technologies} />
      <ExploreRolesSection exploreRoles={role.exploreRoles} />
      <DreamTeamCta />
      <FiveStepsSection />
      <EngagementModelsSection />
      <TrustedLeadersSection />
      <ClutchReviewsSection />
      <ContactSection />
    </div>
  );
}
