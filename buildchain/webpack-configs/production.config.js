// production.config.js
// returns a webpack config object for production builds

// node modules
const path = require('path');

// webpack plugins
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        mode: 'production',
        devtool: 'source-map',
    });
    // configs
    const configs = {
        // development config
        development: {
            // legacy development config
            legacy: {},
            // modern development config
            modern: {
                ...common(),
            },
        },
        // production config
        production: {
            // legacy production config
            legacy: {
                ...common(),
                optimization: {
                    minimize: true,
                    minimizer: [
                        new TerserPlugin({
                            extractComments: false,
                        }),
                        new CssMinimizerPlugin({
                            sourceMap: true,
                        })
                    ],
                    runtimeChunk: {
                        name: 'runtime'
                    },
                    splitChunks: {
                        cacheGroups: {
                            styles: {
                                chunks: 'all',
                                enforce: true,
                                name: settings.cssName,
                                test: /\.(pcss|css|vue)$/,
                                type: 'css/mini-extract',
                            }
                        }
                    },
                },
                output: {
                    filename: path.join('./js', '[name]-legacy.[contenthash].js'),
                },
                plugins: [
                    new MiniCssExtractPlugin({
                        filename: path.join('./css', '[name].[contenthash].css'),
                    }),
                ],
            },
            // modern production config
            modern: {
                ...common(),
                optimization: {
                    minimize: true,
                    minimizer: [
                        new TerserPlugin({
                            extractComments: false,
                        }),
                    ],
                    runtimeChunk: {
                        name: 'runtime'
                    },
                },
                output: {
                    filename: path.join('./js', '[name].[contenthash].js'),
                },
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
