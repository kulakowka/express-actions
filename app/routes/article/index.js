import {Router} from 'express'
import checkAuthor from '../../actions/article/checkAuthor'
import createArticle from '../../actions/article/createArticle'
import findArticle from '../../actions/article/findArticle'
import findArticles from '../../actions/article/findArticles'
import redirectToArticle from '../../actions/article/redirectToArticle'
import renderArticle from '../../actions/article/renderArticle'
import renderArticleEdit from '../../actions/article/renderArticleEdit'
import renderArticleNew from '../../actions/article/renderArticleNew'
import renderArticles from '../../actions/article/renderArticles'
import updateArticle from '../../actions/article/updateArticle'
import addUser from '../../actions/user/addUser'
import checkAuth from '../../actions/user/checkAuth'

var router = Router()

// POST /articles
router.post('/', checkAuth, addUser, createArticle, redirectToArticle)

// POST /articles/:id
router.post('/:id', checkAuth, findArticle, checkAuthor, addUser, updateArticle, redirectToArticle)

// GET /articles
router.get('/', findArticles, renderArticles)

// GET /articles/new
router.get('/new', checkAuth, renderArticleNew)

// GET /articles/:id
router.get('/:id', findArticle, renderArticle)

// GET /articles/:id/edit
router.get('/:id/edit', checkAuth, findArticle, checkAuthor, renderArticleEdit)

export default router
