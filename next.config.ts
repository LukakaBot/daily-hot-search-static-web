import type { NextConfig } from "next";

const env = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  basePath: env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
