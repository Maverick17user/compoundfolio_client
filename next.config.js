const withImages = require("next-images");
const withMDX = require("@next/mdx");

module.exports = withMDX(withImages({
  future: {
    webpack5: true
  },
  images: {
    disableStaticImages: true
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };
    return paths; //<--this was missing previously
  },
  env: {
    STEPZEN_API_KEY: process.env.STEPZEN_API_KEY,
    STEPZEN_API_URL: process.env.STEPZEN_API_URL,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
}));
