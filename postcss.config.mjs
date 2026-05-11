import babelConfig from "./babel.config.js";

const config = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        "app/**/*.{js,jsx,ts,tsx}",
        "components/**/*.{js,jsx,ts,tsx}",
        "node_modules/solarwindcss/dist/*.js",
      ],
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ["typescript", "jsx"],
        },
        plugins: babelConfig.plugins,
      },
      useCSSLayers: {
        prefix: "stylex",
      },
    },
    autoprefixer: {},
  },
};

export default config;
