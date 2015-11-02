import {Router} from 'express'

import {
  authenticateLocal,
  // addUser,
  // checkAuth,
  renderSignIn,
  renderSignUp,
  createUser,
  findUser,
  redirectToUser,
  renderUser,
  logout
} from '../../actions/user'

import {redirectToHomepage} from '../../actions/homepage'

var router = Router()

// POST /users
router.post('/', createUser, authenticateLocal({failureRedirect: '/users/sign_up', failureFlash: true}), redirectToUser)

// POST /users/login
router.post('/login', authenticateLocal({failureRedirect: '/users/sign_in', failureFlash: true}), redirectToUser)

// POST /users/logout
router.post('/logout', logout, redirectToHomepage)

// GET /users/sign_in
router.get('/sign_in', renderSignIn)

// GET /users/sign_up
router.get('/sign_up', renderSignUp)

// GET /articles/:id
router.get('/:username', findUser, renderUser)

export default router
