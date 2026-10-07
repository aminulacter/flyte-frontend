"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ContactSection from "@/components/ContactSection";
import { INDUSTRIES_LANDING, INDUSTRY_BRANDS } from "@/lib/industries/landing";
import type { HeroContent, IndustryLandingItem } from "@/lib/types";

function IndustriesHero({ hero }: { hero: HeroContent }) {
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

function IndustrySection({ item, index }: { item: IndustryLandingItem; index: number }) {
  const dark = index % 2 === 1;
  const tone = dark ? "text-white" : "text-[#282828]";
  const body = dark ? "text-white" : "text-[#121212]";

  return (
    <div
      id={`section-${index}`}
      className={`py-[40px] flex flex-col justify-center items-center scroll-mt-[105px] lg:scroll-mt-36 ${dark ? "bg-[#14171D]" : ""
        }`}
    >
      <div className="lg:px-48 flex flex-col justify-center items-center">
        <div
          className={`container h-full flex flex-col lg:flex-row justify-between items-center gap-[40px] ${dark ? "lg:flex-row-reverse bg-[#14171D]" : ""
            }`}
        >
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <div className="flex flex-row lg:flex-col justify-center items-center gap-3 lg:gap-5">
              <div className="lg:w-full flex justify-center items-center">
                <p className={`text-4xl ${tone}`}>
                  <i className={`${item.icon} ${tone}`} />
                </p>
              </div>
              <h1 className={`text-center text-xl font-bold ${tone}`}>{item.title}</h1>
            </div>
            <p className={`text-sm font-medium mb-2 ${dark ? "text-white" : "text-[#121212]/80"}`}>
              {item.description}
            </p>
            <div className="flex flex-col justify-start">
              <div>
                <i className="fa-solid fa-quote-left text-[#E1E1E1] text-3xl -mb-3 -ml-5" />
              </div>
              <div className="border-[#E1E1E1] border-[2px] rounded-lg p-[24px] flex flex-col gap-5 mb-4">
                <p className={`text-sm font-semibold ${body}`}>{item.quote.text}</p>
                <div className="flex flex-row justify-start items-center gap-3">
                  <div className="w-12 h-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src={item.quote.avatar}
                      alt={item.quote.name}
                    />
                  </div>
                  <div>
                    <h2 className={`text-xs font-medium ${body}`}>{item.quote.name}</h2>
                    <p className={`text-[10px] font-normal ${body}`}>{item.quote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full lg:w-2/5 flex justify-center ${dark ? "lg:justify-start" : "lg:justify-end items-end"
              }`}
          >
            <div className="w-[320px] flex flex-col gap-6 bg-[#1E232C] py-[24px] px-[30px]">
              <h2 className="text-start text-[#dda380] text-base font-bold">{item.solutionsTitle}</h2>
              <div className="flex flex-col gap-4">
                {item.solutions.map((solution) => (
                  <div key={solution} className="flex flex-row text-wrap gap-3 justify-start items-center">
                    <i className="fa-solid fa-arrow-right text-white" />
                    <p className="text-[#f0f0f0]/80 text-sm font-medium">{solution}</p>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-start items-center">
                <Link
                  className="group h-10 px-6 py-2.5 bg-white hover:bg-black transition duration-500 rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden"
                  href="/schedule-consultation"
                >
                  <p className="text-[#191919] group-hover:text-white text-sm font-semibold">Book A Consultation</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-wrap justify-center lg:justify-between items-center gap-3 py-[56px]">
          {INDUSTRY_BRANDS.map((brand) => (
            <div key={brand.src} className="w-fit flex flex-row flex-wrap object-cover h-[48px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-contain" src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            className="h-[43px] px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden"
            href={item.href}
          >
            <p className="text-white text-sm font-semibold">{item.exploreLabel}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function IndustriesShowcase({ items }: { items: IndustryLandingItem[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = items
      .map((_, index) => document.getElementById(`section-${index}`))
      .filter((node): node is HTMLElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number(visible.target.id.replace("section-", ""));
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.45] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  function showSection(index: number) {
    setActive(index);
    document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="lg:px-0">
      <div className="hidden bg-white shadow-lg text-nowrap lg:block">
        <div className="container w-full flex justify-start lg:justify-center items-start overflow-x-auto gap-[16px] border-b-[1px] py-4 scrollbar-hide">
          {items.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.slug}
                type="button"
                className={`w-fit text-xs lg:text-sm font-semibold uppercase border-b-[2px] ${selected
                  ? "text-[#5856D6] border-[#5856D6]"
                  : "text-[#151411] border-[#Fff] hover:text-[#5856D6] hover:border-[#5856D6]"
                  }`}
                onClick={() => showSection(index)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container grid items-center lg:justify-center pt-8 pb-4">
        <p className="text-start md:text-center text-[#5856D6] mb-2 text-base text-[#151411]">
          Our Industries
        </p>
        <p className="text-start md:text-center text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#151411]">
          Revolutionizing Industries With Smart Solutions
        </p>
      </div>
      {items.map((item, index) => (
        <IndustrySection key={item.slug} item={item} index={index} />
      ))}
    </div>
  );
}

export default function IndustriesLandingPage() {
  const { hero, items } = INDUSTRIES_LANDING;

  return (
    <div>
      <IndustriesHero hero={hero} />

      <IndustriesShowcase items={items} />
      <div className="container">

        <ContactSection />
      </div>
    </div>
  );
}
