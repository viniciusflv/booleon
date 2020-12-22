module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-backgrounds',
    "@storybook/addon-storysource",
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
          },
        ],
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: { parser: "typescript" },
          },
        ],
        enforce: "pre",
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
