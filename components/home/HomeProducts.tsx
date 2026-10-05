"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import type { Product } from "@/lib/types";

function HomeProductItem({ product }: { product: Product }) {
  const title = product.title || product.name || "";

  return (
    <Link href={`/products/${product.slug}`} className="home-product-card">
      <div className="home-product-card__image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={title} loading="lazy" decoding="async" />
      </div>
      <p className="home-product-card__title">{title}</p>
    </Link>
  );
}

export default function HomeProducts({ products = [] }: { products?: Product[] }) {
  const items = products.filter((p) => p?.slug);

  return (
    <section className="home-products">
      <div className="container">
        <div className="home-products__header">
          <p className="home-eyebrow">Our Products</p>
          <h2 className="home-heading home-products__heading">
            Bringing your ideas to life with a diverse range of innovative products.
          </h2>
        </div>
      </div>
      {items.length > 0 ? (
        <div className="home-products__track">
          <Marquee pauseOnHover pauseOnClick gradient={false} speed={50}>
            {items.map((product) => (
              <HomeProductItem key={product.id || product.slug} product={product} />
            ))}
          </Marquee>
        </div>
      ) : null}
      <div className="home-products__cta">
        <Link className="home-btn home-btn--sm" href="/products">
          See All Products
        </Link>
      </div>
    </section>
  );
}
