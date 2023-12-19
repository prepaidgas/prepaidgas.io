/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  distDir: "docs",
  assetPrefix: "/docs/",
};

module.exports = nextConfig;
