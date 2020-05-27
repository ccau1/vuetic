const isDevelopment = process.env.NODE_ENV === "development";

const config = {
  configureWebpack: {
    devtool: isDevelopment ? "source-map" : false
  }
};

module.exports = config;
