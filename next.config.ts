/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARNING !!
    // This flag dangerously allows production builds to successfully complete
    // even if your project has type errors. Use with caution.
    // !! WARNING !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARNING !!
    // This flag dangerously allows production builds to successfully complete
    // even if your project has ESLint errors. Use with caution.
    // !! WARNING !!
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;