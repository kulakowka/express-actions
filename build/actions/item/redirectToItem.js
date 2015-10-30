'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  res.redirect('/items/' + req.item.id);
};

module.exports = exports['default'];