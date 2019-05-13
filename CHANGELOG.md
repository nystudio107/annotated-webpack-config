# Annotated webpack 4 config changelog

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
