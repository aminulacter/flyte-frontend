import Link from "next/link";

/**
 * Case-study detail page body, rebuilt from the original bundle. All data comes
 * from `GET /case-studies/{slug}` (fetched at build time). Sections mirror the
 * original: hero banner, stats bar, developing process, services grid,
 * technology stack, impactful results and customer feedback.
 */

function Banner({ title, subtitle, description, image }) {
  return (
    <div
      className="pt-10 lg:pt-44 relative lg:min-h-[610px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="container pb-8 lg:pb-16 relative">
        <div className="w-full lg:w-[60%]">
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-[#6ec1ff] text-base lg:text-lg uppercase font-bold tracking-wide flex lg:items-center gap-2">
              <div className="w-[22px] h-0.5 bg-[#6ec1ff] mt-3 lg:mt-0" /> {subtitle}
            </h4>
            <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[46px]">{title}</h1>
            <p className="text-[#dddddd] text-sm leading-snug">{description}</p>
          </div>
          <div className="mt-8 lg:mt-12">
            <Link
              href="/schedule-consultation"
              className="w-fit px-8 py-3 bgGradientNevyBlue rounded-md text-white text-base font-semibold"
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBar({ location, category, service, partnership }) {
  const items = [
    { icon: "fa-map-marker-alt", label: "Location", value: location },
    { icon: "fa-industry", label: "Industry", value: category?.name },
    { icon: "fa-globe", label: "Service", value: service },
    { icon: "fa-handshake", label: "Partnership", value: partnership },
  ];
  return (
    <div className="bg-[#f4f2f0]">
      <div className="container md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col justify-center items-center gap-4">
            <i className={`text-2xl text-[#5856d6] fa-solid ${it.icon}`} />
            <h2 className="text-xl font-bold">{it.label}</h2>
            <p className="text-black/70 text-sm">{it.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DevelopingSection({ title, shortDescription, shortTitle, image, steps = [] }) {
  return (
    <div className="bg-white py-5 lg:py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <h2 className="text-[#181a2a] text-xl lg:text-3xl font-semibold mb-2 lg:mb-5 w-full lg:w-2/3">
            {title}
          </h2>
          <p className="text-[#12094a] mb-5">{shortDescription}</p>
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full object-cover lg:h-[340px]" src={image} alt={title} />
          </div>
        </div>
        <div>
          <h2 className="text-[#181a2a] text-xl lg:text-2xl font-semibold mb-4 lg:mb-8">
            {shortTitle}
          </h2>
          <div className="space-y-2.5">
            {steps?.map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-3.5 mb-2.5">
                  <span className="w-5 h-5 bg-[#5856d6] rounded-full flex justify-center items-center text-white text-xs font-semibold">
                    {i + 1}
                  </span>
                  <h4 className="text-center text-[#3b3c4e] text-base font-bold font-['Open_Sans']">
                    {step?.developing_step_title}
                  </h4>
                </div>
                <div className="flex gap-3.5">
                  {steps.length - 1 > i && <span className="w-0.5 h-auto mx-3 bg-[#d3d3d3]" />}
                  <p
                    className={`opacity-70 text-[#3b3c4e] text-sm ${
                      steps.length - 1 === i ? "ml-10" : ""
                    }`}
                  >
                    {step?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesGrid({ services = [] }) {
  if (!services?.length) return null;
  return (
    <div className="bg-white py-5 lg:py-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="pb-5 lg:pb-10">
        <h4 className="text-center text-[#6e51e0] text-sm">Solution</h4>
        <h1 className="text-center text-[#3b3c4e] text-xl lg:text-3xl font-bold">
          Everything in One Place
        </h1>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-0">
        {services.map((s, i) => {
          const title = s?.title || s?.case_studies_title;
          return (
            <div
              key={i}
              className={`p-5 lg:p-10 flex flex-col gap-5 lg:gap-10 bg-gradient-to-b from-[#f4f4f9] to-white ${
                i === 0 || i === 3 ? "lg:rounded-tl-xl" : ""
              } ${i === 2 || i === 5 ? "lg:rounded-tr-xl" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full md:h-[300px] lg:h-[200px] object-cover"
                src={s?.service_image}
                alt={`${title}-image`}
              />
              <div className="text-center">
                <h2 className="text-[#353f4f] text-xl font-bold">{title}</h2>
                <p className="opacity-90 text-[#3b3c4e]">{s?.short_description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        className="px-8 py-3 mt-3 bgGradientNevyBlue rounded-md text-white w-fit mx-auto block"
        href="/contact-us"
      >
        Request A Demo
      </Link>
    </div>
  );
}

function TechStack({ apps = [] }) {
  if (!apps?.length) return null;
  return (
    <div className="bg-white pt-5 lg:pt-8 pb-8 lg:pb-16">
      <h2 className="text-[#181a2a] text-xl lg:text-2xl text-center font-semibold mb-5 lg:mb-6">
        Technology Stack
      </h2>
      <div className="container lg:w-[500px] mx-auto">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {apps.map((app, i) => (
            <div key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-8 h-8 lg:w-12 lg:h-12" src={app?.logo} alt={`${app?.name}-logo`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactfulResults({ items = [], title }) {
  if (!items?.length) return null;
  return (
    <div className="container py-5 lg:py-10">
      <div className="flex flex-col items-center mb-5 lg:mb-10">
        <h4 className="text-[#6e51e0] text-xs text-center font-medium mb-3">Impactful Results</h4>
        <h2 className="lg:w-[600px] text-center text-[#060b13] text-xl lg:text-3xl font-semibold">
          Key Achievements of {title}
        </h2>
      </div>
      <div>
        {items.map((it, i) => (
          <div
            key={i}
            className={`flex justify-center gap-3 lg:gap-8 mb-8 last:mb-0 ${
              i % 2 === 0
                ? "flex-col-reverse lg:flex-row"
                : "flex-col-reverse lg:flex-row-reverse"
            }`}
          >
            <div className="p-1 bg-white rounded-xl shadow-[0px_8px_40px_0px_rgba(6,11,19,0.04)] overflow-hidden">
              <div className="p-5 h-[300px] lg:h-full lg:p-10 rounded-xl border-[.5px]">
                <div className="flex gap-4 mb-3 lg:mb-5">
                  <i
                    className={`text-xl text-[#6E51E0] border p-2 rounded-full fa-solid ${it?.icon_class}`}
                  />
                  <span className="text-[#060b13] text-xl font-semibold">{it?.impactful_title}</span>
                </div>
                <p className="w-full lg:w-[500.08px] h-[95px] overflow-hidden text-[#363d4f] line-clamp-4">
                  {it?.short_description}
                </p>
              </div>
            </div>
            <div className="p-1 bg-white rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full lg:w-[280px] sm:h-[320px] lg:h-[240px] object-cover border-[.5px] rounded-xl"
                src={it?.impactful_image}
                alt={`${it?.impactful_title}-image`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomerFeedback({ companyName, description, clientImage, clientName, clientDesignation }) {
  if (!description && !clientName && !companyName) return null;
  return (
    <div className="container my-10">
      <h2 className="text-xl lg:text-3xl text-center font-semibold lg:leading-[32px]">
        What Our Customer&#39;s Are Saying
      </h2>
      <p className="mt-4 w-full lg:w-[50%] mx-auto text-sm lg:text-base text-center text-[#12094A]">
        We value our clients feedback and take pride in delivering exceptional solutions that drive
        success. Hear what they say about us.
      </p>
      <div className="w-full lg:w-[715px] mx-auto mt-5 lg:mt-10 px-2 lg:flex justify-center items-center">
        <div className="px-8 md:px-20 py-4 lg:py-6 bg-[#e7e7e7] rounded-md">
          <div className="relative">
            <h1 className="h-10 lg:h-full text-[#131313] text-base lg:text-xl mb-3 md:mb-5 line-clamp-2 lg:line-clamp-1 leading-5">
              {companyName || "Missing Company Name"}
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 md:gap-5">
            <p className="text-[#121212] w-full lg:w-[715px] h-12 lg:h-16 text-xs lg:text-sm font-semibold line-clamp-3">
              {description || "Missing Description"}
            </p>
            <div className="flex flex-row justify-center items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-full w-10 h-10 md:w-[50px] md:h-[50px] object-cover border border-white"
                src={clientImage}
                alt="client image"
              />
              <div>
                <h1 className="text-[#121212] text-xs font-medium">
                  {clientName || "Missing client name"}
                </h1>
                <p className="text-[#121212] text-[10px] font-normal">
                  {clientDesignation || "Missing client designation"}
                </p>
                <div className="flex gap-1 text-btnColor mt-1">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star-half-stroke" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyDetail({ data }) {
  if (!data) return null;
  const {
    title,
    short_title,
    short_description,
    image,
    location,
    category,
    service,
    partnership,
    developing_title,
    developing_short_description,
    developing_short_title,
    developing_image,
    developing_step,
    services,
    apps_list,
    impactful,
    client_feedback_company_name,
    client_feedback_description,
    client_feedback_image,
    client_feedback_name,
    client_feedback_designation,
  } = data;

  return (
    <div>
      <Banner title={title} subtitle={short_title} description={short_description} image={image} />
      <StatsBar
        location={location}
        category={category}
        service={service}
        partnership={partnership}
      />
      <DevelopingSection
        title={developing_title}
        shortDescription={developing_short_description}
        shortTitle={developing_short_title}
        image={developing_image}
        steps={developing_step}
      />
      <ServicesGrid services={services} />
      <TechStack apps={apps_list} />
      <ImpactfulResults items={impactful} title={title} />
      <CustomerFeedback
        companyName={client_feedback_company_name}
        description={client_feedback_description}
        clientImage={client_feedback_image}
        clientName={client_feedback_name}
        clientDesignation={client_feedback_designation}
      />
    </div>
  );
}
