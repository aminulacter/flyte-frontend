import Link from "next/link";
import CaseStudyTestimonials from "@/components/case-studies/CaseStudyTestimonials";
import type { CaseStudyDetailData, CaseStudyFeature, CaseStudyStep } from "@/lib/types";
import "@/components/case-studies/case-study-detail.css";

function featureIcon(feature: CaseStudyFeature) {
  if (feature?.icon) return feature.icon;
  const title = (feature?.title || "").toLowerCase();
  if (title.includes("secure") || title.includes("audit")) return "fa-shield-halved";
  if (title.includes("dashboard") || title.includes("portal")) return "fa-gauge-high";
  if (title.includes("loan") || title.includes("invoice") || title.includes("payment")) return "fa-file-invoice-dollar";
  if (title.includes("analytic") || title.includes("report")) return "fa-chart-line";
  if (title.includes("notif")) return "fa-bell";
  if (title.includes("chat") || title.includes("team")) return "fa-comments";
  if (title.includes("task") || title.includes("track")) return "fa-list-check";
  return "fa-circle-check";
}

function companySaysLabel(name?: string) {
  if (!name) return "Our Customer";
  const cleaned = name.replace(/\|.*$/, "").trim();
  if (cleaned.length <= 28) return cleaned;
  return cleaned.split(/\s+/).slice(0, 3).join(" ");
}

