/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: "http://localhost:3000",
    // BASE_URL: "https://smoke-time.herokuapp.com/",
  },
};

module.exports = nextConfig;
