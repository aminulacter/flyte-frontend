import NoCareersMessage from "@/components/career/NoCareersMessage";

export const metadata = {
  title: "Job Application | Flyte Solutions Ltd.",
  description: "No careers are currently available at Flyte Solutions Ltd.",
  alternates: {
    canonical: "/career/not-found/job-application",
  },
};

export default function Page() {
  return <NoCareersMessage />;
}
