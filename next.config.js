/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
