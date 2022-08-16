/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "cn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;