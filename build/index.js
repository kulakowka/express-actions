'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _path = require('path');

var _utils = require('./utils');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var app = (0, _express2['default'])();

app.use((0, _bodyParser.urlencoded)({ extended: false }));
app.use((0, _bodyParser.json)());
app.use(_utils.session);
app.use(_utils.stylus);
app.use(_utils.staticFiles);
app.set('views', (0, _path.resolve)(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(_routes2['default']);

app.listen(process.env.PORT || 3000);

exports['default'] = app;
module.exports = exports['default'];