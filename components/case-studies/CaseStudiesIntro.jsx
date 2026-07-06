"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

/**
 * Case-studies hero: left column with the intro copy + review widgets, right
 * column with scrolling marquees of case-study imagery. Data comes from
 * `GET /content-case-studies` (fetched at build time and passed as props).
 */

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function ImageRow({ images, direction, speed }) {
  return (
    <Marquee className="rounded-xl" gradient={false} speed={speed} pauseOnHover direction={direction}>
      {images.map((img, i) => (
        <div key={i} className="px-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[250px] lg:w-[350px] h-[150px] lg:h-[250px] rounded-xl"
            src={img?.image}
            alt={`Case studies image - ${i + 1}`}
            decoding="async"
          />
        </div>
      ))}
    </Marquee>
  );
}

export default function CaseStudiesIntro({ content, images = [] }) {
  const title = content?.title;
  const description = stripHtml(content?.description);

  return (
    <div className="w-full py-5 lg:py-10">
      <div className="w-full flex flex-row">
        <div className="container w-full flex flex-col lg:flex-row items-center gap-5 h-full overflow-x-hidden">
          {/* Left: copy */}
          <div className="w-full lg:w-1/3 h-full">
            <div className="flex flex-col gap-3 lg:gap-6 justify-center mb-5 lg:mb-0">
              <h4 className="text-[#5856d6] text-lg font-bold">Explore Our Success Stories</h4>
              <h1 className="text-zinc-950 text-2xl lg:text-4xl font-bold lg:leading-[46px] mb-1">
                {title}
              </h1>
              {description ? (
                <p className="text-[#12094a] text-sm font-normal leading-snug lg:px-0">
                  {description}
                </p>
              ) : (
                <div>No data found</div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.goodfirms.co/company/flyte-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-500"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-[50px] w-[200px]"
                    src="/images/goodfirm.webp"
                    alt="GoodFirms Review"
                    decoding="async"
                    loading="lazy"
                  />
                </a>
                <div className="bg-white" style={{ position: "relative", width: "200px", height: "50px" }}>
                  <iframe
                    src="https://widget.clutch.co/widgets/get/2?ref_domain=clutch.co&uid=122766"
                    width="200"
                    height="50"
                    style={{ border: "1px solid red", overflow: "hidden" }}
                    scrolling="no"
                    title="Clutch Reviews Widget"
                    className="p-0.5"
                  />
                  <a
                    href="https://clutch.co/profile/flyte-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
                    aria-label="Flyte Solutions profile on Clutch"
                  />
                </div>
              </div>

              <Link
                href="/schedule-consultation"
                className="h-[42px] w-fit px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden"
              >
                <p className="text-white text-sm font-semibold">Book A Consultation</p>
              </Link>
            </div>
          </div>

          {/* Right: image marquees */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4 h-full">
            <div className="space-y-4">
              <ImageRow images={images} direction="left" speed={30} />
              <ImageRow images={images} direction="right" speed={25} />
            </div>
            <div className="flex flex-row gap-2 mt-2">
              <ImageRow images={images} direction="left" speed={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
