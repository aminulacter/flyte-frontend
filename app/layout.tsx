import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientInit from "@/components/ClientInit";
import "./global.css";

const SITE_URL = "https://flytesolutions.com";
const GTM_ID = "GTM-NJZ2XR6F";
const APOLLO_APP_ID = "67b40d9d9da67b0015eb068e";
const DRIFT_ID = "i9ayibd8bhih";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Flyte Solutions | Hire Remote Software Development Team.",
  description:
    "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
  authors: [{ name: "Flyte Solutions Ltd.", url: "https://www.flytesolutions.com" }],
  keywords: [
    "Flyte Solutions",
    "Web Development",
    "AI Solutions",
    "Mobile App",
    "Software Company",
    "Bangladesh IT",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Flyte Solutions | Hire Remote Software Development Team.",
    description:
      "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
    url: SITE_URL,
    siteName: "Flyte Solutions Ltd.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd. - Empowering Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyte Solutions | Hire Remote Software Development Team.",
    description:
      "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
    images: ["/og.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Compiled stylesheet bundles recovered from the original static export.
 * The original Tailwind/DaisyUI/shadcn source config was lost, so these
 * pre-compiled bundles are served as-is to guarantee visual fidelity.
 * Order matches the original document <head>.
 */
const STYLES = [
  "/assets/css/2473c16c0c2f6b5f.css", // Geist / Geist Mono @font-face
  "/assets/css/d997f16989307ef4.css", // Tailwind + DaisyUI + shadcn tokens + custom nav
  "/assets/css/ac6e842a546d7dff.css", // AOS
  "/assets/css/947b6a80bcdd8921.css", // react-phone-number-input
  "/assets/css/4de333da6e7fcd79.css", // Swiper
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
];

import type { LayoutProps } from "@/lib/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {STYLES.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable">
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,l){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window,'dataLayer');`}
        </Script>
        <Script
          id="gtm-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />

        <ClientInit />

        {/* Apollo.io website visitor tracker */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo() {
              var n = Math.random().toString(36).substring(7),
                  o = document.createElement("script");
              o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
              o.async = true;
              o.defer = true;
              o.onload = function () {
                window.trackingFunctions.onLoad({ appId: "${APOLLO_APP_ID}" });
              };
              document.head.appendChild(o);
            }
            initApollo();
          `}
        </Script>

        {/* Drift chat widget */}
        <Script id="drift-widget" strategy="afterInteractive">
          {`
            "use strict";
            !function() {
              var t = window.driftt = window.drift = window.driftt || [];
              if (!t.init) {
                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = true;
                t.methods = ["identify","config","track","reset","debug","show","ping","page","hide","off","on"];
                t.factory = function(e) {
                  return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                  };
                };
                t.methods.forEach(function(e) { t[e] = t.factory(e); });
                t.load = function(t) {
                  var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                  o.type = "text/javascript";
                  o.async = true;
                  o.crossorigin = "anonymous";
                  o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                  var i = document.getElementsByTagName("script")[0];
                  i.parentNode.insertBefore(o, i);
                };
              }
            }();
            drift.SNIPPET_VERSION = '0.3.1';
            drift.load('${DRIFT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}