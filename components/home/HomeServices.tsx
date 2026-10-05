import Link from "next/link";
import { HOME_SERVICES } from "@/lib/home/static";

function normalizeHref(href: string) {
  if (!href) return "#";
  return href.startsWith("/") ? href : `/${href}`;
}

export default function HomeServices() {
  return (
    <section className="home-services">
      <div className="container">
        <div className="home-services__intro">
          <p className="home-eyebrow">Our Services</p>
          <h2 className="home-heading home-services__heading">
            Empowering your vision through a range of professional services
          </h2>
        </div>
        <div className="home-services__grid">
          {HOME_SERVICES.map((service) => (
            <Link
              key={service.title}
              href={normalizeHref(service.href)}
              className="home-service-card"
            >
              <div className="home-service-card__body">
                <h3 className="home-service-card__title">{service.title}</h3>
                <p className="home-service-card__desc">{service.description}</p>
              </div>
              <div className="home-service-card__art">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.illustration} alt="" />
              </div>
            </Link>
          ))}
        </div>
        <div className="home-services__cta">
          <Link className="home-btn" href="/services">
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
