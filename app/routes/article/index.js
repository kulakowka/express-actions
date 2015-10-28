import express           from 'express';

import checkAuth         from '../../actions/user/checkAuth';
import addUser           from '../../actions/user/addUser';

import renderArticleNew  from '../../actions/article/renderArticleNew';
import renderArticle     from '../../actions/article/renderArticle';
import renderArticles    from '../../actions/article/renderArticles';
import findArticles      from '../../actions/article/findArticles';
import findArticle       from '../../actions/article/findArticle';
import createArticle     from '../../actions/article/createArticle';
import redirectToArticle from '../../actions/article/redirectToArticle';

var router = express.Router();

// GET /articles
router.get('/', findArticles, renderArticles);

// POST /articles
router.post('/', checkAuth, addUser, createArticle, redirectToArticle);

// GET /articles/new
router.get('/new', checkAuth, renderArticleNew);

// GET /articles/:id
router.get('/:id', findArticle, renderArticle);

export default router;
