import AboutUs from "@/components/AboutUs";
import { getAboutUs } from "@/lib/api";

export const metadata = {
  title: "About Us | Flyte Solutions Ltd.",
  description:
    "Empowering businesses with innovative tech solutions and expert teams. Learn about Flyte Solutions' mission and vision.",
  alternates: { canonical: "/company/about-us" },
};

export default async function AboutUsPage() {
  const about = await getAboutUs();
  return <AboutUs about={about} />;
}
