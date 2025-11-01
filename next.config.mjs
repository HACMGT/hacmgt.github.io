/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Leave empty if using custom domain
  trailingSlash: true,
};

export default nextConfig;
