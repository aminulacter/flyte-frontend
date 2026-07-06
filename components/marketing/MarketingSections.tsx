import Link from "next/link";
import { CHECK_SVG } from "@/lib/hire/shared";
import type {
  DevelopingContent,
  ExpertiseSection,
  FeatureCard,
  HeroContent,
  ProcessSection,
  ServiceLandingItem,
  TrendsSectionData,
  UseCasesSectionData,
  WhyChooseSection,
} from "@/lib/types";

export function MarketingHero({ hero, widthClass = "lg:w-[60%]" }: { hero: HeroContent; widthClass?: string }) {
  const { eyebrow, title, description, image, ctaLabel, ctaHref } = hero;
  return (
    <div
      className="pt-10 lg:pt-44 relative lg:min-h-[610px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="container pb-8 lg:pb-16 relative">
        <div className={`w-full ${widthClass}`}>
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-[#6ec1ff] text-base lg:text-lg uppercase font-bold tracking-wide flex lg:items-center gap-2">
              <div className="w-[22px] h-0.5 bg-[#6ec1ff] mt-3 lg:mt-0" /> {eyebrow}
            </h4>
            <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[46px]">{title}</h1>
            <p className="text-[#dddddd] text-sm leading-snug">{description}</p>
          </div>
          {ctaLabel && ctaHref ? (
            <div className="mt-8 lg:mt-12">
              <Link
                href={ctaHref}
                className="w-fit inline-block px-8 py-3 bgGradientNevyBlue rounded-md text-white text-base font-semibold"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ card }: { card: FeatureCard }) {
  const bg = card.variant === "filled" ? "bg-gray-200" : "bg-transparent";
  return (
    <div>
      <div
        className={`p-6 w-full lg:h-[170px] rounded-xl space-y-3 group hover:bg-blue-100 transition duration-500 ${bg}`}
      >
        <i className={card.icon} />
        <h2 className="text-gray-800 text-lg font-semibold leading-5 h-10 flex items-center transition-transform transform origin-left group-hover:scale-x-110 duration-500">
          {card.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2 h-10 overflow-hidden">{card.description}</p>
      </div>
    </div>
  );
}

export function DevelopingSection({ developing }: { developing: DevelopingContent }) {
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
      {ctaLabel && ctaHref ? (
        <Link
          className="px-8 py-3 mt-8 ml-5 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md text-white w-fit lg:mx-auto block"
          href={ctaHref}
        >
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function ProcessCardsSection({ section }: { section: ProcessSection }) {
  return (
    <div className="bg-white">
      <div className="container pt-10 lg:pt-20 lg:pb-10">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">{section.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.cards.map((card, i) => (
            <FeatureCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function UseCasesSection({ useCases }: { useCases: UseCasesSectionData }) {
  if (!useCases?.cards?.length) return null;
  return (
    <div className="bg-[#f4f2f0] py-10 lg:py-16">
      <div className="container">
        <p className="text-[#5856d6] text-sm font-semibold uppercase mb-2">{useCases.eyebrow}</p>
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-8">{useCases.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.cards.map((card, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border border-[#e8e8e8] group hover:shadow-lg transition duration-500"
            >
              <i className={card.icon} />
              <h3 className="text-[#060b13] text-lg font-semibold mt-4 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              {card.bullets?.length ? (
                <ul className="space-y-2">
                  {card.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <span>{CHECK_SVG}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IndustryWhySection({ section }: { section: WhyChooseSection }) {
  return (
    <div className="bg-white">
      <div className="container pt-10 lg:pt-20 pb-10">
        <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3">{section.title}</h2>
        {section.description ? (
          <p className="text-gray-600 text-sm mb-8 max-w-3xl">{section.description}</p>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.cards.map((card, i) => (
            <div key={i} className="relative p-6 bg-[#f4f5f9] rounded-xl min-h-[180px] group hover:bg-blue-50 transition duration-500">
              <i className={`${card.icon} text-[#5856d6]`} />
              <h3 className="text-gray-800 text-lg font-semibold mt-16 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExpertiseCardsSection({ expertise }: { expertise: ExpertiseSection }) {
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

export function TrendsSection({ trends }: { trends: TrendsSectionData }) {
  if (!trends) return null;
  return (
    <div className="bg-white py-10 lg:py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-8">{trends.title}</h2>
          <div className="space-y-6">
            {trends.items.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#5856d6] text-2xl font-bold shrink-0">{item.number}</span>
                <div>
                  <h3 className="text-[#060b13] text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {trends.image ? (
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full rounded-xl object-cover" src={trends.image} alt={trends.title} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TagCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path
        d="M14 2.89648C11.8783 2.89648 9.84344 3.73934 8.34315 5.23963C6.84285 6.73992 6 8.77475 6 10.8965C6 13.0182 6.84285 15.053 8.34315 16.5533C9.84344 18.0536 11.8783 18.8965 14 18.8965C16.1217 18.8965 18.1566 18.0536 19.6569 16.5533C21.1571 15.053 22 13.0182 22 10.8965C22 8.77475 21.1571 6.73992 19.6569 5.23963C18.1566 3.73934 16.1217 2.89648 14 2.89648ZM4.93 6.71648C3.08 8.23648 2 10.5065 2 12.8965C2 15.0182 2.84285 17.053 4.34315 18.5533C5.84344 20.0536 7.87827 20.8965 10 20.8965C10.64 20.8965 11.27 20.8165 11.88 20.6665C10.12 20.2765 8.5 19.3965 7.17 18.1865C5.22 17.1465 4 15.1065 4 12.8965C4 12.5965 4.03 12.3065 4.07 12.0065C4.03 11.6365 4 11.2665 4 10.2676C4 9.45648 4.32 8.02648 4.93 6.71648ZM18.09 6.97648L19.5 8.39648L13 14.8965L9.21 11.1065L10.63 9.68648L13 12.0665"
        fill="#535353"
      />
    </svg>
  );
}

export function ServiceLandingRow({ item }: { item: ServiceLandingItem }) {
  const imageAlign = item.reversed ? "md:items-start" : "items-center md:items-end";
  const rowClass = item.reversed ? "flex-row-reverse" : "";

  return (
    <div
      className={`bg-white py-10 md:flex justify-center gap-10 lg:gap-8 mb-5 rounded-2xl space-y-5 md:space-y-0 px-5 lg:px-0 ${rowClass}`}
    >
      <div className={`md:w-[460px] md:h-[365px] flex flex-col items-center md:items-start ${imageAlign}`}>
        {item.images?.map((img, i) => (
          <div
            key={i}
            className={`w-40 md:w-60 h-[120px] md:h-[155px] ${
              i === 0 ? "md:ml-32 -mb-12" : i === 1 ? "mr-32" : "md:ml-32 -mt-12"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full cover border" src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
      <div className="md:w-[460px] h-[365px] space-y-6">
        <h4 className="text-[#757575] text-sm uppercase tracking-wide">{item.eyebrow}</h4>
        <h2 className="text-[#1b1717] text-xl font-bold uppercase tracking-wider">{item.title}</h2>
        <p className="text-[#6e6e6e] text-xs font-normal">{item.description}</p>
        <div>
          {item.tags?.map((tag) => (
            <div key={tag} className="h-6 flex items-center gap-2.5">
              <TagCheckIcon />
              <p className="text-neutral-600 text-xs font-medium leading-tight tracking-tight">{tag}</p>
            </div>
          ))}
        </div>
        <div>
          <Link
            className="h-[42px] px-8 py-3 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm font-semibold inline-block"
            href={item.href}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export function normalizeServiceHref(href: string) {
  if (!href) return "#";
  let path = href.startsWith("/") ? href : `/${href}`;
  path = path.replace(/^\/services\/services\//, "/services/");
  path = path.replace(/^services\//, "/services/");
  return path;
}
