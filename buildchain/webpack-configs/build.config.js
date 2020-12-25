// build.config.js
// returns a webpack config object for the base build settings

// node modules
const path = require('path');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        entry: {},
        mode: 'production',
        output: {
            path: path.resolve(__dirname, settings.paths.dist),
            publicPath: settings.urls.publicPath()
        },
        resolve: {
            modules: [
                path.resolve(__dirname, '../node_modules'),
            ],
        },
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
