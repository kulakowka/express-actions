'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  if (req.item.user !== req.session.user) return next(new Error('Access denied'));
  next();
};

module.exports = exports['default'];