/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["three"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["cn", "en"],
    defaultLocale: "cn",
    localeDetection: false,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = withTM();
module.exports = nextConfig;
