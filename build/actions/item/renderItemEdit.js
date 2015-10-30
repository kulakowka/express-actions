'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  res.render('items/edit', req.item);
};

module.exports = exports['default'];