// bundle-analyzer.config.js
// returns a webpack config object for generating file banners

// webpack plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// return a webpack config
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (type = 'modern', settings) => {
    // common config
    const common = (filename) => ({
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: filename,
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
                ...common('report-modern.html'),
            },
        },
        // production configs
        production: {
            // legacy production config
            legacy: {
                ...common('report-legacy.html'),
            },
            // modern production config
            modern: {
                ...common('report-modern.html'),
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
