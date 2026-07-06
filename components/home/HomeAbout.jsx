import Link from "next/link";
import { HOME_ABOUT } from "@/lib/home/static";

const CLUTCH_BADGES = [
  "https://clutch.co/share/badges/122766/46961/?utm_medium=image_embed&utm_source=clutch_top_company_badge",
  "https://clutch.co/share/badges/122766/2484/?utm_medium=image_embed&utm_source=clutch_top_company_badge",
  "https://clutch.co/share/badges/122766/10130/?utm_medium=image_embed&utm_source=clutch_top_company_badge",
  "https://clutch.co/share/badges/122766/109197/?utm_medium=image_embed&utm_source=clutch_top_company_badge",
];

export default function HomeAbout() {
  const about = HOME_ABOUT;

  return (
    <div className="bg-white">
      <div className="container pt-5">
        <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">{about.eyebrow}</p>
        <h2 className="max-w-[492px] justify-start text-black text-2xl lg:text-4xl font-semibold">
          {about.title}
        </h2>
        <div className="pt-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-8 justify-center w-full items-center">
            <div className="w-full max-h-[450px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-about-section-image.webp"
                alt="Team Collaboration"
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mb-4 text-black text-base hidden md:block lg:hidden">{about.description}</p>
          </div>
          <div className="w-full h-full flex flex-col items-center lg:items-start gap-4">
            <p className="mb-4 text-black text-base md:hidden lg:block">{about.description}</p>
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-row gap-4">
                {about.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="flex flex-col justify-center items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-10 h-10 object-cover" src={stat.icon} alt={stat.label} loading="lazy" />
                    <p className="text-center text-black text-xl font-bold">{stat.value}</p>
                    <p className="text-center text-black text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-4">
                {about.stats.slice(2).map((stat) => (
                  <div key={stat.label} className="flex flex-col justify-center items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-10 h-10 object-cover" src={stat.icon} alt={stat.label} />
                    <p className="text-center text-black text-xl font-bold">{stat.value}</p>
                    <p className="text-center text-black text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-2">
              <div className="flex flex-row flex-wrap gap-x-8 lg:gap-x-3 gap-y-4 lg:gap-y-0 max-w-[300px] lg:max-w-lg justify-center lg:justify-start">
                {CLUTCH_BADGES.map((src, i) => (
                  <a
                    key={src}
                    href="https://clutch.co/profile/flyte-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Flyte Solutions profile on Clutch - ${i + 1}`}
                  >
                    <iframe
                      className="w-[95px] h-[100px] rounded-lg border-none"
                      src={src}
                      title={`Clutch badge ${i + 1}`}
                      loading="lazy"
                      style={{ border: "none" }}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
              <Link className="w-fit h-fit bgGradientNevyBlue px-[32px] py-[12px] rounded-lg text-white" href="/company">
                Explore Business Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
