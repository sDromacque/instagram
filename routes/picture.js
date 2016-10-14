var express    = require('express'),
    router     = express.Router(),
    controller = require('../app/controller/pictureController'),
    multipart = require('connect-multiparty'),
    multipartMiddleware = multipart()
;

router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/create', multipartMiddleware, controller.create);

module.exports = router;