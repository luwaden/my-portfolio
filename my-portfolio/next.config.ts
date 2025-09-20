import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'upload.wikimedia.org', 
      'lh3.googleusercontent.com', 
      'platform-lookaside.fbsbx.com', 
    ],
  },
};

export default nextConfig;
