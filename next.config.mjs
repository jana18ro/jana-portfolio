/** @type {import('next').NextConfig} */
// Static export for GitHub Pages.
// If the repo is named jana18ro.github.io, leave NEXT_PUBLIC_BASE_PATH unset.
// If it is any other name (e.g. "portfolio"), the workflow sets it to "/portfolio".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
