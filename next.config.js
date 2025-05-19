
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Using the App Router (no longer experimental in Next.js 13+)
  experimental: {
    appDir: true,
  },
  // Add webpack configuration to handle process polyfill
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure process polyfill is included in client builds
      config.resolve.fallback = {
        ...config.resolve.fallback,
        process: require.resolve('process/browser'),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
