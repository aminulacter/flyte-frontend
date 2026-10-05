"use client";

import { useState } from "react";
import Link from "next/link";
import { HOME_FINTECH_FEATURES, HOME_INDUSTRY_TABS } from "@/lib/home/static";

export default function HomeIndustries() {
  const [activeSlug, setActiveSlug] = useState("fintech");
  const activeTab = HOME_INDUSTRY_TABS.find((t) => t.slug === activeSlug) || HOME_INDUSTRY_TABS[0];
  const features = activeSlug === "fintech" ? HOME_FINTECH_FEATURES : [];

  return (
    <section className="home-industries">
      <div className="container">
        <div className="home-industries__intro">
          <p className="home-eyebrow">Our Industries</p>
          <h2 className="home-heading home-industries__heading">
            Driving innovation across industries, from start-ups to global leaders
          </h2>
        </div>
        <div className="home-industries__layout">
          <div className="home-industries__tabs">
            {HOME_INDUSTRY_TABS.map((tab) => {
              const isActive = tab.slug === activeSlug;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => setActiveSlug(tab.slug)}
                  className={`home-industries__tab${isActive ? " is-active" : ""}`}
                >
                  <i className={tab.icon} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          <div className="home-industries__features">
            {features.length > 0 ? (
              <>
                {features.map((feature) => (
                  <div key={feature.title} className="home-industry-card">
                    <i className={feature.icon} />
                    <div>
                      <p className="home-industry-card__title">{feature.title}</p>
                      <p className="home-industry-card__desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
                <Link className="home-industry-card home-industry-card--cta" href={activeTab.href}>
                  <span>See All Expertise</span>
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </>
            ) : (
              <Link className="home-industry-card home-industry-card--cta" href={activeTab.href}>
                <span>Explore {activeTab.label}</span>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            )}
          </div>
        </div>
        <div className="home-industries__footer">
          <Link className="home-btn home-btn--sm home-btn--outline" href="/industries">
            See All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
