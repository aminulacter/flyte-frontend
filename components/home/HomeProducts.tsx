"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import type { Product } from "@/lib/types";

function HomeProductItem({ product }: { product: Product }) {
  const title = product.title || product.name || "";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="flex flex-col justify-center items-center gap-3 mx-4 group"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-[200px] h-[150px] lg:w-[260px] lg:h-[190px] rounded-[20px] object-cover group-hover:scale-110 transition-all duration-500"
        src={product.image}
        alt={title}
        loading="lazy"
        decoding="async"
      />
      <p className="text-center text-black text-sm font-bold">{title}</p>
    </Link>
  );
}

export default function HomeProducts({ products = [] }: { products?: Product[] }) {
  const items = products.filter((p) => p?.slug);

  return (
    <div className="bg-white py-10">
      <div className="container -mt-5">
        <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Our Products</p>
        <h2 className="lg:w-1/2 text-[#15161B] text-2xl lg:text-4xl px-0 font-semibold text-start lg:leading-[50px]">
          Bringing Your Ideas To Life With a Diverse Range Of Innovative Products.
        </h2>
        {items.length > 0 && (
          <div className="mt-8 flex flex-row">
            <Marquee
              pauseOnHover
              pauseOnClick
              gradient
              gradientColor="white"
              gradientWidth={150}
              speed={50}
            >
              {items.map((product) => (
                <HomeProductItem key={product.id || product.slug} product={product} />
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </div>
  );
}
