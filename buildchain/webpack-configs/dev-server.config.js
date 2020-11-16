// dev-server.config.js
// returns a webpack config object for running webpack-dev-server

// node modules
const path = require('path');

// webpack plugins
const webpack = require('webpack');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        devServer: {
            contentBase: path.resolve(__dirname, settings.contentBase()),
            disableHostCheck: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            host: settings.host(),
            hot: true,
            https: !!parseInt(settings.https()),
            overlay: true,
            port: settings.port(),
            public: settings.public(),
            publicPath: '/',
            watchContentBase: true,
            watchOptions: {
                poll: !!parseInt(settings.poll()),
                ignored: /node_modules/,
            },
        },
        devtool: false,
        mode: 'development',
        optimization: {
            runtimeChunk: {
                name: 'runtime'
            }
        },
        output: {
            filename: path.join('./js', '[name].js'),
            publicPath: settings.public() + '/',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.EvalSourceMapDevToolPlugin({
                test: /\.(m?js|ts)($|\?)/i,
                exclude: /\.(pcss|css)($|\?)/i,
            }),
        ],
        target: 'web',
    });
    // configs
    const configs = {
        // development config
        development: {
            // legacy development config
            legacy: {
            },
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
            },
            // modern production config
            modern: {
                ...common(),
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
