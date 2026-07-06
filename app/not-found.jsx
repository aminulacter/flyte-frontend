import RecoveredHtml from "@/components/RecoveredHtml";
import content from "./not-found.content.js";

export const metadata = { title: "Flyte Solutions | Hire Remote Software Development Team." };

export default function NotFound() {
  return <RecoveredHtml html={content} />;
}
