import {Router} from 'express'
import checkAuthor from '../../actions/item/checkAuthor'
import createItem from '../../actions/item/createItem'
import findItem from '../../actions/item/findItem'
import findItems from '../../actions/item/findItems'
import redirectToItem from '../../actions/item/redirectToItem'
import renderItem from '../../actions/item/renderItem'
import renderItemEdit from '../../actions/item/renderItemEdit'
import renderItemNew from '../../actions/item/renderItemNew'
import renderItems from '../../actions/item/renderItems'
import updateItem from '../../actions/item/updateItem'
import addUser from '../../actions/user/addUser'
import checkAuth from '../../actions/user/checkAuth'

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
