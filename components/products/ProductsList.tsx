import Link from "next/link";
import type { Product } from "@/lib/types";

/** CTA card interspersed into the product grid (original inserts it at index 1). */
function CtaCard() {
  return (
    <div className="w-[400px] h-[430px] px-8 py-10 bg-[#31323c] rounded-xl flex-col justify-between items-start inline-flex">
      <div className="self-stretch text-[#f7f7f7] text-[32px] font-semibold font-['Noto_Sans']">
        Explore Custom Product Solutions
      </div>
      <div className="w-20 h-[3px] relative bg-[#dda380]" />
      <div className="self-stretch text-[#d9d9d9] text-base font-normal font-['Noto_Sans'] leading-[30px]">
        Have specific needs? Contact us, and we will provide solutions designed just for you.
      </div>
      <Link
        href="/contact-us"
        className="self-stretch px-8 py-3 border border-white hover:bg-white group transition duration-500 justify-center items-start flex"
      >
        <div className="text-white group-hover:text-black transition duration-500 text-sm font-semibold font-['Noto_Sans']">
          Contact Us
        </div>
      </Link>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="px-6 lg:px-12 py-5 w-full h-[430px] relative flex justify-center items-center bg-none rounded-md overflow-hidden group">
        <div className="absolute inset-0 bg-[#fff] top-[150px] transition-all duration-500 ease-in-out group-hover:top-0 z-0" />
        <div className="relative flex-col justify-start items-start gap-4 inline-flex z-10">
          <div className="overflow-hidden rounded-t-md w-full lg:w-[360px] h-[200px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              src={product?.image}
              alt={product?.title}
            />
          </div>
          <div className="self-stretch px-1.5 py-2.5 border-b border-[#d6d6d6]">
            <div className="text-[#bc986b] h-[22px] text-sm font-medium">{product?.title}</div>
          </div>
          <div className="h-7 mt-2 overflow-hidden line-clamp-1 items-start flex-wrap gap-2 inline-flex">
            {product?.tag?.map((t, i) => (
              <div
                key={i}
                className="px-2 py-1.5 bg-[#d0d0d0]/20 rounded-[3.18px] backdrop-blur-[9.55px] flex-col justify-center items-center gap-2 inline-flex"
              >
                <div className="text-[#373737] text-[10px]">{t}</div>
              </div>
            ))}
          </div>
          <div className="px-1.5 text-[#373737] text-xs font-light h-8 overflow-hidden line-clamp-2 mb-2">
            {product?.short_description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsList({ products = [] }: { products?: Product[] }) {
  const items = products.filter((p) => p && p.slug);
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 content-center mt-10">
      {items.map((product, i) => (
        <div key={product.id || i} className="contents">
          <ProductCard product={product} />
          {i === 1 && <CtaCard />}
        </div>
      ))}
      {items.length < 3 && <CtaCard />}
    </div>
  );
}
