const recorder = require('../controllers/record');
var router = require('express').Router();

router.get('/', recorder.show);
router.post('/', recorder.add);
router.delete('/:id', recorder.destroy);

module.exports = router;
