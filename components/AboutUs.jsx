import ContactSection from "@/components/ContactSection";

/** About Us page body — data from `GET /aboutus` (title, description, image, mission/vision). */
export default function AboutUs({ about }) {
  const { title, description, image, mission_vision } = about || {};

  return (
    <div>
      <div className="mt-5 lg:mt-40">
        <span className="container flex flex-col items-center my-2 md:my-7">
          <h1 className="w-full text-[#15161B] text-lg lg:text-4xl font-semibold text-center">
            {title}
          </h1>
          <p
            className="text-center text-[#afadb5] text-xs md:text-sm md:mt-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </span>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full lg:h-[500px] object-cover" src={image} alt={title} />
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-center gap-6 my-5 md:my-10">
        <div className="lg:w-[540px] max-h-[300px] p-5 md:p-10 bg-[#f4f2f0] flex-col justify-start items-center gap-3 md:gap-6 inline-flex">
          <span className="text-xl md:text-3xl">
            <i className="fa-solid fa-bullseye" />
          </span>
          <h4 className="text-center md:text-xl font-bold">Our Mission</h4>
          <p className="max-w-[460px] text-center text-black/70 text-sm">{mission_vision?.mission}</p>
        </div>
        <div className="lg:w-[540px] max-h-[300px] p-5 md:p-10 bg-[#f4f2f0] flex-col justify-start items-center gap-3 md:gap-6 inline-flex">
          <span className="text-xl md:text-3xl">
            <i className="fa-solid fa-compass" />
          </span>
          <h4 className="text-center md:text-xl font-bold">Our Vision</h4>
          <p className="max-w-[460px] text-center text-black/70 text-sm">{mission_vision?.vision}</p>
        </div>
      </div>

      <div className="container py-6 mx-auto max-w-5xl">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:leading-[50px]">
          Real stories of success and partnership
        </h2>
        <p className="lg:text-center text-neutral-500 text-sm font-normal mt-3 mb-5 lg:mb-10">
          Discover how our solutions have empowered businesses to grow, adapt, and thrive
        </p>
        <iframe
          src="https://widget.clutch.co/widgets/get/4?ref_domain=yourdomain.com&uid=122766&reviews=370785,370566,370488,370459,369723"
          title="Clutch Reviews"
          className="w-full h-[500px] lg:h-[700px] border-0"
          loading="lazy"
        />
      </div>

      <ContactSection />
    </div>
  );
}
