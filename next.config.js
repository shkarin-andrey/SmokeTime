/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    // BASE_URL: "http://localhost:3000/",
    // BASE_URL: "https://smoke-time.herokuapp.com/",
    BASE_URL: "https://smoke-time.vercel.app/",
    API_SENDGRID_KEY:
      "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",
  },
};

module.exports = nextConfig;
