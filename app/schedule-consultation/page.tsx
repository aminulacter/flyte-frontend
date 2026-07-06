import Script from "next/script";

export const metadata = {
  title: "Schedule a Consultation | Flyte Solutions Ltd.",
  description:
    "Book a free consultation with Flyte Solutions to discuss your project requirements and next steps.",
  alternates: { canonical: "/schedule-consultation" },
};

export default function ScheduleConsultationPage() {
  return (
    <div className="lg:mt-20">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/saiful-flytesolutions/consultancy?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
