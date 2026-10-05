"use client";

import Link from "next/link";
import { TECH_STACK_CARDS } from "@/lib/hire/techStacks";
import "./section-title.css";

/** Technology stack cards linking to hire role pages (home + hire landing). */
export default function TechnologyStacksSection({
  variant = "default",
}: {
  variant?: "default" | "home";
}) {
  const isHome = variant === "home";

  return (
    <div
      className={isHome ? "home-tech" : "py-[20px]"}
      style={
        isHome
          ? undefined
          : {
              backgroundImage: "url('/images/operationsBg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }
      }
    >
      {isHome ? (
        <div className="home-tech__bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/tech-bg.png" alt="" />
        </div>
      ) : null}
      <div className={`container${isHome ? " home-tech__inner" : ""}`}>
        <div className={isHome ? "home-tech__intro" : undefined} data-aos="fade-up">
          <p className={isHome ? "home-eyebrow" : "pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0"}>
            Our Technology
          </p>
          <h2
            className={
              isHome
                ? "home-heading home-tech__heading"
                : "hire-section-title lg:w-1/2 px-0 text-start text-[#15161B]"
            }
          >
            Innovative Technology That Transforms The Way You Operate
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 lg:px-0 justify-center"
          data-aos="fade-up"
        >
          {TECH_STACK_CARDS.map((stack) => (
            <Link
              key={stack.hireLinkName}
              href={`/hire/${stack.hireLinkName}`}
              className="home-tech-card h-auto p-[24px] bg-white group transition duration-500 shadow-[0px_0px_10px_10px_rgba(235,235,235,0.25)] flex-col justify-start items-stretch gap-4 inline-flex overflow-hidden"
              style={{ backgroundColor: "white", transition: "background-color 0.5s" }}
              onMouseEnter={(e) => {
                if (isHome) return;
                e.currentTarget.style.backgroundColor = stack.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <div
                className={`text-black font-bold text-base${isHome ? "" : " group-hover:text-white transition duration-500"}`}
              >
                {stack.title}
              </div>
              <div
                className={`self-stretch text-xs text-[#9c9c9c]${isHome ? "" : " group-hover:text-white transition duration-500"}`}
              >
                {stack.description}
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="w-fit px-2.5 py-1 rounded-[15px] border border-[#e9e9e9] justify-start items-center gap-1.5 flex"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-3 h-3"
                        loading="lazy"
                        decoding="async"
                      />
                      <div
                        className={`text-center text-[#5e5e5e] text-[10px] font-medium${isHome ? "" : " group-hover:text-white transition duration-500"}`}
                      >
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {isHome ? (
          <div className="home-tech__cta">
            <Link className="home-btn" href="/hire">
              Learn More
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
