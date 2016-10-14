var express    = require('express'),
    router     = express.Router(),
    controller = require('../app/controller/pictureController'),
    multipart = require('connect-multiparty'),
    multipartMiddleware = multipart(),
    Picture = require('../app/models/Picture')
;

router.get('/', controller.index);
router.get('/new', multipartMiddleware, controller.new);
router.post('/create', multipartMiddleware, controller.create);

module.exports = router;