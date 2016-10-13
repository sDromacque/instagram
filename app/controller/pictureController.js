var express = require('express'),
    router  = express.Router(),
    cloudinary = require('cloudinary'),
    mongoose = require('mongoose'),
    Picture = require('../models/Picture')
;

cloudinary.config({
    cloud_name: 'dadhuuta7',
    api_key: '796461922932559',
    api_secret: 'qBjTZm95w8GEbVKctUEnKVHiU7Y'
});

router.new = function(req, res){
    res.render('picture/new',  { what: 'best', who: 'me'});
};

router.create = function (req, res) {
    cloudinary.uploader.upload(req.files.image,
        function(err, result){
            console.log(result);
            // var picture = new Picture({
            //     title: req.body.title,
            //     description: req.body.description,
            //     image: req.body.image,
            //     created_at: new Date()
            // });
            picture.save(function (err) {
                if(err){
                    res.send(err)
                }
                res.redirect('/');
            });
        }
    );
};


router.index = function (req, res, next) {
    res.json({ what: 'best', who: 'me'});
};

module.exports = router;