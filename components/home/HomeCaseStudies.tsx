"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import type { CaseStudy } from "@/lib/types";

import "swiper/css";
import "./HomeCaseStudies.css";

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isNext = direction === "next";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isNext ? "Next case study" : "Previous case study"}
      className={`home-case-nav__btn${isNext ? " is-next" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/case-studies/nav-circle.svg" alt="" />
      <span className="home-case-nav__chevron">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/case-studies/nav-chevron.svg" alt="" />
      </span>
    </button>
  );
}

function HomeCaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = caseStudy.title || "";
  const tags = (caseStudy.tag || []).map((t) => t.trim()).filter(Boolean).slice(0, 6);

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="home-case-card">
      <div className="home-case-card__image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={caseStudy.image} alt={title} loading="lazy" decoding="async" />
      </div>
      <div className="home-case-card__body">
        <div className="home-case-card__copy">
          <h3 className="home-case-card__title">{title}</h3>
          {caseStudy.short_description ? (
            <p className="home-case-card__desc line-clamp-4">{caseStudy.short_description}</p>
          ) : null}
        </div>
        {tags.length > 0 ? (
          <div className="home-case-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="home-case-card__tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export default function HomeCaseStudies({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const items = caseStudies.filter((item) => item?.slug).slice(0, 8);

  if (!items.length) return null;

  return (
    <section className="overflow-hidden bg-white py-6 lg:py-10">
      <div className="container">
        <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Case Studies</p>
        <h2 className="text-2xl font-semibold lg:text-[32px]">Driving Success Through Proven Solutions!</h2>
      </div>

      <div className="relative mt-6 lg:mt-8">
        <Swiper
          className="home-case-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          centeredSlides
          slidesPerView="auto"
          spaceBetween={24}
          loop={items.length > 2}
          grabCursor
          breakpoints={{
            1024: { spaceBetween: 40 },
          }}
        >
          {items.map((caseStudy) => (
            <SwiperSlide key={caseStudy.id || caseStudy.slug}>
              <HomeCaseStudyCard caseStudy={caseStudy} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="home-case-nav">
          <NavButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} />
          <NavButton direction="next" onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
    </section>
  );
}
