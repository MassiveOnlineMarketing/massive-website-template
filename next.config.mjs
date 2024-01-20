/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack" }],
    });

    return config;
  },

  env: {
    G_TAG: process.env.G_TAG,
  },
};

export default nextConfig;
