const router = require('express').Router();
const ctrl = require('../controllers');

// ROUTES   
router.get('/', ctrl.article.index);
router.get('/:id', ctrl.article.show);
router.post('/', ctrl.article.create);
router.put('/:id', ctrl.article.update);
router.delete('/:id', ctrl.article.destroy);

module.exports = router;