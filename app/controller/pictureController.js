var express = require('express'),
    router  = express.Router()
;

router.new = function(req, res){
    res.render('picture/new',  { what: 'best', who: 'me' });
};

router.index = function (req, res) {
    res.json({"foo": "bar"});
};

module.exports = router;