"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { FooterLinkSection, InitSystemData } from "@/lib/types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin.flytesolutions.com/api";

/**
 * Footer content is served by the backend (`GET /init-system`) exactly as in
 * the original site (which used an RTK Query `getFooter` endpoint). While the
 * request is in flight we render the same skeleton the original build shipped.
 * The `fallback` keeps the footer useful even when the API is unreachable
 * (e.g. local development / offline builds).
 */
const fallback: InitSystemData = {
  title: "Flyte Solutions Ltd.",
  logo_small: "/images/flyte-logo.png",
  address: "Dhaka, Bangladesh",
  mobile1: "",
  mobile2: "",
  contact_email: "info@flytesolutions.com",
  feedback_email: "",
  fb: "https://www.facebook.com/@flytesoft/",
  tw: "https://x.com/flytesolutions",
  ln: "https://www.linkedin.com/company/flytesolutions/posts/",
  yt: "https://youtube.com/",
  expertise: null,
  services: null,
};

function FooterSkeleton() {
  const Block = () => (
    <div className="space-y-11">
      <div className="animate-pulse rounded-md w-40 h-4 bg-gray-400" />
      <div className="space-y-5">
        <div className="animate-pulse rounded-md w-40 h-4 bg-gray-400" />
        <div className="pt-5 space-y-5">
          <div className="animate-pulse rounded-md w-full h-4 bg-gray-400" />
          <div className="animate-pulse rounded-md w-full h-4 bg-gray-400" />
          <div className="animate-pulse rounded-md w-full h-4 bg-gray-400" />
        </div>
      </div>
    </div>
  );
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
      <div className="space-y-4">
        <div className="animate-pulse rounded-md w-28 h-10 bg-gray-400" />
        <div className="animate-pulse rounded-md w-40 h-4 bg-gray-400" />
        <div className="animate-pulse rounded-md w-28 h-4 bg-gray-400" />
        <div className="animate-pulse rounded-md w-full h-4 bg-gray-400" />
        <div className="animate-pulse rounded-md w-full h-4 bg-gray-400" />
        <div className="animate-pulse rounded-md w-full h-4 bg-gray-400" />
      </div>
      <Block />
      <Block />
      <Block />
    </div>
  );
}

