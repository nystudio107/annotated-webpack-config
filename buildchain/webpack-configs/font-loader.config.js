// font-loader.config.js
// returns a webpack config object for handling font loading

// return a webpack config
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        module: {
            rules: [
                {
                    test: /\.(ttf|eot|woff2?)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]'
                            }
                        }
                    ]
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
