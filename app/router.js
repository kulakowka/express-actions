import express from 'express'
import {allowCrossDomain, loadCollection, getItems, createItem, getItem, updateItem, deleteItem } from './api'

var router = express.Router();

router.use(allowCrossDomain);

// GET /:collection
// POST /:collection
router.route('/:collection')
  .all(loadCollection)
  .get(getItems)
  .post(createItem)

// GET /:collection/:id
// PUT /:collection/:id
// DELETE /:collection/:id
router.route('/:collection/:id')
  .all(loadCollection)
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem)

export default router;
