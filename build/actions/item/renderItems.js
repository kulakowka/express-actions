'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  res.render('items/index', { items: req.items });
};

module.exports = exports['default'];