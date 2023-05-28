const nextSeo = require("next-seo");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  seo: {
    title: "Electric Controller",
    description:
      "Welcome to our site dedicated to electrical wiring, electricity, construction, electrical safety, კობა ძია მათეშა, electrical engineering, electrical maintenance, and electrical work. We provide expert insights, tips, and resources for all your electrical needs. From inspection and circuit breaker maintenance to fuse replacements and light fixture installations, our team of professionals ensures top-notch service. We also offer key programming, key copying, blade cutting, and lock-related services, including making new keys, resolving lost key situations, and locksmith services for locked cars. Explore our site for comprehensive information and solutions in the world of electrical and locksmith services.",
    keywords: [
      "კობა ძია მათეშა",
      "Electrical Wiring",
      "Electricity",
      "Construction",
      "Electrical Safety",
      "Electrical Engineering",
      "Electrical Maintenance",
      "Electrical Work",
      "Inspection",
      "Circuit Breaker",
      "fuse",
    ],
  },
};

module.exports = nextConfig;
