"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MEGA_MENUS, COMPANY_MENU } from "@/lib/navigation";
import type { MegaMenu } from "@/lib/types";

function ReviewWidgets({ label }: { label: string }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="border border-yellow-500"
        href="https://www.goodfirms.co/company/flyte-solutions"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-[50px] w-[200px]"
          src="/images/goodfirm.webp"
          alt="GoodFirms Review"
          decoding="async"
          loading="lazy"
        />
      </a>
      <div className="bg-white" style={{ position: "relative", width: "200px", height: "50px" }}>
        <iframe
          src="https://widget.clutch.co/widgets/get/2?ref_domain=clutch.co&uid=122766"
          width="200"
          height="50"
          style={{ border: "1px solid red", overflow: "hidden" }}
          scrolling="no"
          title="Clutch Reviews Widget"
          className="p-0.5"
        />
        <a
          href="https://clutch.co/profile/flyte-solutions"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
          aria-label={`Flyte Solutions profile on Clutch - ${label}`}
        />
      </div>
    </div>
  );
}

function DropdownButton({ label, light }: { label: string; light: boolean }) {
  const tone = light ? "text-black" : "group-hover:text-black lg:text-white";
  return (
    <div className="nav__link dropdown__button  ">
      <p className={`hover:text-[#2B6CB0] ${tone}`}>{label}</p>
      <i className={`fa-solid fa-chevron-down fa-2xs ${tone}`} />
    </div>
  );
}

function MegaDropdown({ menu, light }: { menu: MegaMenu; light: boolean }) {
  const { label, title, description, moreHref, items } = menu;
  return (
    <li className="dropdown__item">
      <DropdownButton label={label} light={light} />
      <div className="dropdown__container">
        <div className="dropdown__content">
          <div className="lg:container grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
            <div className="lg:col-span-1 hidden lg:flex flex-col gap-4 flex-shrink-0 mt-5">
              <h1 className="text-lg font-bold text-btnColor ">{title}</h1>
              <p className=" text-sm text-[#131313B2]">{description}</p>
              <ReviewWidgets label={label} />
              <Link className="bgGradientNevyBlue w-fit h-fit text-white px-6 py-3 rounded-lg" href={moreHref}>
                <p className="">Learn more about {label}</p>
              </Link>
            </div>
            <div className="lg:col-span-2 rounded-lg flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                {items.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <div className="px-5 lg:px-4 py-1 lg:py-2 lg:h-24 bg-[#F7FAFF] lg:bg-white flex flex-row items-center gap-2 lg:gap-4 lg:border-2 lg:border-white hover:border-btnColor lg:rounded-lg max-w-[406px]">
                      <div className="w-7 h-7">
                        <i className={`w-7 h-7 fa ${item.icon} text-lg lg:text-3xl text-[#5856d6]`} />
                      </div>
                      <div>
                        <p className="text-btnColor text-xs lg:text-base">{item.title}</p>
                        <p className=" text-[#131313B2] text-xs hidden lg:block">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="bg-[#F7FAFF]">
                  <Link
                    className="nav-close mx-5 bg-btnColor text-white px-3 w-fit rounded lg:hidden flex justify-center items-center"
                    href={moreHref}
                  >
                    Learn more about {label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function CompanyDropdown({ menu, light }: { menu: typeof COMPANY_MENU; light: boolean }) {
  const { label, title, description, moreHref, items } = menu;
  return (
    <li className="dropdown__item">
      <DropdownButton label={label} light={light} />
      <div className="dropdown__container">
        <div className="dropdown__content">
          <div className="lg:container grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
            <div className="lg:col-span-1 hidden lg:flex flex-col gap-4 flex-shrink-0 mt-5">
              <h1 className="text-lg font-bold text-btnColor ">{title}</h1>
              <p className=" text-sm text-[#131313B2]">{description}</p>
              <ReviewWidgets label={label} />
            </div>
            <div className="lg:col-span-2 rounded-lg flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                {items.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <div className="px-4 py-1.5 lg:py-6 bg-[#f7f7f7] lg:border-2 lg:border-[#f1f1f1] hover:border-btnColor lg:rounded-lg max-w-[406px]">
                      <div className="flex flex-row items-center gap-2 lg:gap-5">
                        <div>
                          <i className={` fa ${item.icon} text-lg lg:text-5xl text-[#5856d6]`} />
                        </div>
                        <div>
                          <p className="text-btnColor text-xs lg:text-base font-semibold mb-1 lg:mb-2">{item.title}</p>
                          <p className=" text-[#131313B2] text-xs hidden lg:block">{item.desc}</p>
                        </div>
                      </div>
                      <div className="mt-6 hidden lg:block w-fit mx-auto">
                        <button className="px-6 py-1.5 text-[10px] font-semibold hover:text-white bg-white hover:bg-black transition duration-300 rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] outline outline-1 outline-offset-[-1px] outline-[#dddddd]">
                          {item.cta}
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="bg-[#F7FAFF]">
                  <Link
                    className="nav-close mx-5 bg-btnColor text-white px-3 w-fit rounded lg:hidden flex justify-center items-center"
                    href={moreHref}
                  >
                    Learn more about {label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Header() {
  const pathname = usePathname();
  const light = pathname.startsWith("/hire/") || pathname.startsWith("/hire-sp/");
  const tone = light ? "text-black" : "group-hover:text-black lg:text-white";
  const [hire, industries, services, products] = MEGA_MENUS;
  return (
    <div className="">
      <div
        className={`group top-0 left-0 z-[1000] w-full transition-all duration-500 ease-in-out lg:absolute ${
          light ? "bg-white" : "bg-transparent lg:hover:bg-white"
        }`}
      >
        <nav className="nav container">
          <div className="nav__data">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/flyte-logo.png" alt="flyte solutions Ltd." />
            </Link>
            <div className="nav__toggle" id="nav-toggle">
              <i className="fa-solid fa-bars nav__toggle-menu" />
              <i className="fa-solid fa-x nav__toggle-close mr-1" />
            </div>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <MegaDropdown menu={hire} light={light} />
              <MegaDropdown menu={industries} light={light} />
              <MegaDropdown menu={services} light={light} />
              <MegaDropdown menu={products} light={light} />
              <li className="">
                <Link className="nav-close nav__link h-full flex items-center " href="/case-studies">
                  <span className={tone}>Case Studies</span>
                </Link>
              </li>
              <CompanyDropdown menu={COMPANY_MENU} light={light} />
              <li className="">
                <Link className="nav-close nav__link h-full flex items-center " href="/career">
                  <span className={tone}>Career</span>
                </Link>
              </li>
              <li>
                <Link className="nav-close h-full flex items-center" href="/contact-us">
                  <p className="bgGradientNevyBlue h-fit text-white px-6 py-3 rounded-lg">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
