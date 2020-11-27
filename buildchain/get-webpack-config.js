// node modules
const { merge } = require('webpack-merge');

/**
 * return a webpack settings file
 * @param name string
 * @returns {{}}
 */
const getWebpackSettings = (name) => {
    let settings = {};
    try {
        settings = require('./webpack-settings/' + name + '.settings.js');
    } catch (e) {
        // that's okay
    }

    return settings;
};

/**
 * return a webpack settings file combined with the 'app' settings
 * @param name string
 * @returns {{}}
 */
const getCombinedWebpackSettings = (name) => ({
    ...getWebpackSettings('app'),
    ...getWebpackSettings(name),
});

/**
 * return a legacy webpack config file
 * @param name
 * @returns {{}}
 */
const getLegacyWebpackConfig = (name) => require('./webpack-configs/' + name + '.config.js')('legacy', getCombinedWebpackSettings(name));

/**
 * return a modern webpack config file
 * @param name
 * @returns {{}}
 */
const getModernWebpackConfig = (name) => require('./webpack-configs/' + name + '.config.js')('modern', getCombinedWebpackSettings(name));

/**
 * return an array of webpack configs using the function provided in getWebpackConfig
 * @param names            string[]
 * @param getWebpackConfig function
 * @returns {{}}
 */
const webpackConfigs = (names, getWebpackConfig) => {
    let config = {};
    names.forEach((name) => config = merge(config, getWebpackConfig(name)));

    return config;
};

/**
 * return an array of build webpack configs
 * @param names string
 * @returns {{}}
 */
const buildWebpackConfigs = (...names) => webpackConfigs(names, getModernWebpackConfig);

/**
 * return an array of legacy webpack configs
 * @param names string
 * @returns {{}}
 */
const legacyWebpackConfigs = (...names) => webpackConfigs(names, getLegacyWebpackConfig);

/**
 * return an array of modern webpack configs
 * @param names string
 * @returns {{}}
 */
const modernWebpackConfigs = (...names) => webpackConfigs(names, getModernWebpackConfig);

// module exports
module.exports = {
    getWebpackSettings,
    getLegacyWebpackConfig,
    getModernWebpackConfig,
    buildWebpackConfigs,
    legacyWebpackConfigs,
    modernWebpackConfigs,
};
