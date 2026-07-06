import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import ContactSection from "@/components/ContactSection";
import { getProducts, getProduct } from "@/lib/api";

export async function generateStaticParams() {
  const list = await getProducts();
  const items = list?.data || [];
  return items.filter((p) => p?.slug).map((p) => ({ slug: p.slug }));
}

import type { SlugPageProps } from "@/lib/types";
import { unwrapProduct } from "@/lib/types";

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const data = await getProduct(slug);
  const product = unwrapProduct(data);
  if (!product) return { title: "Product | Flyte Solutions Ltd." };
  return {
    title: product.meta_title || `${product.title} | Flyte Solutions Ltd.`,
    description: product.meta_description || product.short_description,
    keywords: product.meta_keyword,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const data = await getProduct(slug);
  const product = unwrapProduct(data);
  if (!product) notFound();

  return (
    <div>
      <ProductDetail product={product} />
      <ContactSection />
    </div>
  );
}
