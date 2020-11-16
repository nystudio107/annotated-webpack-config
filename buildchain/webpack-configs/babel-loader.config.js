// babel-loader.config.js
// returns a webpack config object for handling JavaScript loading

// package.json settings
const pkg = require('../package.json');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = (browserList) => ({
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: settings.exclude,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                [
                                    '@babel/preset-env', {
                                    modules: type === 'legacy' ? 'auto' : false,
                                    corejs: {
                                        version: 3,
                                        proposals: true
                                    },
                                    debug: false,
                                    useBuiltIns: 'usage',
                                    targets: {
                                        browsers: browserList,
                                    },
                                }
                                ],
                                [
                                    '@babel/preset-typescript', {
                                    'allExtensions': true,
                                    'isTSX': false,
                                }
                                ],
                            ],
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread',
                                '@babel/plugin-proposal-nullish-coalescing-operator',
                                '@babel/plugin-proposal-optional-chaining',
                            ],
                            sourceType: 'unambiguous',
                        },
                    },
                },
            ],
        },
    });
    // configs
    const configs = {
        // development config
        development: {
            // legacy development config
            legacy: {
            },
            // modern development config
            modern: {
                ...common(pkg.browserslist.modernBrowsers),
            },
        },
        // production config
        production: {
            // legacy production config
            legacy: {
                ...common(pkg.browserslist.legacyBrowsers),
            },
            // modern production config
            modern: {
                ...common(pkg.browserslist.modernBrowsers),
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
