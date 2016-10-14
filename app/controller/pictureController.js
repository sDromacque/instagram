var express = require('express'),
    router  = express.Router(),
    cloudinary = require('cloudinary'),
    Picture = require('../models/Picture')
;

cloudinary.config({
    cloud_name: 'dadhuuta7',
    api_key: '796461922932559',
    api_secret: 'qBjTZm95w8GEbVKctUEnKVHiU7Y'
});

router.new = function(req, res){
    res.render('picture/new');
};

router.create = function (req, res, next) {
    //todo fix bug files {}
    cloudinary.uploader.upload(req.files.image.path, function(result) {
        var post = new Picture({
            title: req.body.title,
            description: req.body.description,
            created_at: new Date(),
            image: result.url
        });

        post.save(function (err) {
            if(err){
                res.send(err)
            }
            res.redirect('/');
        });
    });
};


router.index = function (req, res, next) {
    res.json({ what: 'best', who: 'me'});
};

module.exports = router;