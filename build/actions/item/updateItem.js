"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (req, res, next) {
  var item = req.item;

  // TODO: hack for example
  item.title = req.body.title;
  item.text = req.body.text;

  item.save(function (error, item) {
    if (error) return next(error);
    req.item = item;
    next();
  });
};

module.exports = exports["default"];