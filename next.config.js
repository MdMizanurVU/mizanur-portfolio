/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pg'],
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  // Ensure proper asset handling
  assetPrefix: '',
  trailingSlash: false,
  // Custom webpack config to ensure compatibility
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