/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['remark', 'gray-matter'],
  },
};

module.exports = nextConfig;
