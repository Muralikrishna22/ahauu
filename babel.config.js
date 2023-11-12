require("dotenv").config();
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        esmodules: true,
      },
    },
  ],
  "@babel/preset-react",
];
const plugins = [];
if (process.env.ASSET_MODE != 3) {
  plugins.push(
    "@loadable/babel-plugin",
    "@babel/plugin-proposal-class-properties",
    "react-hot-loader/babel",
    [
      "transform-assets",
      {
        extensions: ["svg", "png", "jpeg", "jpg", "webp"],
        name: "client/assets/images/[name].[ext]",
      },
    ]
  );
} else {
  plugins.push(
    "@loadable/babel-plugin",
    "@babel/plugin-proposal-class-properties",
    "react-hot-loader/babel",
    [
      "transform-assets",
      {
        extensions: ["svg", "png", "jpeg", "jpg", "webp"],
        name: process.env.FRONTEND_ASSETS_URL + "images/[name].[ext]",
      },
    ]
  );
}

module.exports = { presets, plugins };
