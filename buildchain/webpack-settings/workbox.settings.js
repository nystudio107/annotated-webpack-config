// workbox.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    workbox: {
        swDest: '../sw.js',
        swSrc: '../src/js/service-worker.ts',
        exclude: [
            /\.(png|jpe?g|gif|svg|webp)$/i,
            /\.map$/,
            /\.LICENSE\.txt$/,
            /^manifest.*\\.js(?:on)?$/,
        ],
    },
};
