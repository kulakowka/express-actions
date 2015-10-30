'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _express = require('express');

var _actionsItem = require('../../actions/item');

var _actionsUser = require('../../actions/user');

var router = (0, _express.Router)();

// POST /articles
router.post('/', _actionsUser.checkAuth, _actionsUser.addUser, _actionsItem.createItem, _actionsItem.redirectToItem);

// POST /articles/:id
router.post('/:id', _actionsUser.checkAuth, _actionsItem.findItem, _actionsItem.checkAuthor, _actionsUser.addUser, _actionsItem.updateItem, _actionsItem.redirectToItem);

// GET /articles
router.get('/', _actionsItem.findItems, _actionsItem.renderItems);

// GET /articles/new
router.get('/new', _actionsUser.checkAuth, _actionsItem.renderItemNew);

// GET /articles/:id
router.get('/:id', _actionsItem.findItem, _actionsItem.renderItem);

// GET /articles/:id/edit
router.get('/:id/edit', _actionsUser.checkAuth, _actionsItem.findItem, _actionsItem.checkAuthor, _actionsItem.renderItemEdit);

exports['default'] = router;
module.exports = exports['default'];