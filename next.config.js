// // next.config.js
const withImages = require("next-images");
// module.exports = withImages();
module.exports = withImages({
  future: {
    webpack5: true
  },
  images: {
    disableStaticImages: true
  },
  // pageExtensions: ['ts, js, tsx'],
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };
    return paths; //<--this was missing previously
  }
});

// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// };
