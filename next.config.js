// // next.config.js
const withImages = require("next-images");
// module.exports = withImages();
module.exports = withImages({
  future: {
    webpack5: true
  },
  images: {
    disableStaticImages: true
  }
});

// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// };
