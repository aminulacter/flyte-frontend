import Link from "next/link";
import { HOME_SERVICES } from "@/lib/home/static";

function normalizeHref(href) {
  if (!href) return "#";
  return href.startsWith("/") ? href : `/${href}`;
}

export default function HomeServices() {
  return (
    <div className="bg-white">
      <div className="py-10 container">
        <div className="lg:mx-20 flex flex-col gap" data-aos="fade-up">
          <div>
            <p className="pb-2.5 text-lg text-btnColor text-center font-['DM_Sans'] lg:px-0">Our Services</p>
            <h2 className="lg:max-w-[624px] mx-auto text-center text-black text-2xl lg:text-4xl font-semibold lg:leading-[50px]">
              Empowering Your Vision Through A Range Of Professional Services
            </h2>
          </div>
          <div
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 lg:mt-10 mb-8"
            data-aos="fade-up"
          >
            {HOME_SERVICES.map((service) => (
              <Link
                key={service.title}
                href={normalizeHref(service.href)}
                className="group relative h-auto p-6 bg-white hover:bg-[#F0F2FF] border border-[#DEE1E6] rounded-[32px] shadow-sm justify-start items-stretch gap-3 inline-flex overflow-hidden transition-colors duration-300"
              >
                <div className="flex flex-col gap-7">
                  <div className="p-3 w-10 h-10 rounded-full bg-[#F0F2FF] group-hover:bg-[#5856D6] group-hover:text-white flex justify-center items-center transition-colors duration-300">
                    <i className={service.icon} />
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl text-[#171A1F] font-medium break-words max-w-[240px]">{service.title}</h3>
                    <p className="text-[#565D6D]">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="relative p-1.5 w-8 h-8 rounded-full bg-[#353535] group-hover:bg-[#5856D6] flex justify-center items-center transition-colors duration-300">
                      <i className="fa-solid fa-plus absolute text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                      <i className="fa-solid fa-arrow-right absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-white" />
                    </span>
                    <span className="text-[#171A1F] group-hover:text-[#5856D6] transition-colors duration-300 flex items-center">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center items-center -mb-2">
            <Link className="px-8 py-3 bgGradientNevyBlue rounded-md" href="/services">
              <div className="text-white text-sm font-semibold">See All Services</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
