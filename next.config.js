/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
    LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID,
    NEXT_PUBLIC_STRIPE_ELITE_PRICE_ID: process.env.NEXT_PUBLIC_STRIPE_ELITE_PRICE_ID,
    RIOT_API_KEY: process.env.RIOT_API_KEY,
  },
  images: {
    domains: ['e2e-dev-bucket-eu-west-2.s3.amazonaws.com']
  }
};

module.exports = nextConfig;