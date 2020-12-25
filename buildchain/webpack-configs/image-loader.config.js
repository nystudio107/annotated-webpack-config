// image-loader.config.js
// returns a webpack config object for handling image loading

// return a webpack config
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (type = 'modern', settings) => {
    // common config
    const common = () => ({
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[ext]'
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
                module: {
                    rules: [
                        {
                            test: /\.(png|jpe?g|gif|svg|webp)$/i,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'img/[name].[contenthash].[ext]'
                                    }
                                },
                                {
                                    loader: 'img-loader',
                                    options: {
                                        plugins: [
                                            require('imagemin-mozjpeg')({
                                                progressive: true,
                                                arithmetic: false,
                                            }),
                                            require('imagemin-optipng')({
                                                optimizationLevel: 5,
                                            }),
                                            require('imagemin-svgo')({
                                                plugins: [
                                                    {convertPathData: false},
                                                ]
                                            }),
                                        ]
                                    }
                                }
                            ]                        },
                    ],
                },
            },
            // modern production config
            modern: {
                ...common(),
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
