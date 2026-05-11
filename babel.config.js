// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    "@vicinage/unplugin/babel",
    [
      "@stylexjs/babel-plugin",
      {
        importSources: ["vicinage", "@stylexjs/stylex"],
        dev: process.env.NODE_ENV === "development",
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: {
          "@/*": [path.join(__dirname, "*")],
        },
        unstable_moduleResolution: {
          type: "commonJS",
        },
      },
    ],
  ],
};
