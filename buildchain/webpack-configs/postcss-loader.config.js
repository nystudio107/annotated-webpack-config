// postcss-loader.config.js
// returns a webpack config object to handle .pcss & .css loading

// node modules
const path = require('path');

// webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TailwindCss = require('tailwindcss');

// return a webpack config
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (type = 'modern', settings) => {
// common config
    const common = (loaders, postCssPlugins) => ({
        module: {
            rules: [
                {
                    test: /\.(pcss|css)$/,
                    use: [
                        ...loaders,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                url: false,
                                import: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false,
                                postcssOptions: {
                                    path: path.resolve(__dirname),
                                    plugins: [
                                        ['postcss-import', {
                                            path: ['./node_modules'],
                                        }],
                                        TailwindCss('./tailwind.config.js'),
                                        ['postcss-nested', {
                                        }],
                                        ...postCssPlugins,
                                    ],
                                }
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
                ...common([{
                    loader: 'style-loader',
                }], [
                ]),
            },
        },
        // production configs
        production: {
            // legacy production config
            legacy: {
                ...common(
                    [
                        MiniCssExtractPlugin.loader
                    ],
                    [
                        ['autoprefixer', {
                        }]
                    ],
                ),
            },
            // modern production config
            modern: {
                module: {
                    rules: [{
                        test: /\.(pcss|css)$/,
                        loader: 'ignore-loader'
                    }],
                },
            },
        }
    };

    return configs[process.env.NODE_ENV][type];
}
