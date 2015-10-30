'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stylus = require('stylus');

var _stylus2 = _interopRequireDefault(_stylus);

var _nib = require('nib');

var _nib2 = _interopRequireDefault(_nib);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function compile(str, path) {
  return (0, _stylus2['default'])(str).set('filename', path).set('compress', true).use((0, _nib2['default'])())['import']('nib');
}

exports['default'] = _stylus2['default'].middleware({
  src: _path2['default'].resolve(__dirname, '../../', 'assets'),
  dest: _path2['default'].resolve(__dirname, '../../', 'public'),
  compile: compile
});
module.exports = exports['default'];