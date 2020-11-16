// banner.config.js
// returns a webpack config object for generating file banners

// webpack plugins
const webpack = require('webpack');

// package.json settings
const pkg = require('../package.json');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    const timestamp = new Date();
    // common config
    const common = () => ({
        plugins: [
            new webpack.BannerPlugin({
                banner: [
                    '/*!',
                    ' * @project        ' + settings.name,
                    ' * @name           ' + '[base]',
                    ' * @author         ' + pkg.author.name,
                    ' * @build          ' + timestamp.toString(),
                    ' * @copyright      Copyright (c) ' + timestamp.getFullYear() + ' ' + settings.copyright,
                    ' *',
                    ' */',
                    ''
                ].join('\n'),
                raw: true
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
