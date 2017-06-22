const twatt = require('../controllers/twitter');
const router = require('express').Router();

router.post('/', twatt.create);

module.exports = router;
