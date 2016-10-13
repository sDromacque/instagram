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
    cloudinary.uploader.upload("https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg", function(result){
        var picture = new Picture({
            title: 'lqkds',
            description: 'qdslkdsqml',
            image: 'qddqs',
            image_id: 'dqdsq',
            created_at: new Date()
        });
        picture.save(function(err){
            if(err){
                res.send(err);
            }
            res.redirect('/');
        });
        console.log(result)
    });
    res.render('picture/new',  { what: 'best', who: 'me'});
};


router.index = function (req, res, next) {

};

module.exports = router;