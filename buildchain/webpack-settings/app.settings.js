// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
    alias: {
        '@': path.resolve('../src'),
    },
    copyright: 'Example Company, Inc.',
    entry: {
        'app': [
            '@/js/app.ts',
            '@/css/app.pcss',
        ],
        'lazysizes-wrapper': [
            '@/js/utils/lazysizes-wrapper.ts',
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
