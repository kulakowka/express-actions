'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _addUser = require('./addUser');

var _addUser2 = _interopRequireDefault(_addUser);

var _checkAuth = require('./checkAuth');

var _checkAuth2 = _interopRequireDefault(_checkAuth);

exports['default'] = {
  addUser: _addUser2['default'],
  checkAuth: _checkAuth2['default']
};
module.exports = exports['default'];