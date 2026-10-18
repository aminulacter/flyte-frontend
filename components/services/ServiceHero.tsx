import Link from "next/link";
import type { HeroContent } from "@/lib/types";
import "./service-hero.css";

/** Light two-column hero, same layout as the hire role hero. */
export function ServiceHero({ hero }: { hero: HeroContent }) {
  const { eyebrow, title, description, image, ctaLabel, ctaHref } = hero;
  return (
    <section className="service-hero light-page-offset relative lg:min-h-[610px]">
      <div className="service-hero__inner container relative pb-8 lg:pb-16">
        <div className="service-hero__grid grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="service-hero__content">
            <div className="service-hero__copy space-y-4 lg:space-y-6">
              <p className="service-hero__eyebrow service-hero-eyebrow flex items-center uppercase tracking-wide text-[#5856d6]">
                {eyebrow}
              </p>
              <h1 className="service-hero__title service-hero-title text-black">{title}</h1>
              <p className="service-hero__desc service-hero-desc">{description}</p>
            </div>
            {ctaLabel && ctaHref ? (
              <div className="service-hero__actions mt-8 lg:mt-12">
                <Link href={ctaHref} className="btn-2">
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
          <div className="service-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="service-hero__image w-full object-cover lg:h-[340px]" src={image} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
}
