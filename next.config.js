/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pg'],
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  // Ensure public directory is properly handled
  assetPrefix: '',
  trailingSlash: false,
  // Output configuration for Vercel
  output: 'standalone',
  // Custom webpack config to ensure public assets are copied
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig