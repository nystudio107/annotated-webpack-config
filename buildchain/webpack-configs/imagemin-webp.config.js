// imagemin-webp.config.js
// returns a webpack config object for the ImageminWebpWebp plugin

// webpack plugins
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

// return a webpack config
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        plugins: [
            new ImageminWebpWebpackPlugin({
            }),
        ]
    });
    // configs
    const configs = {
        // development configs
        development: {
            // legacy development config
            legacy: {},
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
