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
  output: "standalone", // PM2 실행 시 필요
  experimental: {
    serverActions: {}, // 필요한 경우 유지, 아니면 제거 가능
  },
};
module.exports = nextConfig;
