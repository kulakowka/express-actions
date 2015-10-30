'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _db = require('../db');

var MongoStore = (0, _connectMongo2['default'])(_expressSession2['default']);
var store = new MongoStore({ mongooseConnection: _db.connection });

exports['default'] = (0, _expressSession2['default'])({
  saveUninitialized: false,
  resave: false,
  store: store,
  secret: 'secret key string'
});
module.exports = exports['default'];