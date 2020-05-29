const path = require("path");

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
      rootPath: path.resolve(__dirname, "..")
    }
  });

  config.resolve.alias.vue$ = "vue/dist/vue.esm.js";

  config.resolve.extensions.push(".ts", ".tsx", ".vue");

  return config;
};
