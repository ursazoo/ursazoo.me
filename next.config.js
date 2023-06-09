const { join } = require("path");

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  swcMinify: true,
};

module.exports = nextConfig;
