const router = require('express').Router();
const ctrl = require('../controllers');

// ROUTES   
router.get('/', ctrl.ballot.index);
router.get('/:id', ctrl.ballot.show);
router.post('/', ctrl.ballot.create);
router.put('/:id', ctrl.ballot.update);
router.delete('/:id', ctrl.ballot.destroy);

module.exports = router;