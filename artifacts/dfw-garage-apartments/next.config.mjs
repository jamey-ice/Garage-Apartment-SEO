import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const basePath = (process.env.BASE_PATH || '').replace(/\/$/, '');

const allowedDevOrigins = process.env.REPLIT_DEV_DOMAIN
  ? [`https://${process.env.REPLIT_DEV_DOMAIN}`, `*.picard.replit.dev`, `*.replit.dev`]
  : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  reactStrictMode: true,
  allowedDevOrigins,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.resolve.alias['@assets'] = path.resolve(__dirname, '..', '..', 'attached_assets');
    return config;
  },
};

export default nextConfig;
