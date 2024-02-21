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

module.exports = {
  async rewrites() {
    return [
      // Redirige vers /fr par défaut
      {
        source: "/",
        destination: "/fr",
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
