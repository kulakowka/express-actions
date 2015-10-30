'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  req.session.user = 'kulakowka'; // hack
  if (!req.session.user) return next(new Error('Not authorised'));
  next();
};

module.exports = exports['default'];