var express    = require('express'),
    router     = express.Router(),
    controller = require('../app/controller/pictureController')
;

router.get('/', controller.index);
router.get('/new', controller.new);

module.exports = router;