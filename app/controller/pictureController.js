var express = require('express'),
    router  = express.Router()
;

router.new = function(req, res){
    res.render('picture/new', {title: "Add new picture"});
};

router.index = function (req, res) {
    res.json({"foo": "bar"});
};

module.exports = router;