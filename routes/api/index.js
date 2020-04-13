const router = require('express').Router();

router.use('/users', require('./user'));
router.use('/posts', require('./post'));
router.use('/comments', require('./comment'));
router.use('/likes', require('./like'));

module.exports = router;