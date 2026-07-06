import Link from "next/link";
import { HOME_BANNER_INDUSTRIES, HOME_HERO } from "@/lib/home/static";

export default function HomeHero() {
  return (
    <div className="relative text-white flex flex-col pt-10 lg:pt-20 pb-10 lg:pb-0 lg:h-[740px] justify-center items-start gap-5 overflow-hidden">
      <div className="absolute inset-0 block lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bannerImg.webp"
          alt="Flyte Solutions Banner"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="hidden lg:block absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/images/bannerImg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="container flex flex-col gap-[24px] relative z-10">
        <div className="w-full flex justify-start items-start">
          <h1 className="max-w-[1000px] text-start text-2xl lg:text-5xl font-semibold leading-10 lg:leading-[64px]">
            {HOME_HERO.title}
          </h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <p className="max-w-[840px] text-start text-white text-base lg:text-xl font-normal">
            {HOME_HERO.description}
          </p>
        </div>
        <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {HOME_BANNER_INDUSTRIES.map((item) => (
            <Link
              key={item.href}
              className="w-[125px] lg:w-[140px] h-40 flex flex-col gap-3 justify-center items-center rounded-[10px] bannerIndustries hover:bg-white group shrink-0"
              href={item.href}
            >
              <p className="h-1/2 text-4xl text-end flex justify-end items-end group-hover:text-btnColor">
                <i className={item.icon} />
              </p>
              <h2 className="h-1/2 w-[140px] text-center text-white group-hover:text-black text-sm font-semibold leading-5 px-2">
                {item.label}
              </h2>
            </Link>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <Link
            className="w-fit px-[32px] py-[12px] border border-btnColor hover:border-pink-500 bg-btnColor hover:bg-pink-500 text-white rounded-md"
            href="/schedule-consultation"
          >
            Book A Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
