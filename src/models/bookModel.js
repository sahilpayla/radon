const mongoose = require('mongoose');

const BookModel = new mongoose.Schema( {
    bookName:{
        type:String,
        required:true
    },
    price:{   
        indianPrice: String,
        europeanPrice: String
    },
    year:{
        type: String,
        default: 2021
    },
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
    }, { timestamps: true });

module.exports = mongoose.model('Sahilbook', BookModel) //books