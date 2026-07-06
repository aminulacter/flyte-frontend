import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import ContactSection from "@/components/ContactSection";
import { getProducts, getProduct } from "@/lib/api";

export async function generateStaticParams() {
  const list = await getProducts();
  const items = list?.data || [];
  return items.filter((p) => p?.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getProduct(slug);
  const product = data?.data || data;
  if (!product) return { title: "Product | Flyte Solutions Ltd." };
  return {
    title: product.meta_title || `${product.title} | Flyte Solutions Ltd.`,
    description: product.meta_description || product.short_description,
    keywords: product.meta_keyword,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const data = await getProduct(slug);
  const product = data?.data || data;
  if (!product) notFound();

  return (
    <div>
      <ProductDetail product={product} />
      <ContactSection />
    </div>
  );
}
