import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudyCard({ caseStudy, index = 0 }: { caseStudy?: CaseStudy; index?: number }) {
  const { slug, title, image, tag = [], short_description } = caseStudy ?? {};
  const offset = index % 2 !== 0;

  return (
    <Link
      href={`/case-studies/${slug}`}
      className={`flex flex-col ${offset ? "lg:mt-10" : ""} bg-white h-fit shadow-[0px_0px_10px_10px_rgba(223,223,223,0.25)]`}
      data-aos={offset ? "fade-up-left" : "fade-up-right"}
    >
      <div className="h-[165px] sm:h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 hover:transform-origin-center"
          src={image}
          alt={title}
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        {tag?.slice(0, 3)?.map((t, i) => (
          <div
            key={i}
            className="w-full px-6 py-4 bg-[#2b3e50] h-11 border-r-2 border-[#dda380]"
          >
            <p className="text-white text-xs font-semibold text-center">{t}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 h-full pb-5 mt-5 w-full">
        <div className="flex flex-row items-center px-4 lg:px-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-3 w-full">
            <h1 className="text-lg lg:text-2xl font-semibold text-black lg:h-16 line-clamp-2 overflow-hidden">
              {title}
            </h1>
            <div className="px-1 lg:px-2 py-[6.36px] bg-[#ffcc00] rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex">
              <p className="text-black text-xs font-normal font-['Open_Sans']">
                Project Management
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg font-normal text-[#00000080] px-4 lg:px-10 h-[90px] line-clamp-3 overflow-hidden">
          {short_description}
        </p>
      </div>
    </Link>
  );
}
