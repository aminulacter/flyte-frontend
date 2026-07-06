import { BRANDS } from "@/lib/brands";

/**
 * "Trusted by top brands" logo wall. Desktop shows the logos in centered rows;
 * mobile wraps them compactly. Matches the original career-page layout.
 */
export default function TrustedBrands({
  title = "Trusted by top brands to deliver excellence every time",
}) {
  return (
    <div className="container mb-10 md:mb-16">
      <h2 className="md:w-[454px] text-center text-lg md:text-2xl font-bold mx-auto mb-5">
        {title}
      </h2>

      <div className="hidden md:flex md:justify-center flex-wrap gap-5 md:gap-14 mb-4 md:mb-8">
        {BRANDS.map((b) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={b.src}
            src={b.src}
            alt={b.alt}
            className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
          />
        ))}
      </div>

      <div className="md:hidden flex flex-wrap gap-5">
        {BRANDS.map((b) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={b.src}
            src={b.src}
            alt={b.alt}
            className="w-fit h-[24px] object-cover mt-2"
          />
        ))}
      </div>
    </div>
  );
}
