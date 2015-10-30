'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  res.render('items/show', req.item);
};

module.exports = exports['default'];