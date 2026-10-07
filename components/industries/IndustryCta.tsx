import Link from "next/link";
import type { IndustryCtaContent } from "@/lib/types";
import "@/components/hire/section-title.css";

export function IndustryCta({ cta }: { cta: IndustryCtaContent }) {
  return (
    <div className="md:h-[170px] bg-[#5856d6]">
      <div className="container md:flex justify-between items-center pt-3">
        <div className="space-y-2">
          <h2 className="hire-section-title text-[#f7f7f7]">{cta.title}</h2>
          <p className="text-[#f7f7f7] text-base">{cta.description}</p>
          <div className="pt-2">
            <Link
              className="px-6 py-2.5 text-sm font-semibold bg-white hover:bg-black hover:text-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)]"
              href={cta.ctaHref}
            >
              {cta.ctaLabel}
            </Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="md:w-[392px] md:h-[165px]"
          src="https://i.ibb.co.com/C5H9tGPf/dream-team-photo.webp"
          alt={cta.title}
        />
      </div>
    </div>
  );
}
