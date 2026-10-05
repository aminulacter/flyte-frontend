import { BRANDS } from "@/lib/brands";

export default function HomeBrandsMarquee() {
  return (
    <div className="home-brands">
      <div className="container home-brands__grid">
        {BRANDS.map((brand) => (
          <div key={brand.src} className="home-brands__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brand.src} alt={brand.alt} loading="eager" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  );
}
