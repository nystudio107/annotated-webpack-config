// manifest.config.js
// returns a webpack config object for the manifest plugin

// webpack plugins
const ManifestPlugin = require('webpack-manifest-plugin');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = (filename) => ({
        plugins: [
            new ManifestPlugin({
                    fileName: filename,
                    basePath: settings.basePath,
                    map: (file) => {
                        file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2');
                        return file;
                    },
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
                ...common('manifest.json'),
            },
        },
        // production configs
        production: {
            // legacy production config
            legacy: {
                ...common('manifest-legacy.json'),
            },
            // modern production config
            modern: {
                ...common('manifest.json'),
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
