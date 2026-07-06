import Link from "next/link";

const badges = [
  { src: "https://i.ibb.co.com/JtcqtSf/surface1.png", alt: "certification-0" },
  { src: "https://i.ibb.co.com/pP9mzVj/cert-3-1.png", alt: "certification-1" },
  { src: "https://i.ibb.co.com/XxwnN4x/basis-1.png", alt: "certification-2" },
];

export default function CareerHero() {
  return (
    <div className="container pt-5 lg:pt-40 mb-10 md:mb-16 flex flex-col lg:flex-row gap-5 md:gap-20 w-full">
      <div className="flex flex-col gap-5 md:gap-10 lg:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold !leading-[46px]">
          Discover How We Empower Careers to Reach New Heights
        </h2>
        <p className="text-sm md:text-base font-normal">
          At Flyte Solutions, we believe that the journey of growth is driven by
          continuous learning and a sense of wonder. We&rsquo;re committed to
          creating a workplace where curiosity thrives, talents are nurtured, and
          innovative ideas flourish. Discover a dynamic environment where your
          potential knows no bounds, and find a role that aligns with your passion
          and purpose. Join us and be part of a team where every day offers new
          opportunities for growth and adventure.
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map((b) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={b.src} className="h-10 lg:h-16" src={b.src} alt={b.alt} />
          ))}
        </div>
        <Link
          className="w-full md:w-[137px] text-white text-sm text-center font-semibold px-8 py-3 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md"
          href="/company"
        >
          Learn More
        </Link>
      </div>
      <div className="lg:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full lg:w-[600px] lg:h-[480px] rounded-[15px] object-cover"
          src="https://i.ibb.co.com/F6G9RHs/Frame-9.png"
          alt="career banner"
        />
      </div>
    </div>
  );
}
