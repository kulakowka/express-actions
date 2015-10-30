'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var itemSchema = _db2['default'].Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  title: String,
  text: String,
  user: String
});

// Look at this http://stackoverflow.com/a/17960532/1018328
var model = _db2['default'].model.bind(_db2['default']);

exports['default'] = model('Item', itemSchema);
module.exports = exports['default'];