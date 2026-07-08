import Link from "next/link";
import type { Product } from "@/lib/types";

function HomeProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="shrink-0 w-[280px] lg:w-[320px]">
      <div className="px-4 py-5 h-[380px] relative flex justify-center items-center bg-white rounded-md overflow-hidden group border border-[#DEE1E6]">
        <div className="relative flex-col justify-start items-start gap-3 inline-flex z-10 w-full">
          <div className="overflow-hidden rounded-md w-full h-[160px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="px-1.5 py-2 border-b border-[#d6d6d6] w-full">
            <div className="text-[#bc986b] text-sm font-medium">{product.title}</div>
          </div>
          <p className="text-[#373737] text-xs font-light line-clamp-2">{product.short_description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomeProducts({ products = [] }: { products?: Product[] }) {
  const items = products.filter((p) => p?.slug).slice(0, 6);

  return (
    <div className="bg-white py-10">
      <div className="container -mt-5">
        <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Our Products</p>
        <h2 className="lg:w-1/2 text-[#15161B] text-2xl lg:text-4xl px-0 font-semibold text-start lg:leading-[50px]">
          Bringing Your Ideas To Life With a Diverse Range Of Innovative Products.
        </h2>
        <div className="mt-8 flex flex-row gap-4 overflow-x-auto pb-4">
          {items.map((product) => (
            <HomeProductCard key={product.id || product.slug} product={product} />
          ))}
        </div>
        {items.length > 0 && (
          <div className="flex flex-col items-center justify-center lg:flex-row gap-2 mt-8">
            <Link
              className="w-fit px-8 py-3 border border-btnColor hover:border-pink-500 bg-btnColor hover:bg-pink-500 text-white rounded-md"
              href="/schedule-consultation"
            >
              See All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
