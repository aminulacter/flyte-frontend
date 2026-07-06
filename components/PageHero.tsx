import Link from "next/link";
import type { PageHeroProps } from "@/lib/types";

/**
 * Reusable dark hero banner used across marketing pages (products, services,
 * industries, hire, …). Background image with an 80/60% black overlay, an
 * uppercase eyebrow, title, description and an optional CTA button.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "Book A Consultation",
  ctaHref = "/schedule-consultation",
  overlay = "bg-opacity-60",
  width = "lg:w-[50%]",
}: PageHeroProps) {
  return (
    <div
      className="pt-10 lg:pt-44 relative lg:min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={`absolute inset-0 bg-black ${overlay}`} />
      <div className="container pb-8 lg:pb-16 relative">
        <div className={`w-full ${width}`}>
          <div className="space-y-4 lg:space-y-6 z-10">
            {eyebrow ? (
              <h4 className="text-[#6ec1ff] text-base lg:text-lg uppercase font-bold tracking-wide flex lg:items-center gap-2">
                <div className="w-[22px] h-0.5 bg-[#6ec1ff] mt-3 lg:mt-0" /> {eyebrow}
              </h4>
            ) : null}
            <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[46px]">{title}</h1>
            {description ? (
              <p className="text-[#dddddd] text-sm leading-snug">{description}</p>
            ) : null}
          </div>
          {ctaLabel ? (
            <div className="mt-8 lg:mt-12 z-10">
              <Link
                href={ctaHref || "/schedule-consultation"}
                className="w-fit inline-block px-8 py-3 bg-[#5856d6] rounded-md text-white text-base font-semibold"
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