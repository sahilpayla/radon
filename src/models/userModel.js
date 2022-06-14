const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    name: String,
	balance:{
        type: Number,
        default: 100
    },
	address: String,
	age: Number,
 	gender: {
         type: String,
         enum: [ "male", "female", "other" ]
    }},{ timestamp:true });

module.exports = mongoose.model('User', newUser ) //MiddlewareUsers