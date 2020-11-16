// create-symlink.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    symlinks: [
        {
            origin: 'img/favicons/favicon.ico',
            symlink: '../favicon.ico'
        },
    ],
};
