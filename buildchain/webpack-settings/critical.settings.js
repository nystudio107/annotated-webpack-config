// critical.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    critical: {
        base: '../web/dist/criticalcss/',
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
        ]
    },
};
