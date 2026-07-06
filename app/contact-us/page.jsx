import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | Flyte Solutions Ltd.",
  description:
    "Get in touch with Flyte Solutions. Tell us about your project and a solution advisor will get back to you within 3 business days.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <div className="lg:mt-24">
      <ContactSection />
    </div>
  );
}
