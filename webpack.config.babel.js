import { LoaderOptionsPlugin } from 'webpack';
import autoprefixer from 'autoprefixer';

const baseConfig = {
  entry: [
    'react-hot-loader/patch',
    `${__dirname}/src/entry.js`,
  ],
  output: {
    path: `${__dirname}/public/build`,
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },
  devtool: 'eval',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015-native-modules',
            'react',
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-decorators-legacy',
            'transform-class-properties',
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
    ],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
  ],
};

const productionConfig = {
  ...baseConfig,
};

const developmentConfig = {
  ...baseConfig,

  plugins: [
    // ...baseConfig.plugins,

    new LoaderOptionsPlugin({
      debug: true,
    }),
  ],
};

export default process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
