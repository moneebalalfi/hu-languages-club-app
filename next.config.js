// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: prod ? false : true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "dummyimage.com",
      "images.unsplash.com",
    ],
  },
});
