module.exports = {
  stories: ["../web/**/*.stories.(js|ts|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    }
  ]
};
