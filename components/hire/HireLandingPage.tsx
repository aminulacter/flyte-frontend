import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import {
  ClutchReviewsSection,
  DreamTeamCta,
  EngagementModelsSection,
  FiveStepsSection,
} from "@/components/hire/HireSharedSections";
import TechnologyStacksSection from "@/components/hire/TechnologyStacksSection";
import {
  HIRE_ADVANTAGES,
  HIRE_ADVANTAGES_TITLE,
  HIRE_BUILD_TEAM_CTA,
  HIRE_LANDING_HERO,
  HIRE_SCENARIOS,
  HIRE_SCENARIOS_TITLE,
} from "@/lib/hire/landing";

const ADVANTAGE_ICONS = [
  "fa-solid fa-wallet",
  "fa-solid fa-magnifying-glass",
  "fa-solid fa-shield-halved",
  "fa-solid fa-bullseye",
  "fa-solid fa-users",
];

function ScenarioCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path
        d="M14 2.89648C11.8783 2.89648 9.84344 3.73934 8.34315 5.23963C6.84285 6.73992 6 8.77475 6 10.8965C6 13.0182 6.84285 15.053 8.34315 16.5533C9.84344 18.0536 11.8783 18.8965 14 18.8965C16.1217 18.8965 18.1566 18.0536 19.6569 16.5533C21.1571 15.053 22 13.0182 22 10.8965C22 8.77475 21.1571 6.73992 19.6569 5.23963C18.1566 3.73934 16.1217 2.89648 14 2.89648ZM4.93 6.71648C3.08 8.23648 2 10.5065 2 12.8965C2 15.0182 2.84285 17.053 4.34315 18.5533C5.84344 20.0536 7.87827 20.8965 10 20.8965C10.64 20.8965 11.27 20.8165 11.88 20.6665C10.12 20.2765 8.5 19.3965 7.17 18.1865C5.22 17.1465 4 15.1065 4 12.8965C4 12.5965 4.03 12.3065 4.07 12.0065C4.03 11.6365 4 11.2665 4 10.8965C4 9.45648 4.32 8.02648 4.93 6.71648ZM18.09 6.97648L19.5 8.39648L13 14.8965L9.21 11.1065L10.63 9.68648L13 12.0665"
        fill="#161616"
      />
    </svg>
  );
}

export default function HireLandingPage() {
  const hero = HIRE_LANDING_HERO;

  return (
    <div>
      <div
        className="pt-10 lg:pt-44 relative lg:min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="container pb-8 lg:pb-16 relative">
          <div className="w-full lg:w-[50%]">
            <div className="space-y-4 lg:space-y-6 z-10">
              <h4 className="text-[#6ec1ff] text-base lg:text-lg uppercase font-bold tracking-wide flex lg:items-center gap-2">
                <div className="w-[22px] h-0.5 bg-[#6ec1ff] mt-3 lg:mt-0" />
                {hero.eyebrow}
              </h4>
              <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[46px]">{hero.title}</h1>
              <p className="text-[#dddddd] text-sm leading-snug">{hero.description}</p>
            </div>
            <div className="mt-8 lg:mt-12 z-10">
              <Link
                className="w-fit px-8 py-3 bg-[#5856d6] rounded-md text-white text-base font-semibold"
                href={hero.ctaHref}
              >
                {hero.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-10">
        <div className="container">
          <h2 className="max-w-[492px] text-center text-black text-base md:text-[32px] font-semibold font-['Open_Sans'] mx-auto py-5 md:py-10 md:leading-10">
            {HIRE_ADVANTAGES_TITLE}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIRE_ADVANTAGES.map((item, i) => (
              <div
                key={item.title}
                className="h-[281px] p-5 bg-[#f4f5f9] hover:bg-blue-100 transition duration-500 rounded-xl grid grid-rows-3 place-items-center group"
              >
                <i
                  className={`${ADVANTAGE_ICONS[i] || "fa-solid fa-check"} text-4xl text-[#3B82F6] transition-transform transform group-hover:scale-150 duration-500`}
                />
                <h4 className="text-gray-800 text-base xl:text-xl text-center font-semibold transition-transform transform group-hover:scale-110 duration-500">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm font-normal text-center self-start">{item.description}</p>
              </div>
            ))}
            <div className="px-8 py-10 bg-[#31323c] hover:bg-black transition duration-500 rounded-xl flex flex-col justify-between min-h-[281px]">
              <h2 className="text-[#f7f7f7] text-xl md:text-3xl font-semibold">{HIRE_BUILD_TEAM_CTA.title}</h2>
              <span className="w-20 h-[3px] bg-[#dda380]" />
              <p className="text-[#d9d9d9] text-base font-normal">{HIRE_BUILD_TEAM_CTA.description}</p>
              <Link
                className="text-white hover:text-black text-center text-sm font-semibold px-8 py-3 border border-white hover:bg-white transition duration-500"
                href={HIRE_BUILD_TEAM_CTA.ctaHref}
              >
                {HIRE_BUILD_TEAM_CTA.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FiveStepsSection />
      <EngagementModelsSection />
      <TechnologyStacksSection />

      <div className="bg-[#FAFAFA] pb-10">
        <div className="container">
          <h2 className="max-w-[492px] text-center text-black text-base md:text-[32px] font-semibold font-['Open_Sans'] mx-auto py-5 md:py-10 md:leading-10">
            {HIRE_SCENARIOS_TITLE}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIRE_SCENARIOS.map((scenario) => (
              <div
                key={scenario.title}
                className="p-5 w-full md:max-w-80 h-[350px] md:h-[400px] bg-[#002347]/80 rounded-2xl"
                style={{
                  backgroundImage: `url(${scenario.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="grid grid-rows-3 h-full">
                  <span className="px-2 py-1.5 text-white bg-white/20 text-xs rounded-[3.18px] w-[90px] h-7 mx-auto text-center">
                    {scenario.tag}
                  </span>
                  <h4 className="text-white text-lg font-semibold font-['DM_Sans']">{scenario.title}</h4>
                  <p className="text-[#d5d5d5e6] text-sm font-normal font-['DM_Sans'] leading-tight tracking-tight">
                    {scenario.description}
                  </p>
                  <div className="h-[116px] p-4 bg-white rounded-[15px] border-b-2 flex-col justify-start items-start gap-1.5 inline-flex">
                    {scenario.bullets.map((bullet) => (
                      <div key={bullet} className="self-stretch justify-end items-center gap-2.5 inline-flex">
                        <span>
                          <ScenarioCheckIcon />
                        </span>
                        <div className="grow shrink basis-0 text-[#161616] text-xs font-medium font-['DM_Sans'] leading-tight tracking-tight">
                          {bullet}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ClutchReviewsSection />
      <DreamTeamCta />
      <ContactSection />
    </div>
  );
}
