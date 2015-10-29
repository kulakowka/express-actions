import {Router} from 'express'

import {
  checkAuthor,
  createItem,
  findItem,
  findItems,
  redirectToItem,
  renderItem,
  renderItemEdit,
  renderItemNew,
  renderItems,
  updateItem
} from '../../actions/item'

import {
  addUser,
  checkAuth
} from '../../actions/user'

var router = Router()

// POST /articles
router.post('/', checkAuth, addUser, createItem, redirectToItem)

// POST /articles/:id
router.post('/:id', checkAuth, findItem, checkAuthor, addUser, updateItem, redirectToItem)

// GET /articles
router.get('/', findItems, renderItems)

// GET /articles/new
router.get('/new', checkAuth, renderItemNew)

// GET /articles/:id
router.get('/:id', findItem, renderItem)

// GET /articles/:id/edit
router.get('/:id/edit', checkAuth, findItem, checkAuthor, renderItemEdit)

export default router
