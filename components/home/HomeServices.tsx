import Link from "next/link";
import { HOME_SERVICES } from "@/lib/home/static";

function normalizeHref(href) {
  if (!href) return "#";
  return href.startsWith("/") ? href : `/${href}`;
}

export default function HomeServices() {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="container ">
        <div className="flex flex-col gap" data-aos="fade-up">
          <div>
            <p className="pb-2.5 text-lg text-btnColor text-start font-['DM_Sans'] mt-8 lg:px-0">Our Services</p>
            <h2 className="lg:max-w-[624px] text-start text-black text-2xl lg:text-4xl font-semibold lg:leading-[50px]">
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
                className="group relative h-auto p-6 bg-white hover:bg-[#F0F2FF] border border-[#DEE1E6] rounded-[15px] shadow-sm justify-start items-stretch gap-3 inline-flex overflow-hidden transition-colors duration-300"
              >
                <div className="flex flex-col gap-7">
                  <div className="space-y-5">
                    <h3 className="text-2xl text-[#171A1F] font-medium break-words max-w-[240px]">{service.title}</h3>
                    <p className="text-[#565D6D]">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row gap-2 mb-8">
            <Link
              className="w-fit px-8 py-3 border border-btnColor hover:border-pink-500 bg-btnColor hover:bg-pink-500 text-white rounded-md"
              href="/schedule-consultation"
            >
              See All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
