import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow other devices on the local network to access the dev server
  allowedDevOrigins: [
    '192.168.1.*',
    '192.168.2.*',   // Covers all devices on your WiFi subnet
  ],
};

export default nextConfig;
