import express        from 'express';

import renderHomepage from '../actions/homepage/renderHomepage';
import renderError    from '../actions/error/renderError';

import articleRoutes  from './article';

var router = express.Router();

router.get('/', renderHomepage);
router.use('/articles', articleRoutes);
router.use(renderError);

export default router;
