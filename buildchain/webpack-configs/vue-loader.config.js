// vue-loader.config.js
// returns a webpack config object for handling .vue file loading

// webpack plugins
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

// return a webpack config
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            /* -- https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags */
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false
            }),
        ]
    });
    // configs
    const configs = {
        // development configs
        development: {
            // legacy development config
            legacy: {
            },
            // modern development config
            modern: {
                ...common(),
            },
        },
        // production configs
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
