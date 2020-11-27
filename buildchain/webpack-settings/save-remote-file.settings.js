// save-remote-file.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    remoteFiles: [
        {
            url: "https://www.google-analytics.com/analytics.js",
            filepath: "js/analytics.js"
        }
    ],
};
