import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};


export default nextConfig;