function Banner({
  title,
  subtitle,
  description,
  image,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="csd-hero">
      <div className="container">
        <div className="csd-hero__grid">
          <div>
            <p className="csd-hero__eyebrow">{subtitle || "Explore Our Success Stories"}</p>
            <h1 className="csd-hero__title">{title}</h1>
            {description ? <p className="csd-hero__desc">{description}</p> : null}
            <Link href="/schedule-consultation" className="btn-2">
              Book A Consultation
            </Link>
          </div>
          {image ? (
            <div className="csd-hero__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={title || "Case study"} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function StatsBar({
  location,
  category,
  service,
  partnership,
}: {
  location?: string;
  category?: { name?: string } | null;
  service?: string;
  partnership?: string;
}) {
  const items = [
    { icon: "fa-location-dot", label: "Location", value: location },
    { icon: "fa-globe", label: "Industry", value: category?.name },
    { icon: "fa-wrench", label: "Service", value: service },
    { icon: "fa-handshake", label: "Partnership", value: partnership },
  ].filter((item) => item.value);
  if (!items.length) return null;

  return (
    <section className="csd-stats">
      <div className="container">
        <div className="csd-stats__grid py-10 items-center justify-center" style={{ backgroundColor: '#f4f4f8' }}>
          {items.map((item) => (
            <div key={item.label} className="csd-stats__item">
              <i className={`csd-stats__icon fa-solid ${item.icon}`} />
              <h2 className="csd-stats__label">{item.label}</h2>
              <p className="csd-stats__value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeSection({
  title,
  description,
  painTitle,
  steps = [],
}: {
  title?: string;
  description?: string;
  painTitle?: string;
  steps?: CaseStudyStep[];
}) {
  const list = (steps || []).filter((step) => step?.developing_step_title || step?.description);
  if (!description && !list.length) return null;

  return (
    <section className="csd-challenge">
      <div className="container">
        <div className="csd-challenge__grid">
          <div>
            <h2 className="csd-challenge__heading">{title || "The Challenge"}</h2>
            {description ? <p className="csd-challenge__body">{description}</p> : null}
          </div>
          {list.length ? (
            <div>
              <h3 className="csd-pain__heading">{painTitle || "Identifying the Pain Points"}</h3>
              <div className="csd-pain__list">
                {list.map((step, index) => (
                  <div key={index} className="csd-pain__item">
                    <div className="csd-pain__marker">
                      <span className="csd-pain__num">{index + 1}</span>
                      {index < list.length - 1 ? <span className="csd-pain__line" /> : null}
                    </div>
                    <div>
                      {step.developing_step_title ? (
                        <h4 className="csd-pain__title">{step.developing_step_title}</h4>
                      ) : null}
                      {step.description ? <p className="csd-pain__desc">{step.description}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ services = [] }: { services?: CaseStudyDetailData["services"] }) {
  const items = (services || []).filter((item) => item?.title || item?.case_studies_title || item?.service_image);
  if (!items.length) return null;

  return (
    <section className="csd-solutions">
      <div className="container">
        <div className="csd-solutions__head">
          <p className="csd-eyebrow">Solution</p>
          <h2 className="csd-solutions__title">Everything in One Place</h2>
        </div>
        <div className="csd-solutions__grid">
          {items.map((item, index) => {
            const title = item?.title || item?.case_studies_title;
            return (
              <article key={index} className="csd-solution">
                {item?.service_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.service_image} alt={title || "Solution"} />
                ) : null}
                <div>
                  {title ? <h3 className="csd-solution__title">{title}</h3> : null}
                  {item?.short_description ? (
                    <p className="csd-solution__desc">{item.short_description}</p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        <Link className="btn-2" href="/contact-us">
          Request A Demo
        </Link>
      </div>
    </section>
  );
}

function TechStack({ apps = [] }: { apps?: CaseStudyDetailData["apps_list"] }) {
  const items = (apps || []).filter((app) => app?.logo);
  if (!items.length) return null;

  return (
    <section className="csd-tech">
      <h2 className="csd-tech__title">Technology Stack</h2>
      <div className="container">
        <div className="csd-tech__logos">
          {items.map((app, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={index} src={app.logo} alt={app.name || "Technology"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactfulResults({
  items = [],
  title,
}: {
  items?: CaseStudyDetailData["impactful"];
  title?: string;
}) {
  const rows = (items || []).filter((item) => item?.impactful_title || item?.impactful_image);
  if (!rows.length) return null;

  return (
    <section className="csd-impact">
      <div className="container">
        <div className="csd-impact__head">
          <p className="csd-eyebrow">Impactful Results</p>
          <h2 className="csd-impact__title">Key Achievements of {title}</h2>
        </div>
        {rows.map((item, index) => {
          const imageFirst = (index + 1) % 2 === 0;
          return (
            <div
              key={index}
              className={`csd-impact__row${imageFirst ? " is-image-first" : ""}`}
            >
              <div className="csd-impact__card">
                <div className="csd-impact__card-head">
                  <span className="csd-impact__icon">
                    <i className={`fa-solid ${item.icon_class || "fa-star"}`} />
                  </span>
                  <h3 className="csd-impact__card-title">{item.impactful_title}</h3>
                </div>
                {item.short_description ? (
                  <p className="csd-impact__card-desc">{item.short_description}</p>
                ) : null}
              </div>
              {item.impactful_image ? (
                <div className="csd-impact__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.impactful_image} alt={item.impactful_title || "Result"} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeaturesChooser({
  title,
  subtitle,
  features = [],
}: {
  title?: string;
  subtitle?: string;
  features?: CaseStudyFeature[];
}) {
  const items = (features || []).filter((feature) => feature?.title);
  if (!items.length) return null;

  return (
    <section className="csd-features">
      <div className="container">
        <div className="csd-features__head">
          <h2 className="csd-features__title">{title || "Choose the Features You Need"}</h2>
          {subtitle ? <p className="csd-features__sub">{subtitle}</p> : null}
        </div>
        <div className="csd-features__grid">
          {items.map((feature, index) => (
            <div key={index} className="csd-feature">
              {feature.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={feature.icon} alt="" />
              ) : (
                <i className={`fa-solid ${featureIcon(feature)}`} />
              )}
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
        <Link className="csd-features__more" href="/contact-us">
          See All Features
          <i className="fa-solid fa-angle-right" />
        </Link>
      </div>
    </section>
  );
}

function QuoteSection({ data }: { data: CaseStudyDetailData }) {
  let quotes = data.testimonials || [];
  if (!quotes.length && (data.client_feedback_description || data.client_feedback_name)) {
    quotes = [
      {
        company_name: data.client_feedback_company_name,
        description: data.client_feedback_description,
        image: data.client_feedback_image,
        name: data.client_feedback_name,
        designation: data.client_feedback_designation,
      },
    ];
  }
  if (!quotes.length) return null;
  const brand = companySaysLabel(quotes[0]?.company_name);

  return (
    <section className="csd-quote">
      <div className="container">
        <div className="grid grid-cols-2 w-full">
          <div className="col-span-2 lg:col-span-1 text-start">
            <h2 className="csd-quote__title">What {brand} says</h2>
            <p className="csd-quote__intro">
              We value our clients&apos; feedback and take pride in delivering exceptional solutions
              that drive success.
            </p>
          </div>
          <CaseStudyTestimonials quotes={quotes} />
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyDetail({ data }: { data: CaseStudyDetailData | null }) {
  if (!data) return null;

  return (
    <div className="bg-white">
      <Banner
        title={data.title}
        subtitle={data.short_title}
        description={data.short_description}
        image={data.hero_image || data.developing_image || data.image}
      />
      <StatsBar
        location={data.location}
        category={data.category}
        service={data.service}
        partnership={data.partnership}
      />
      <ChallengeSection
        title={data.challenge_title}
        description={data.developing_short_description}
        painTitle={data.pain_points_title}
        steps={data.developing_step}
      />
      <ServicesGrid services={data.services} />
      <TechStack apps={data.apps_list} />
      <ImpactfulResults items={data.impactful} title={data.title} />
      <FeaturesChooser
        title={data.features_title}
        subtitle={data.features_subtitle}
        features={data.features}
      />
      <QuoteSection data={data} />
      <section className="csd-cta">
        <div className="container">
          <div className="csd-cta__inner">
            <h2 className="csd-cta__title">Ready to Transform Your Business?</h2>
            <p className="csd-cta__desc">
              Explore how our solutions can help you achieve similar success. Let&apos;s turn your
              challenges into opportunities.
            </p>
            <Link href="/schedule-consultation" className="btn-2">
              Book A Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
