import Link from "next/link";
import { HOME_BANNER_INDUSTRIES, HOME_HERO } from "@/lib/home/static";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/hero-bg.png"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="home-hero__overlay" />
      <div className="container home-hero__inner">
        <div className="home-hero__copy">
          <h1 className="home-hero__title">{HOME_HERO.title}</h1>
          <p className="home-hero__desc">{HOME_HERO.description}</p>
          <div className="home-hero__industries">
            {HOME_BANNER_INDUSTRIES.map((item) => (
              <Link key={item.href} className="home-hero-glass" href={item.href}>
                <span className="home-hero-glass__icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.iconSrc} alt="" />
                </span>
                <p className="home-hero-glass__label">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link className="home-btn" href="/schedule-consultation">
            Book A Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
