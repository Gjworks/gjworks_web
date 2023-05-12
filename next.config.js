/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
