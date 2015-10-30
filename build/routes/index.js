'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _actionsHomepageRenderHomepage = require('../actions/homepage/renderHomepage');

var _actionsHomepageRenderHomepage2 = _interopRequireDefault(_actionsHomepageRenderHomepage);

var _actionsErrorRenderError = require('../actions/error/renderError');

var _actionsErrorRenderError2 = _interopRequireDefault(_actionsErrorRenderError);

var _items = require('./items');

var _items2 = _interopRequireDefault(_items);

var router = (0, _express.Router)();

router.get('/', _actionsHomepageRenderHomepage2['default']);
router.use('/items', _items2['default']);
router.use(_actionsErrorRenderError2['default']);

exports['default'] = router;
module.exports = exports['default'];