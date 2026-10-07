import Link from "next/link";
import type { HeroContent } from "@/lib/types";
import "./industry-hero.css";

export function IndustryHero({ hero }: { hero: HeroContent }) {
  const { eyebrow, title, description, image, ctaLabel, ctaHref } = hero;
  return (
    <section className="industry-hero relative pt-10 lg:min-h-[610px] lg:pt-44">
      <div className="industry-hero__inner container relative pb-8">
        <div className="industry-hero__grid grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="industry-hero__content">
            <div className="industry-hero__copy space-y-4 lg:space-y-6">
              <p className="industry-hero__eyebrow industry-hero-eyebrow flex items-center uppercase tracking-wide text-[#5856d6]">
                {eyebrow}
              </p>
              <h1 className="industry-hero__title industry-hero-title text-black">{title}</h1>
              <p className="industry-hero__desc industry-hero-desc">{description}</p>
            </div>
            {ctaLabel && ctaHref ? (
              <div className="industry-hero__actions mt-8 lg:mt-12">
                <Link href={ctaHref} className="btn-2">
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
          <div className="industry-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="industry-hero__image w-full object-cover lg:h-[340px]"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
