import {Router} from 'express'
import renderHomepage from '../actions/homepage/renderHomepage'
import renderError from '../actions/error/renderError'
import items from './items'

var router = Router()

router.get('/', renderHomepage)
router.use('/items', items)
router.use(renderError)

export default router
