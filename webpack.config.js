const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        
          {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },],
  
      
      
  },
  optimization: {
    minimize: true,
    minimizer: [
    //   new TerserPlugin({
    //     exclude: /\/excludes/,
    //   }),
    ],
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin(
        {
            template:'./public/index.html',
            inject: 'body',
            filename: 'index.html'
        }
    )
  ],
};

