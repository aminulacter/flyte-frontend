import Link from "next/link";
import { HOME_AI_ML } from "@/lib/home/static";

const BENEFIT_COLORS = ["#5856D6", "#9C4AFF", "#5856D6", "#9C4AFF", "#5856D6"];
const BENEFIT_BG = ["bg-[#F1F4FE] hover:bg-[#e2e7f9]", "bg-[#F7F2FD] hover:bg-[#f2e7fe]"];

export default function HomeAiMl() {
  const section = HOME_AI_ML;

  return (
    <div className="bg-white py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">{section.eyebrow}</p>
          <h2 className="w-full text-black text-2xl lg:text-3xl px-2 lg:px-0 font-semibold text-start lg:leading-[50px]">
            {section.title}
          </h2>
        </div>
        <div className="mt-5 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-2 lg:p-6 border border-gray-100 rounded-lg space-y-3 lg:space-y-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={section.image} alt="AI and ML section" loading="lazy" decoding="async" />
            <h3 className="text-xl lg:text-3xl text-[#171A1F] font-medium">{section.headline}</h3>
            <p className="text-base text-[#565D6D]">{section.description}</p>
            <div className="space-y-3">
              {section.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-[#4A6DF7] mt-0.5 lg:mt-1" />
                  <p className="text-[#565D6D] text-sm lg:text-base">{bullet}</p>
                </div>
              ))}
            </div>
            <div className="w-fit mt-6">
              <Link
                className="px-6 py-2.5 flex items-center gap-2 bg-[#5856d6] hover:bg-white border border-[#5856d6] rounded-full text-white hover:text-[#5856d6] text-sm font-semibold transition duration-300"
                href="/schedule-consultation"
              >
                Book a meeting
              </Link>
            </div>
          </div>
          <div className="p-2 lg:p-6 border border-gray-100 rounded-lg">
            <h3 className="text-lg lg:text-2xl text-[#171A1F] text-center font-medium">
              Why Choose Our SLM Solutions?
            </h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`p-3 lg:p-6 transition duration-500 rounded-xl flex flex-col items-center group h-[150px] lg:h-[210px] ${BENEFIT_BG[i % 2]}`}
                >
                  <span
                    className="w-7 lg:w-10 h-7 lg:h-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: BENEFIT_COLORS[i % BENEFIT_COLORS.length] }}
                  >
                    <i className={`${benefit.icon.split(" ").slice(0, 3).join(" ")} text-white text-xs lg:text-base`} />
                  </span>
                  <h4 className="mt-4 text-gray-800 text-sm lg:text-base text-center font-semibold">{benefit.title}</h4>
                  <p className="text-[#565D6D] text-xs lg:text-sm font-normal text-center leading-5">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
