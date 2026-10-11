import Link from "next/link";
import type { HeroContent } from "@/lib/types";

/** Full-bleed image background, same treatment as the industries landing hero. */
export function ServiceLandingHero({ hero }: { hero: HeroContent }) {
  return (
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
          {hero.ctaLabel && hero.ctaHref ? (
            <div className="mt-8 lg:mt-12 z-10">
              <Link
                className="w-fit px-8 py-3 bg-[#5856d6] rounded-md text-white text-base font-semibold inline-block"
                href={hero.ctaHref}
              >
                {hero.ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
