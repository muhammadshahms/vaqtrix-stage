/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["img.icons8.com"],
  },
  reactStrictMode: false,
};

export default nextConfig;