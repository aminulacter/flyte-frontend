"use client";

import { useState } from "react";

/**
 * Product detail page body, rebuilt from the original bundle. Data comes from
 * `GET /products/{slug}` (fetched at build time). Client component because of
 * the interactive image gallery and the "Watch Full Demo" video modal.
 */

const CHECK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" viewBox="0 0 25 25" fill="none">
    <path
      d="M12.3333 21.373C17.3038 21.373 21.3333 17.3436 21.3333 12.373C21.3333 7.40248 17.3038 3.37305 12.3333 3.37305C7.36269 3.37305 3.33325 7.40248 3.33325 12.373C3.33325 17.3436 7.36269 21.373 12.3333 21.373Z"
      stroke="black"
      strokeWidth="2"
    />
    <path d="M8.33325 12.373L11.3333 15.373L16.3333 9.37305" stroke="black" strokeWidth="2" />
  </svg>
);

function liItems(html = "") {
  return (html.match(/<li>(.*?)<\/li>/g) || []).map((s) => s.replace(/<\/?li>/g, "").trim());
}

function toEmbed(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.substring(1)}`;
    }
    return url;
  } catch {
    return url;
  }
}

function Header({ product }) {
  return (
    <div className="container pt-5 lg:pt-40 mb-3 space-y-2 md:space-y-4">
      <div className="flex flex-wrap gap-2 md:gap-5">
        {product?.tag?.map((t, i) => (
          <span key={i} className="px-3 py-1.5 bg-[#5856d6] rounded-md text-white text-sm font-medium">
            {t}
          </span>
        ))}
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-[#181a2a]">{product?.title}</h1>
      <p className="text-[#696a75] text-xs">{product?.slogan}</p>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Version:</span> {product?.version}
        </p>
        <div className="w-5 h-px bg-[#696a75]" />
        <time dateTime={product?.release_date} className="text-xs text-gray-600">
          <span className="text-[#696a75] font-semibold">Released:</span> {product?.release_date}
        </time>
      </div>
    </div>
  );
}

function Gallery({ images = [] }) {
  const [items, setItems] = useState(images);
  const active = items.find((i) => i.status === "active") || items[0];

  return (
    <div>
      {active ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="w-full h-auto lg:h-[462px] rounded-xl object-cover"
          src={active.url}
          alt={`Image-${active.id}`}
        />
      ) : null}
      <div className="grid grid-cols-3 gap-2.5 mt-2.5">
        {items
          .filter((i) => i.id !== active?.id)
          .map((img) => (
            <div
              key={img.id}
              onClick={() =>
                setItems((prev) =>
                  prev.map((i) => ({ ...i, status: i.id === img.id ? "active" : "inactive" }))
                )
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-16 sm:h-20 md:h-[110px] rounded-xl border border-[#979797] cursor-pointer"
                src={img.url}
                alt={`Image-${img.id}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

