import PageHero from "@/components/PageHero";
import ProductsList from "@/components/products/ProductsList";
import ContactSection from "@/components/ContactSection";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Products | Flyte Solutions Ltd.",
  description:
    "Explore Flyte Solutions' range of products designed to enhance your operations, boost productivity, and help you achieve your goals effortlessly.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const list = await getProducts();
  const products = list?.data || [];

  return (
    <div>
      <PageHero
        eyebrow="Explore Our Products, Designed for Your Success!"
        title="Discover Innovative Solutions Built for Your Business"
        description="Explore our range of products designed to enhance your operations, boost productivity, and help you achieve your goals effortlessly."
      />

      <div>
        <div className="flex-col gap-2 w-full flex justify-center items-center my-8">
          <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Our Products</p>
          <h1 className="lg:w-full text-[#15161B] text-lg lg:text-3xl px-0 font-semibold text-start lg:leading-[50px]">
            Smart Solutions That Simplify Your Operations
          </h1>
        </div>
        <div className="container">
          <ProductsList products={products} />
        </div>
      </div>

      <div className="container py-6 mx-auto max-w-5xl">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:leading-[50px]">
          Real stories of success and partnership
        </h2>
        <p className="lg:text-center text-neutral-500 text-sm font-normal mt-3 mb-5 lg:mb-10">
          Discover how our solutions have empowered businesses to grow, adapt, and thrive
        </p>
        <iframe
          src="https://widget.clutch.co/widgets/get/4?ref_domain=yourdomain.com&uid=122766&reviews=370785,370566,370488,370459,369723"
          title="Clutch Reviews"
          className="w-full h-[400px] border-0"
        />
      </div>

      <ContactSection />
    </div>
  );
}
