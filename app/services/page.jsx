import ServicesLandingPage from "@/components/services/ServicesLandingPage";

export const metadata = {
  title: "Our Services | Flyte Solutions Ltd.",
  description:
    "Explore a wide range of software development services at Flyte Solutions Ltd., including web development, mobile apps, DevOps, AI/ML, and more. We turn ideas into scalable digital solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesLandingPage />;
}
