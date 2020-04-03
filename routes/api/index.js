const router = require('express').Router();

router.use('/users', require('./user'));
router.use('/posts', require('./post'));

module.exports = router;