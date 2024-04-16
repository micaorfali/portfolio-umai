/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bulma.io', 'firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
