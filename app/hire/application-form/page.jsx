import HireApplicationForm from "@/components/hire/HireApplicationForm";

export const metadata = {
  title: "Hire Application Form | Flyte Solutions Ltd.",
  description:
    "Submit your hire request and build your dream development team with Flyte Solutions.",
  alternates: { canonical: "/hire/application-form" },
};

export default function HireApplicationFormPage() {
  return <HireApplicationForm />;
}
