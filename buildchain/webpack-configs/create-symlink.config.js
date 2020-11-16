// create-symlink.config.js
// returns a webpack config object for the CreateSymlink plugin

// webpack plugins
const CreateSymlinkPlugin = require('create-symlink-webpack-plugin');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        plugins: [
            new CreateSymlinkPlugin(
                settings.symlinks,
                true,
            ),
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
