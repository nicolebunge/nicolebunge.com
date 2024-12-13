import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/loaders/cloudinary.ts',
  },
  output: 'export',
};

export default nextConfig;
