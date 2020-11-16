// compression.config.js
// returns a webpack config object for compressing asset files

// node modules
const zlib = require('zlib');
const zopfli = require('@gfx/zopfli');

// webpack plugins
const CompressionPlugin = require('compression-webpack-plugin');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        plugins: [
            settings.gzipEnabled && (
                new CompressionPlugin({
                    algorithm(input, compressionOptions, callback) {
                        return zopfli.gzip(input, compressionOptions, callback);
                    },
                    compressionOptions: {
                        numiterations: 15,
                        level: 9
                    },
                    deleteOriginalAssets: false,
                    filename: '[path][base].gz',
                    minRatio: 0.8,
                    test: /\.(js|css|html|svg|map)$/,
                    threshold: 10240,
                })
            ),
            settings.brotliEnabled && (
                new CompressionPlugin({
                    algorithm: 'brotliCompress',
                    compressionOptions: {
                        params: {
                            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
                        },
                    },
                    deleteOriginalAssets: false,
                    filename: '[path][base].br',
                    minRatio: 0.8,
                    test: /\.(js|css|html|svg|map)$/,
                    threshold: 10240,
                })
            ),
        ].filter(Boolean),
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
