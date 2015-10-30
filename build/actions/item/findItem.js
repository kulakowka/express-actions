'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modelsItem = require('../../models/item');

var _modelsItem2 = _interopRequireDefault(_modelsItem);

exports['default'] = function (req, res, next) {
  _modelsItem2['default'].findById(req.params.id).exec(function (err, item) {
    if (err) return next(err);
    req.item = item;
    next();
  });
};

module.exports = exports['default'];