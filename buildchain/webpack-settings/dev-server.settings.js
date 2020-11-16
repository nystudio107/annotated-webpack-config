// dev-server.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    contentBase: () => process.env.DEVSERVER_CONTENT_BASE || '../../cms/templates/',
    host: () => process.env.DEVSERVER_HOST || 'localhost',
    https: () => process.env.DEVSERVER_HTTPS || false,
    poll: () => process.env.DEVSERVER_POLL || false,
    port: () => process.env.DEVSERVER_PORT || 8080,
    public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8080',
};
