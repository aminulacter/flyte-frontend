"use client";

import { useState } from "react";
import Link from "next/link";
import { HOME_FINTECH_FEATURES, HOME_INDUSTRY_TABS } from "@/lib/home/static";

export default function HomeIndustries() {
  const [activeSlug, setActiveSlug] = useState("fintech");
  const activeTab = HOME_INDUSTRY_TABS.find((t) => t.slug === activeSlug) || HOME_INDUSTRY_TABS[0];
  const features = activeSlug === "fintech" ? HOME_FINTECH_FEATURES : [];

  return (
    <div className="bg-white">
      <div className="bg-white py-10" data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          <div className="mb-[64px]">
            <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Our Industries</p>
            <h2 className="lg:w-1/2 text-[#15161B] text-2xl lg:text-4xl px-0 font-semibold text-start lg:leading-[50px]">
              Driving Innovation Across Industries, From Start-ups To Global Leaders
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/3 p-4 border-2 border-[#DEE1E6] rounded-2xl flex flex-col gap-1">
              {HOME_INDUSTRY_TABS.map((tab) => {
                const isActive = tab.slug === activeSlug;
                return (
                  <button
                    key={tab.slug}
                    type="button"
                    onClick={() => setActiveSlug(tab.slug)}
                    className={`px-[15px] py-4 w-full text-base rounded-lg flex flex-row gap-3 items-center text-left ${
                      isActive ? "text-[#5856D6] bg-[#F0F2FF]" : "text-[#565D6D] lg:hover:text-[#5856D6]"
                    }`}
                  >
                    <i className={tab.icon} />
                    <span className={isActive ? "font-semibold" : "font-normal"}>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="hidden lg:w-2/3 lg:flex flex-col">
              <h3 className="text-lg font-semibold mb-6 uppercase">{activeTab?.label}</h3>
              {features.length > 0 ? (
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="max-w-full flex-grow h-[189px] px-6 py-5 bg-white hover:bg-[#F0F2FF] group transition duration-500 rounded-[10px] border border-[#DEE1E6] inline-flex"
                    >
                      <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex space-y-2">
                        <i className={feature.icon} />
                        <div className="w-full text-[#171A1F] text-[15px] font-semibold">{feature.title}</div>
                        <div className="w-full h-12 text-[#565D6D] text-xs font-normal">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                  <Link
                    className="h-[189px] px-6 py-5 bg-[#2B3D50] hover:bg-[#1f2d3e] group rounded-[10px] border border-[#d0d8df] justify-center items-center gap-6 inline-flex transition duration-500"
                    href={activeTab.href}
                  >
                    <div className="justify-center items-center gap-1.5 flex flex-row">
                      <span className="text-white text-[15px] font-extrabold">See All Features</span>
                      <i className="fa-solid fa-arrow-right text-white" />
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="p-8 border border-[#DEE1E6] rounded-xl">
                  <p className="text-[#565D6D] mb-4">
                    Explore how Flyte Solutions helps {activeTab?.label} organizations build scalable software.
                  </p>
                  <Link
                    href={activeTab?.href || "/industries"}
                    className="px-6 py-2.5 bgGradientNevyBlue rounded-md text-white text-sm font-semibold inline-block"
                  >
                    Explore {activeTab?.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="w-full bg-white overflow-hidden flex justify-center items-center">
            <Link
              className="px-6 py-2.5 mt-8 text-white text-sm font-semibold bgGradientNevyBlue rounded-md border gap-2.5"
              href="/industries"
            >
              See All Industries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
