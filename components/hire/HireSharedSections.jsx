import Link from "next/link";
import { CHECK_SVG, ENGAGEMENT_MODELS, HIRE_TRUSTED_LOGOS } from "@/lib/hire/shared";

export function DreamTeamCta() {
  return (
    <div className="md:h-[170px] bg-[#5856d6]">
      <div className="container md:flex justify-between items-center pt-3">
        <div className="space-y-2">
          <h2 className="text-[#f7f7f7] text-2xl md:text-3xl font-bold">Build Your Dream Team</h2>
          <p className="text-[#f7f7f7] text-base">Access top talent and scale your business effortlessly.</p>
          <div className="pt-2">
            <Link
              className="px-6 py-2.5 text-sm font-semibold bg-white hover:bg-black hover:text-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)]"
              href="/hire/application-form"
            >
              Build Your Team Now
            </Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="md:w-[392px] md:h-[165px]"
          src="https://i.ibb.co.com/C5H9tGPf/dream-team-photo.webp"
          alt="Build Your Dream Team"
        />
      </div>
    </div>
  );
}

export function FiveStepsSection() {
  return (
    <div className="bg-white py-4 lg:py-8">
      <div className="container">
        <div>
          <h1 className="text-[#060b13] text-2xl lg:text-[32px] font-semibold leading-[30px]">
            Hire Our Expert Team in 5 Simple Steps
          </h1>
          <p className="py-6 text-gray-600 text-sm lg:text-base font-normal">
            Hire a team of dedicated web developers quickly and easily to meet your business needs and
            quickly scale your team with expert web developers.
          </p>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hidden md:block"
            draggable={false}
            src="/images/hire/hire-stpes-desktop.png"
            alt="Hire steps"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="md:hidden mx-auto"
            draggable={false}
            src="/images/hire/hire-steps-mobile.png"
            alt="Hire steps"
          />
        </div>
        <div className="w-fit mx-auto mt-6">
          <Link
            className="px-6 py-2.5 flex items-center gap-2 bg-[#5856d6] hover:bg-white border border-[#5856d6] rounded-md text-white hover:text-[#5856d6] text-sm font-semibold transition duration-300"
            href="/hire/application-form"
          >
            Let&apos;s Start!
          </Link>
        </div>
      </div>
    </div>
  );
}

export function EngagementModelsSection() {
  return (
    <div className="bg-white py-4 lg:py-8">
      <div className="container">
        <div>
          <h1 className="text-[#060b13] text-2xl lg:text-[32px] font-semibold leading-[30px]">
            Hire Top Talent through Flexible Engagement Models
          </h1>
          <p className="py-6 text-gray-600 text-sm lg:text-base font-normal">
            Hire Experienced Web Developers for Successful Project Completion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.title}
              className="p-6 bg-blue-50 hover:bg-black rounded-lg transition duration-500 group flex flex-col justify-between"
            >
              <div>
                <h4 className="pb-7 text-[#060b13] group-hover:text-white text-2xl font-bold transition duration-500">
                  {model.title}
                </h4>
                {model.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-4 pb-2.5">
                    <span>{CHECK_SVG}</span>
                    <p className="text-[#060b13] text-sm group-hover:text-white transition duration-500 w-[285px]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                className="px-6 py-2.5 mt-6 bg-[#5856d6] hover:bg-white rounded-md text-center text-white hover:text-[#5856d6] text-sm font-semibold transition duration-500"
                href="/hire/application-form"
              >
                Hire Us
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClutchReviewsSection() {
  return (
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
  );
}

export function TrustedLeadersSection() {
  return (
    <div className="px-5 md:px-20 py-7 md:py-10 bg-black">
      <h1 className="text-center text-white text-xl md:text-2xl font-semibold mb-5 md:mb-12">
        Trusted by Industry Leaders
      </h1>
      <div className="flex flex-wrap lg:justify-center gap-4 md:gap-7">
        {HIRE_TRUSTED_LOGOS.map((logo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="w-fit h-[30px] lg:h-[48px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
