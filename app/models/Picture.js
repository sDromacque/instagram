var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


var PictureSchema = new Schema({
    title: String,
    description: String,
    image: String,
    image_id: String,
    created_at: Date
});

module.exports = mongoose.model('Picture', PictureSchema);