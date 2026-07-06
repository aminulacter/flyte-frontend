import HireLandingPage from "@/components/hire/HireLandingPage";

export const metadata = {
  title: "Hire | Flyte Solutions Ltd.",
  description:
    "Looking to join a forward-thinking software company? Flyte Solutions Ltd. is hiring talented professionals passionate about web, mobile, and AI technologies. Apply now and grow your career with us!",
  alternates: { canonical: "/hire" },
};

export default function HirePage() {
  return <HireLandingPage />;
}
