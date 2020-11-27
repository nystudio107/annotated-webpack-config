// critical.config.js
// returns a webpack config object for generating critical css

// webpack plugins
const CriticalCssPlugin = require('critical-css-webpack-plugin');

// return a webpack config
module.exports = (type = 'modern', settings) => {
    const criticalCssPlugins = () => {
        return (settings.critical.pages.map((row) => {
                const criticalSrc = settings.urls.criticalCss + row.uri;
                const criticalDest = settings.critical.base + row.template + settings.critical.suffix;
                let criticalWidth = settings.critical.criticalWidth;
                let criticalHeight = settings.critical.criticalHeight;
                // Handle Google AMP templates
                if (row.template.indexOf(settings.critical.ampPrefix) !== -1) {
                    criticalWidth = settings.critical.ampCriticalWidth;
                    criticalHeight = settings.critical.ampCriticalHeight;
                }
                return new CriticalCssPlugin({
                    base: './',
                    src: criticalSrc,
                    target: criticalDest,
                    extract: false,
                    inline: false,
                    minify: true,
                    width: criticalWidth,
                    height: criticalHeight,
                })
            })
        );
    };
    // common config
    const common = () => ({
        plugins: criticalCssPlugins(),
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
