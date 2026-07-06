"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Blog } from "@/lib/types";

const SITE = "https://flytesolutions.com";

function ShareOn({ url }: { url: string }) {
  const links = [
    { icon: "fa-linkedin-in", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { icon: "fa-facebook-f", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { icon: "fa-twitter", href: `https://twitter.com/intent/tweet?url=${url}` },
    { icon: "fa-instagram", href: "https://www.instagram.com/" },
  ];
  return (
    <div className="mb-5 flex justify-center items-center gap-2.5">
      <p className="text-[#696a75] text-xs">Share On</p>
      {links.map((l) => (
        <Link
          key={l.icon}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
        >
          <i className={`fa-brands ${l.icon}`} />
        </Link>
      ))}
    </div>
  );
}

export default function BlogDetail({ blog, slug }: { blog?: Blog; slug: string }) {
  const { blog_section: sections = [], title, image, tag = [], date, view_count, admin } = blog ?? {};
  const [active, setActive] = useState("");
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      sections?.forEach((s) => {
        const el = refs.current[s.blog_section_title];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) setActive(s.blog_section_title);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollTo = (t) => {
    const el = refs.current[t];
    if (el) window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="flex gap-8 mb-8 pt-8">
        <div className="w-full h-fit">
          <div className="mb-4 flex flex-wrap gap-2">
            {tag?.map((t, i) => (
              <p key={i} className="px-3 py-1.5 bg-[#4b6bfb] rounded-md text-white w-fit">
                {t}
              </p>
            ))}
          </div>
          <h1 className="mb-5 text-2xl lg:text-3xl font-semibold text-[#181a2a]">{title}</h1>

          <div className="flex items-center flex-wrap gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={admin?.image ?? admin?.profile} alt="admin image" className="rounded-full w-8 h-8 object-cover border" />
            <h4 className="text-[#696A75] text-xs font-semibold">{admin?.name}</h4>
            <div className="w-5 h-[1px] bg-[#696A75]" />
            <time className="text-[#696A75] text-xs" dateTime={date}>
              {date}
            </time>
            <div className="w-5 h-[1px] bg-[#696A75]" />
            <div className="text-[#696A75] text-xs">
              <i className="mr-1 fa-solid fa-bookmark" /> 5 min read
            </div>
            <div className="w-5 h-[1px] bg-[#696A75]" />
            <div className="text-[#696A75] text-xs">
              <i className="mr-1 fa-solid fa-chart-simple" /> {view_count} views
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="my-3 lg:my-6 rounded-lg w-full object-cover" />

          <div className="blog-content space-y-4 lg:space-y-6">
            {sections?.map((s) => (
              <div
                key={s.id}
                ref={(el) => {
                  refs.current[s.blog_section_title] = el;
                }}
                id={s.blog_section_title.replace(/\s+/g, "-").toLowerCase()}
                className="space-y-1 lg:space-y-3"
              >
                <h2 className="text-[#181a2a] text-xl lg:text-2xl font-semibold">{s.blog_section_title}</h2>
                <div
                  className="text-[#3b3c4a] text-sm lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[400px] hidden lg:block">
          <div className="h-fit mb-5 sticky top-[110px]">
            <h3 className="px-4 mb-4 text-lg font-semibold">Table of Content</h3>
            <ul className="space-y-2">
              {sections?.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.blog_section_title)}
                    className={`block px-4 py-2 bg-[#f7f8fd] border-l-4 transition duration-300 hover:text-[#5856d6] text-left w-full ${
                      active === s.blog_section_title
                        ? "border-[#5856d6] text-[#5856d6]"
                        : "border-[#f7f8fd] text-[#181a2a]/80"
                    }`}
                  >
                    {s.blog_section_title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ShareOn url={`${SITE}/company/news-and-blogs/${slug}`} />
    </div>
  );
}
