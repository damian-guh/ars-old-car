/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.datocms-assets.com',
      'localhost',
      'arsoldcar.pl',
      'dev.arsoldcar.pl',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{ cleanupIDs: false }],
              ref: true,
            },
          },
        },
      ],
    });

    return config;
  },
};
