
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Using the newer App Router by default
  experimental: {
    appDir: true
  },
};

module.exports = nextConfig;