function ContactColumn({ contact }: { contact: InitSystemData }) {
  const {
    title,
    logo_small,
    address,
    mobile1,
    mobile2,
    contact_email,
    feedback_email,
    fb,
    tw,
    ln,
    yt,
  } = contact || {};
  return (
    <div className="flex flex-col gap-4">
      {logo_small ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="w-[100px] h-[84px]" src={logo_small} alt={title} />
      ) : null}
      <p className="-mt-3 lg:mt-0 footer-title text-neutral-100 opacity-100 text-base">
        Contact Us
      </p>
      <div className="max-w-[380px] flex flex-col gap-2">
        <p className="footer-title text-[#efefef] opacity-80">Location</p>
        <p className="w-[85%] text-wrap link link-hover text-[#e0e0e0] text-sm font-normal">
          {address}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a
          href="https://www.goodfirms.co/company/flyte-solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[190px] h-[50px]"
            src="/images/goodfirm.webp"
            alt="GoodFirms Review"
          />
        </a>
        <div className="bg-white relative w-[190px] h-[50px]">
          <iframe
            src="https://widget.clutch.co/widgets/get/2?ref_domain=clutch.co&uid=122766"
            width="190"
            height="50"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            title="Clutch Reviews Widget"
            className="p-0.5"
            loading="lazy"
          />
          <a
            href="https://clutch.co/profile/flyte-solutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
            aria-label="Flyte Solutions profile on Clutch"
          />
        </div>
      </div>
      <div className="flex gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={52} height={49} src="/images/iso1.png" alt="ISO Logo-1" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={49} height={49} src="/images/iso2.png" alt="ISO Logo-2" loading="lazy" />
        <a
          href="https://www.designrush.com/agency/profile/flyte-solutions-ltd"
          className="flex items-center"
          aria-label="Flyte Solutions profile on DesignRush"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={149} height={50} src="/images/design-rush-2.png" alt="design rush logo" loading="lazy" />
        </a>
      </div>
      {(mobile1 || mobile2) && (
        <div className="max-w-[380px] flex flex-col gap-2">
          <p className="footer-title text-[#F5F5F5] opacity-80">Phone</p>
          {mobile1 && (
            <a href={`tel:${mobile1}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
              {mobile1}
            </a>
          )}
          {mobile2 && (
            <a href={`tel:${mobile2}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
              {mobile2}
            </a>
          )}
        </div>
      )}
      <div className="max-w-[380px] flex flex-col gap-2">
        <p className="footer-title text-[#F5F5F5] opacity-80">Email</p>
        {contact_email && (
          <a href={`mailto:${contact_email}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
            {contact_email}
          </a>
        )}
        {feedback_email && (
          <a href={`mailto:${feedback_email}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
            {feedback_email}
          </a>
        )}
      </div>
      <div className="max-w-[380px] flex flex-col gap-2">
        <p className="footer-title text-[#F5F5F5] opacity-80">Follow Us</p>
        <div className="flex flex-row gap-2 items-center">
          <a href={fb} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg" aria-label="Flyte Solutions on Facebook">
            <i className="fab fa-facebook" />
          </a>
          <a href={tw} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg" aria-label="Flyte Solutions on X (Twitter)">
            <i className="fab fa-twitter" />
          </a>
          <a href={ln} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg" aria-label="Flyte Solutions on LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a href={yt} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg" aria-label="Flyte Solutions on YouTube">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
      <div className="max-w-[380px] flex flex-col gap-2 mt-5 lg:mt-10">
        <p className="footer-title text-[#F5F5F5] opacity-80">Payment Methods</p>
        <div className="flex flex-row gap-2 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={58} height={37} src="/images/visa.webp" alt="visa-payment-method" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={37} height={37} src="/images/mastercard.webp" alt="mastercard-payment-method" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={37} height={37} src="/images/amex.webp" alt="amex-payment-method" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function LinkSection({ section, className }: { section?: Record<string, unknown> | null; className?: string }) {
  const { sectionName, subsections } = (section || {}) as {
    sectionName?: string;
    subsections?: Array<{ name?: string; items?: Array<{ title?: string; url?: string; path?: string; name?: string }> }>;
  };
  if (!sectionName && !subsections) return null;
  return (
    <div className={className}>
      <p className="footer-title text-[#0FF] mb-8 text-sm">{sectionName}</p>
      <div className="-mt-3 lg:mt-0 w-full flex flex-col lg:flex-row gap-6">
        {subsections?.map((group, i) => (
          <div key={i} className="w-full lg:w-1/4 flex flex-col gap-2 lg:gap-5">
            <p className="text-[#F5F5F5] font-bold text-base leading-5">{group?.name}</p>
            <ul className="list-none flex flex-col gap-2 lg:gap-3">
              {group?.items?.slice(0, 9).map((item, j) => (
                <li key={j}>
                  {item?.path ? (
                    <Link href={item.path} className="text-[#eaeaea] text-sm link link-hover line-clamp-1">
                      {item?.name ?? item?.title ?? ""}
                    </Link>
                  ) : (
                    <span className="text-[#eaeaea] text-sm link link-hover">
                      {item?.name ?? item?.title ?? ""}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const [data, setData] = useState<InitSystemData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/init-system`);
        const json = await res.json();
        if (active) setData(json?.data || null);
      } catch {
        if (active) setData(null);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const contact = data || fallback;
  const expertise = data?.expertise;
  const services = data?.services;

  return (
    <footer id="page-footer">
      <div className="container">
        {loading ? (
          <FooterSkeleton />
        ) : (
          <div className="footer text-base-content lg:py-10 bg-[#2A3342]">
            <ContactColumn contact={contact} />
            <div className="flex flex-row lg:flex-col justify-start items-start">
              <LinkSection section={services} className="w-full lg:mt-8" />
              <LinkSection section={expertise} className="w-full" />
            </div>
          </div>
        )}
        <div className="footer footer-center text-sm py-4 text-gray-400">
          <aside>
            <p>Copyright © 2012 - {new Date().getFullYear()} - All right reserved by Flyte Solutions Ltd.</p>
          </aside>
        </div>
      </div>
    </footer>
  );
}
