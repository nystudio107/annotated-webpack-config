# Annotated webpack 4 config changelog

## 1.1.1 - 2019-06-04
### Changed
* Use destructuring for ESM module imports
* Added `module.hot.accept()` to the example entry point `app.js`

## 1.1.0 - 2019-05-31
### Changed
* Switched over to using `webpack-dashboard` `^3.0.0`
* Added `debug` to `scripts` to bypass `webpack-dashboard` as needed
* Removed `sane` since `webpack-dev-server ^3.3.0` fixes the sub-directory [watchContentBase issue](https://github.com/webpack/webpack-dev-server/issues/1694)
* Update to [TailWind CSS](https://tailwindcss.com/) `^1.0.0`

## 1.0.6 - 2019-05-18
### Changed
* Removed the now deprecated `@babel/polyfill` since we're using `core-js` directly

## 1.0.5 - 2019-05-14
### Changed
* Use `@babel/preset-env` with `usage` polyfills as per the article [Working with Babel 7 and Webpack](https://www.thebasement.be/working-with-babel-7-and-webpack/#a-cleaner-approach)
* By default, exclude `/(node_modules|bower_components)/` in `webpack.settings.js`
* Added `core-js@2` and `regenerator-runtime` to the `package.json` dependencies

## 1.0.4 - 2019-05-13
### Changed
* Fixed an issue where the `cacheDirectory` was specified in the wrong place, resulting in obscure build errors
* Removed `pcss` from the whitelist config, because it can't handle PostCSS

## 1.0.3 - 2019-05-13
### Changed
* Fixed an error where the default `excludes` should be an empty array `[]` instead of an empty string
* Added `corejs` specification in the `babel-loader` options

## 1.0.2 - 2019-05-02
### Changed
* Moved the `excludes` babel-loader config to `webpack.settings.js`
* Changed the default babel-loader `excludes` config to nothing (was `/node_modules/`) to by default transpile everything
* Set `cacheDirectory` babel-loader config to `true`

## 1.0.1 - 2019-03-10
### Changed
* Added support for [gzip'd static resources](https://medium.com/@selvaganesh93/how-to-serve-webpack-gzipped-file-in-production-using-nginx-692eadbb9f1c)
* Updated bundle dependencies to most recent versions

## 1.0.0 - 2018-10.23
### Added
- Initial release
