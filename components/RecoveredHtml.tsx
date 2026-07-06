import type { RecoveredHtmlProps } from "@/lib/types";

/**
 * Renders page content recovered from the original static export.
 *
 * The original per-page React component source could not be recovered from the
 * production build, so each route's server-rendered markup is injected here
 * verbatim. Styling is provided by the compiled CSS bundles linked in the root
 * layout, so the output is visually faithful to the original site.
 *
 * This is intended as a first recovery stage: individual sections can be
 * progressively extracted into real React components over time.
 */
export default function RecoveredHtml({ html }: RecoveredHtmlProps) {
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
