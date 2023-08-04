/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  future: {
    webpack5: true, // Enable Webpack 5 for Next.js 11+ (optional but recommended)
  },
  experimental: {
    serverComponents: true,
    serverComponentsMiddleware: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'raw-loader',
    });
    return config;
  },
}
