"use client";

import Marquee from "react-fast-marquee";
import { BRANDS, BRANDS_2ND } from "@/lib/brands";

export default function HomeBrandsMarquee() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#F4F5F8] pt-4 pb-6 w-full">
        <div className="hidden lg:flex lg:flex-col lg:gap-4">
          <Marquee gradient={false} speed={40} pauseOnHover direction="left">
            {BRANDS.map((b, i) => (
              <div key={i} className="mr-14 flex items-center">
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-fit h-12 object-cover"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </Marquee>
          <Marquee gradient={false} speed={40} pauseOnHover direction="right">
            {BRANDS_2ND.map((b, i) => (
              <div key={i} className="mr-14 flex items-center">
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-fit h-12 object-cover"
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
            {BRANDS.map((b, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
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
