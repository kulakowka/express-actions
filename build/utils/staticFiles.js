'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _express = require('express');

var _path = require('path');

exports['default'] = (0, _express['static'])((0, _path.resolve)(__dirname, '../../', 'public'));
module.exports = exports['default'];