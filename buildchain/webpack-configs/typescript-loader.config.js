// typescript-loader.config.js
// returns a webpack config object to handle .pcss & .css loading

// return a webpack config
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: settings.exclude,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/\.vue$/],
                            happyPackMode: false,
                        },
                    },
                },
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
