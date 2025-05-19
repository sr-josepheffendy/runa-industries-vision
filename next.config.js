
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the App Router
  experimental: {
    appDir: true
  },
};

module.exports = nextConfig;
