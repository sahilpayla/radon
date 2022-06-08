const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    name:String,
    author_id:Number,
    price:Number,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model('Book_Id', bookSchema ) //author_ids