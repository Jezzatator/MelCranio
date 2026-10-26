// const createNextIntlPlugin = require("next-intl/plugin");

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = withNextIntl(nextConfig);

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
// };

// module.exports = nextConfig;

// next.config.js

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

module.exports = {
  reactStrictMode: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async rewrites() {
    return [
      // Redirige vers /en par défaut
      {
        source: "/",
        destination: "/en",
      },
      // Redirige vers les routes i18n
      {
        source: "/:locale/fr",
        destination: "/fr",
      },
      {
        source: "/:locale/en",
        destination: "/en",
      },
      {
        source: "/:locale/es",
        destination: "/es",
      },
      {
        source: "/:locale/de",
        destination: "/de",
      },
      {
        source: "/:locale/ca",
        destination: "/ca",
      },
    ];
  },
};
