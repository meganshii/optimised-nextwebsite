// Import the bundle analyzer using the ES module syntax
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.pinimg.com',
      'www.youtube.com',
      'in.pinterest.com',
      'restcountries.com',
      'assets.nesscoindustries.com',
      'www.nesscoindia.com',
      'res.cloudinary.com',
    ],
  },
  swcMinify: true,
  experimental: {
    optimizePackageImports: [
      '@mantine/core',     // Add Mantine components
      '@mantine/hooks',    // Add Mantine hooks
      'lodash',            // Add Lodash for tree shaking
    ],  // List any additional packages you'd like to optimize
  },
  
};

// Initialize the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',

  
});

// Export the configuration with the bundle analyzer applied
export default bundleAnalyzer(nextConfig);
