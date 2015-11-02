import {Router} from 'express'
import {addCurrentUser} from '../actions/user'
import {renderHomepage} from '../actions/homepage'
import renderError from '../actions/error/renderError'
import items from './items'
import users from './users'

var router = Router()
router.use(addCurrentUser)
router.get('/', renderHomepage)
router.use('/items', items)
router.use('/users', users)
router.use(renderError)

export default router
