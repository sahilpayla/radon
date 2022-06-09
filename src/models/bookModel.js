const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    Author: {
        type: ObjectId,
        ref: "newAuthor"
    },
    Publisher: {
        type: ObjectId,
        ref: "newPublisher"
    },
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
