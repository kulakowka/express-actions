'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  // req.body.user = req.session.user;
  req.body.user = 'kulakowka';
  next();
};

module.exports = exports['default'];