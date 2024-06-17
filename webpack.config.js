const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.ts"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true
  },

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "Logo.png")
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets")
        }
      ]
    })
  ],

  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '...']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            }
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ]
  }
}