function Overview({ title, technology = [], integrations = [], video, image_one }) {
  const [open, setOpen] = useState(false);
  const hasVideo = (() => {
    try {
      new URL(video);
      return true;
    } catch {
      return false;
    }
  })();

  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Technical Specifications</h2>
        <div className="p-2 md:p-5 bg-[#f9f9f9] shadow-[0px_0px_10px_10px_rgba(227,227,227,0.25)] grid grid-cols-2 sm:grid-cols-3 items-center gap-5">
          <h4 className="col-span-1 text-[#181a2a]/80 text-xs md:text-base">Technology Stack</h4>
          <span className="col-span-1 md:col-span-2 flex gap-2 sm:gap-5">
            {technology?.map((t, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} className="w-8 md:w-10 h-6 md:h-10" src={t?.logo} alt={t?.name} />
            ))}
          </span>
        </div>
        <div className="p-2 md:p-5 bg-[#f9f9f9] shadow-[0px_0px_10px_10px_rgba(227,227,227,0.25)] grid grid-cols-2 sm:grid-cols-3 items-center gap-5">
          <h4 className="col-span-1 text-[#181a2a]/80 text-xs md:text-base">Integrations Available</h4>
          <span className="col-span-1 md:col-span-2 flex gap-2 sm:gap-5">
            {integrations?.map((t, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} className="w-8 md:w-10 h-6 md:h-10" src={t?.logo} alt={t?.name} />
            ))}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 md:mb-3 mt-4 md:mt-5">See It in Action</h2>
          <div className="bg-black/30 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mix-blend-multiply w-full h-[200px] lg:h-[295.14px]" src={image_one} alt={title} />
            <button
              onClick={() => hasVideo && setOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="border flex items-center justify-center gap-2.5 relative group">
                <div className="absolute inset-0 w-12 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                <span className="px-4 py-2 bg-white z-10">
                  <i className="fa-solid fa-play text-3xl" />
                </span>
                <span className="px-2 z-10 text-white group-hover:text-black font-bold text-nowrap">
                  Watch Full Demo
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 bg-black/60 z-[100] px-5" onClick={() => setOpen(false)}>
          <div className="flex justify-center items-center h-full">
            <div
              className="w-[800px] h-[400px] border bg-black/60 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={toEmbed(video)}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setOpen(false)}
                className="text-red-700 hover:text-white absolute -top-4 -right-4 bg-white hover:bg-red-700 rounded-full w-8 h-8 flex justify-center items-center"
              >
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function OverviewBlock({ product }) {
  const features = liItems(product?.description);
  return (
    <div className="container mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <Gallery images={product?.images || []} />
        <Overview
          title={product?.title}
          technology={product?.technology}
          integrations={product?.integrations}
          video={product?.video}
          image_one={product?.image_one}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col justify-between gap-5">
          <p
            className="text-[#3b3c4a] text-base lg:text-xl"
            dangerouslySetInnerHTML={{ __html: product?.short_description }}
          />
          <div>
            <h4 className="text-[#181a2a] text-xl lg:text-2xl font-semibold">Key Features</h4>
            <ul className="text-gray-600 text-sm space-y-2 mt-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  {CHECK_ICON}
                  <span dangerouslySetInnerHTML={{ __html: f }} />
                </li>
              ))}
            </ul>
          </div>
          <a
            href={product?.demo_link}
            target="_blank"
            rel="noreferrer"
            className="px-3 lg:px-6 py-2 lg:py-3 bg-black hover:bg-[#3c3bb8] transition duration-500 text-white text-base font-bold capitalize w-fit"
          >
            Try Demo <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2" />
          </a>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full max-h-[400px] object-cover"
            src={product?.work_flow_image}
            alt={`${product?.title} Feature Image`}
          />
        </div>
      </div>
    </div>
  );
}

function Sections({ product }) {
  if (!product?.sections?.length) return null;
  return (
    <div className="container">
      {product.sections.map((s, i) => {
        const features = liItems(s?.section?.description);
        return (
          <div
            key={i}
            className={`lg:px-16 py-4 lg:py-8 flex flex-col lg:flex-row gap-5 lg:gap-10 ${
              i % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-1/2 space-y-4 lg:space-y-8 max-h-[320px] overflow-hidden">
              <h2 className="text-gray-800 text-xl lg:text-3xl font-semibold">{s?.section?.title}</h2>
              <p className="text-gray-600 text-sm">{s?.section?.short_description}</p>
              <ul className="text-gray-600 text-sm space-y-2">
                {features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    {CHECK_ICON}
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full lg:h-[320px] object-cover rounded-xl"
                src={s?.section?.image}
                alt={s?.section?.title}
              />
            </div>
          </div>
        );
      })}
      <a
        href={product?.demo_link}
        target="_blank"
        rel="noreferrer"
        className="px-3 lg:px-6 py-2 lg:py-3 bg-black hover:bg-[#3c3bb8] transition duration-500 text-white text-base font-bold capitalize w-fit mx-auto block my-8"
      >
        Try Demo <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2" />
      </a>
    </div>
  );
}

function Productivity({ product }) {
  const { productivity_title, productivity_short_title, productivity_image, productivity_description, productivity_link } =
    product || {};
  if (!productivity_title && !productivity_image) return null;
  return (
    <div className="container lg:px-32 py-4 lg:py-8 space-y-6">
      <div className="block w-fit mx-auto text-center mb-3 lg:mb-6">
        <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans']">{productivity_title}</p>
        <h2 className="text-xl lg:text-3xl font-semibold">{productivity_short_title}</h2>
      </div>
      <div className="w-full mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full lg:h-[400px] object-cover"
          src={productivity_image}
          alt={productivity_title}
          draggable="false"
        />
      </div>
      <p className="lg:w-[600px] lg:mx-auto lg:text-center text-[#353d4f]">{productivity_description}</p>
      {productivity_link ? (
        <a
          href={productivity_link}
          target="_blank"
          rel="noreferrer"
          className="px-3 lg:px-6 py-2 lg:py-3 bg-[#5856d6] rounded-[99px] text-white text-base font-bold capitalize w-fit mx-auto block my-8"
        >
          See Integrations <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2" />
        </a>
      ) : null}
    </div>
  );
}

export default function ProductDetail({ product }) {
  if (!product) {
    return <p className="text-center text-gray-600">Product not found.</p>;
  }
  return (
    <div>
      <Header product={product} />
      <OverviewBlock product={product} />
      <Sections product={product} />
      <Productivity product={product} />
    </div>
  );
}
