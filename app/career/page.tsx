import CareerHero from "@/components/career/CareerHero";
import TrustedBrands from "@/components/TrustedBrands";
import WorkCulture from "@/components/career/WorkCulture";
import HiringProcess from "@/components/career/HiringProcess";
import CareerOpportunities from "@/components/career/CareerOpportunities";
import { getCareers } from "@/lib/api";

export const metadata = {
  title: "Career | Flyte Solutions",
  description:
    "Discover how we empower careers to reach new heights. Explore exciting career opportunities and join the Flyte Solutions team.",
  alternates: { canonical: "/career" },
};

export default async function CareerPage() {
  const jobs = await getCareers();

  return (
    <div>
      <CareerHero />
      <TrustedBrands />
      <WorkCulture />
      <HiringProcess />
      <CareerOpportunities jobs={jobs} />
    </div>
  );
}
