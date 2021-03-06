'use strict';

var _ = require('lodash');
var _configs = {

  // global section test 123
  global: require(__dirname + '/config/webpack/global'),

  // config by enviroments 444 555 888
  production: require(__dirname + '/config/webpack/environments/production'),
  development: require(__dirname + '/config/webpack/environments/development')
};

var _load = function() {
  var ENV = process.env.NODE_ENV
    ? process.env.NODE_ENV
    : 'production';

  console.log('Current Environment: ', ENV);

  // load config file by environment
  return _configs && _.merge(
    _configs.global(__dirname),
    _configs[ENV](__dirname)
  );
};

module.exports = _load();
