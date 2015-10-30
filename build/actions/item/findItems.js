'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modelsItem = require('../../models/item');

var _modelsItem2 = _interopRequireDefault(_modelsItem);

exports['default'] = function (req, res, next) {
  _modelsItem2['default'].find().limit(10).sort({ _id: -1 }).exec(function (err, items) {
    if (err) return next(err);
    req.items = items;
    next();
  });
};

module.exports = exports['default'];