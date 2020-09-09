const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withImages = require('next-images');

const nextConfig = {
  // any configs you need
};

module.exports = withImages({});
