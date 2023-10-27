module.exports = {
  mode: "production",
  output: {
    path: __dirname,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            },
          },
        ],
      },
    ],
  },
};