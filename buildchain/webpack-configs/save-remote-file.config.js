// save-remote-file.config.js
// returns a webpack config object for the SaveRemoteFile plugin

// webpack plugins
const SaveRemoteFilePlugin = require('save-remote-file-webpack-plugin');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        plugins: [
            new SaveRemoteFilePlugin(
                settings.remoteFiles,
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
