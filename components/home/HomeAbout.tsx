import Link from "next/link";
import { HOME_ABOUT } from "@/lib/home/static";

export default function HomeAbout() {
  const about = HOME_ABOUT;

  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__intro">
          <p className="home-eyebrow">{about.eyebrow}</p>
          <h2 className="home-heading home-heading--lg home-about__title">
            Solutions That Drive Your
            <br />
            Business Forward
          </h2>
        </div>
        <div className="home-about__grid">
          <div className="home-about__image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.image} alt="Flyte Solutions office" loading="lazy" decoding="async" />
          </div>
          <div className="home-about__copy">
            <p>{about.description}</p>
            <p>{about.description2}</p>
            <div className="home-about__stats">
              {about.stats.map((stat) => (
                <div key={stat.label} className="home-about__stat">
                  <span className="home-about__stat-icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={stat.icon} alt="" loading="lazy" />
                  </span>
                  <p className="home-about__stat-value">{stat.value}</p>
                  <p className="home-about__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
            <div>
              <Link className="home-btn" href="/company/about-us">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
