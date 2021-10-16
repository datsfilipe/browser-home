/** @type {import('next').NextConfig} */

module.exports = {
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env : {
    FIREBASE_API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    SITE_ADDRESS: process.env.SITE,
  }
}
