const path = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../"),
    loader: "ts-loader",
    options: {
      transpileOnly: true
    }
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  // Add a custom loader to load and attach the source of the file
  // specified in a <include-source> custom block of a Vue file
  config.module.rules.push({
    // The block type: <include-source>
    resourceQuery: /blockType=include-source/,
    // The custom loader: source-loader.js file in the current directory
    loader: path.resolve(__dirname, "source-loader.js"),
    // Pass the repo's root path in the loader options to resolve the
    // relative source file paths
    options: {
      rootPath: path.resolve(__dirname, "../")
    }
  });

  // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
  //     the docs page from the markdown
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: "babel-loader",
        // may or may not need this line depending on your app's setup
        options: {
          plugins: ["@babel/plugin-transform-react-jsx"]
        }
      },
      {
        loader: "@mdx-js/loader",
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  });
  // 2b. Run `source-loader` on story files to show their source code
  //     automatically in `DocsPage` or the `Source` doc block.
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre"
  });

  config.resolve.alias.vue$ = "vue/dist/vue.esm.js";

  config.resolve.extensions.push(".ts", ".tsx", ".vue");

  return config;
};
