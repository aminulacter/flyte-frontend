"use client";

import Marquee from "react-fast-marquee";
import { BRANDS } from "@/lib/brands";

export default function HomeBrandsMarquee() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#F4F5F8] pt-4 pb-6 w-full">
        <div className="hidden lg:block">
          <Marquee gradient={false} speed={40} pauseOnHover>
            {BRANDS.map((b) => (
              <div key={b.src} className="mx-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-fit h-[48px] object-cover"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="lg:hidden">
          <div className="flex justify-center flex-wrap gap-5">
            {BRANDS.map((b) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={b.src}
                src={b.src}
                alt={b.alt}
                className="w-fit h-[30px] object-cover mt-2"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
