/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "drive.google.com" },
        { protocol: "https", hostname: "img.youtube.com"},
        { protocol: "http", hostname: "sh.liveblog365.com"}
      ],
    },
  };
  
  export default nextConfig;