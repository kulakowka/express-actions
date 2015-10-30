'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

_mongoose2['default'].connect(process.env.MONGO_URL || 'mongodb://localhost/express_actions_v1');

exports['default'] = _mongoose2['default'];
module.exports = exports['default'];