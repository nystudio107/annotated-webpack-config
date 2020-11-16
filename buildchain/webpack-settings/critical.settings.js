// critical.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    critical: {
        base: '../cms/web/dist/criticalcss/',
        suffix: '_critical.min.css',
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: 'amp_',
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
            {
                uri: '',
                template: 'index'
            },
            {
                uri: '',
                template: 'amp_index'
            },
            {
                uri: 'errors/offline',
                template: 'errors/offline'
            },
            {
                uri: 'errors/error',
                template: 'errors/error'
            },
            {
                uri: 'errors/503',
                template: 'errors/503'
            },
            {
                uri: 'errors/404',
                template: 'errors/404'
            },
        ]
    },
};
