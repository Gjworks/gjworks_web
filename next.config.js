/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: 'src/app',
    serverActions: true,
    serverComponents: true,
  },
}

module.exports = nextConfig
