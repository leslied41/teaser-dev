/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["cn", "en"],
    defaultLocale: "cn",
    localeDetection: false,
  },
};

module.exports = nextConfig;
