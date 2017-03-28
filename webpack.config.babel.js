import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'src')

let ExtractCSS = new ExtractTextPlugin({filename: 'css/main.[hash:6].css', disable: false, allChunks: true})

export default {
  entry: {
    main: APP_DIR + '/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'moment',
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].[chunkhash:6].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /assets/,
        use: ExtractCSS.extract({
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader?name=images/img-[hash:6].[ext]&publicPath=/",
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve( APP_DIR )
    },
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      // minChunks: Infinity,
      // filename: 'js/vendor.[chunkhash:6].js'
    }),
    ExtractCSS,
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      filename: 'index.html',
      inject: 'head'
    }),
    // Copy things directly from /assets
    new CopyWebpackPlugin([
      // {output}/file.txt
      { from: 'assets' }
    ]),
    // I have no clue why this is necessary, but it is. #justnodethings
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.DefinePlugin({
      'process.env.API_HOST': JSON.stringify(process.env.API_HOST || 'http://localhost:8081')
    })
  ]
};
