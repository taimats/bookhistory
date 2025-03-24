/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "books.google.com",
        port: "",
        pathname: "/books/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
};

export default nextConfig;