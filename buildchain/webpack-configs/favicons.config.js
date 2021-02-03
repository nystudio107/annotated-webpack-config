// favicons.config.js
// returns a webpack config object for building app icons & the meta html tags

// webpack plugins
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// package.json settings
const pkg = require('../package.json');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                excludeChunks: ['app'],
                filename: 'webapp.html',
                templateContent: ({htmlWebpackPlugin}) => `
                    ${htmlWebpackPlugin.tags.headTags}
                `,
            }),
            new FaviconsWebpackPlugin({
                logo: settings.favicons.logo,
                prefix: settings.favicons.prefix,
                cache: false,
                inject: true,
                favicons: {
                    appName: pkg.name,
                    appDescription: pkg.description,
                    developerName: pkg.author.name,
                    developerURL: pkg.author.url,
                    path: settings.favicons.publicPath,
                }
            }),
        ],
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
