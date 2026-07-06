"use client";

import Link from "next/link";
import { TECH_STACK_CARDS } from "@/lib/hire/techStacks";

/** Technology stack cards linking to hire role pages (home + hire landing). */
export default function TechnologyStacksSection() {
  return (
    <div
      className="py-[20px]"
      style={{
        backgroundImage: "url('/images/operationsBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container">
        <div data-aos="fade-up">
          <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Our Technology</p>
          <h1 className="lg:w-1/2 text-[#15161B] text-2xl lg:text-4xl px-0 font-semibold text-start lg:leading-[50px]">
            Innovative Technology That Transforms The Way You Operate
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 lg:px-0 justify-center"
          data-aos="fade-up"
        >
          {TECH_STACK_CARDS.map((stack) => (
            <Link
              key={stack.hireLinkName}
              href={`/hire/${stack.hireLinkName}`}
              className="h-auto p-[24px] bg-white group transition duration-500 shadow-[0px_0px_10px_10px_rgba(235,235,235,0.25)] flex-col justify-start items-stretch gap-4 inline-flex overflow-hidden"
              style={{ backgroundColor: "white", transition: "background-color 0.5s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = stack.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <div className="text-black group-hover:text-white font-bold transition duration-500 text-base">
                {stack.title}
              </div>
              <div className="self-stretch text-xs text-[#9c9c9c] group-hover:text-white transition duration-500">
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
                      <div className="text-center text-[#5e5e5e] group-hover:text-white transition duration-500 text-[10px] font-medium">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
