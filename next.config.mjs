/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbo: {
      resolveExtensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
  },
};

export default nextConfig;
