const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");

module.exports = withPlugins([
  withImages({}),
  withReactSvg({
    future: {
      webpack5: true,
    },
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, options) {
      return config;
    },
  }),
]);
