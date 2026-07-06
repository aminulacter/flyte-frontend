/** @type {import('next').NextConfig} */
const nextConfig = {
  // The original site was a fully static export.
  output: "export",
  images: {
    // Required for `output: export` — the site uses plain <img>/next-image with
    // remote and local assets that are not run through the Next image optimizer.
    unoptimized: true,
  },
  // Emit `route.html` files (matches the recovered build output structure).
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
