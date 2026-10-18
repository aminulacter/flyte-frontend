"use client";

import { useState } from "react";
import type { CaseStudyTestimonial } from "@/lib/types";

function initials(name?: string) {
  return (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function quoteText(value?: string) {
  return (value || "").trim().replace(/^["“]\s*/, "").replace(/\s*["”]$/, "");
}

function Avatar({ src, name }: { src?: string; name?: string }) {
  const [showPhoto, setShowPhoto] = useState(false);
  const letters = initials(name) || "C";

  return (
    <span className="csd-quote__avatar">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className={showPhoto ? "" : "is-hidden"}
          onLoad={(event) => {
            const image = event.currentTarget;
            const ratio = image.naturalWidth / Math.max(image.naturalHeight, 1);
            setShowPhoto(ratio > 0.75 && ratio < 1.35);
          }}
        />
      ) : null}
      <span className={showPhoto ? "csd-quote__avatar-fallback is-hidden" : "csd-quote__avatar-fallback"}>
        {letters}
      </span>
    </span>
  );
}

export default function CaseStudyTestimonials({ quotes = [] }: { quotes: CaseStudyTestimonial[] }) {
  const items = quotes.filter((quote) => quote?.description || quote?.name);
  const [index, setIndex] = useState(0);
  if (!items.length) return null;

  const quote = items[index % items.length];
  const showNav = items.length > 1;
  const step = (direction: number) => {
    setIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <article className="csd-quote__card col-span-2 lg:col-span-1">
      <div className="csd-quote__card-top">
        {quote.company_name ? (
          // eslint-disable-next-line @next/next/no-img-element
          <p className="text-gray-900 font-bold" style={{ fontSize: '26px' }}>{quote.company_name}</p>
        ) : null}

        {showNav ? (
          <div className="csd-quote__nav">
            <button type="button" aria-label="Previous testimonial" onClick={() => step(-1)}>
              ‹
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => step(1)}>
              ›
            </button>
          </div>
        ) : null}
      </div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
        </svg>
      </span>
      {quote.description ? <p className="csd-quote__text">{quoteText(quote.description)}</p> : null}
      <div className="csd-quote__person">
        <Avatar src={quote.image} name={quote.name} />
        <div>
          {quote.name ? <p className="csd-quote__name">{quote.name}</p> : null}
          {quote.designation ? <p className="csd-quote__role">{quote.designation}</p> : null}
        </div>
      </div>
    </article>
  );
}
