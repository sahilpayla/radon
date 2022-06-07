const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        enum: ['INR','EUR']
    },
    year: Number,
    published: Number,
    tags:{
        type: String,
        enum: ['fiction','fantasy','action','thriller','real'],
    },
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,
})

module.exports = mongoose.model('Person', bookModel) //persons
// module.exports = mongoose.model('User', userSchema) //users

// String, Number
// Boolean, Object/json, array