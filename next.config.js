/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     appDir: 'src/app',
//     serverActions: true,
//     serverComponents: true,
//   },
// }

const nextConfig = {
  reactStrictMode: true,
  // output: "standalone", // PM2 실행 시 필요
};

module.exports = nextConfig;
