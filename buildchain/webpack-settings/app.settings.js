// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
    alias: {
        '@css': path.resolve('../src/css'),
        '@fonts': path.resolve('../src/fonts'),
        '@img': path.resolve('../src/img'),
        '@js': path.resolve('../src/js'),
        '@vue': path.resolve('../src/vue'),
    },
    copyright: 'Example Company, Inc.',
    entry: {
        'app': [
            '@js/app.ts',
            '@css/app-base.pcss',
            '@css/app-components.pcss',
            '@css/app-utilities.pcss',
        ],
        'lazysizes-wrapper': [
            '@js/utils/lazysizes-wrapper.ts',
        ],
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'Example Project',
    paths: {
        dist: path.resolve('../web/dist/'),
    },
    urls: {
        criticalCss: 'http://example.test/',
        publicPath: () => process.env.PUBLIC_PATH || '/dist/',
    },
};
