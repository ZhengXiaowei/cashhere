var path = require("path")
var utils = require("./utils")

var projectRoot = path.resolve(__dirname, "../")
const vuxLoader = require("vux-loader")

var config = require("../config")
var vueLoaderConfig = require("./vue-loader.conf")

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

let webpackConfig = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      vonic: "vonic/src/index.js",
      common: resolve("src/common"),
      page: resolve("src/components"),
      base: resolve("src/base"),
      api: resolve("src/api")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [resolve("src"), resolve("test")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/vonic")
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  }
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ["vux-ui", "progress-bar", "duplicate-style"]
})
