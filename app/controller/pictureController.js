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

router.create = function (req, res) {
    cloudinary.v2.uploader.upload(req.files.image.path,
        { width: 300, height: 300, crop: "limit", tags: req.body.tags, moderation:'manual' },
        function(err, result) {
            console.log(result);
            var post = new Model({
                title: req.body.title,
                description: req.body.description,
                created_at: new Date(),
                image: result.url,
                image_id: result.public_id
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