const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({

    userId:{
        type:ObjectId,
        ref:'MiddlewareUser'
    },
    productId:{
        type:ObjectId,
        ref:'Product'
    },
    amount:Number,
    date:{
        type:date,
        required:true
    }
    
},{ timestamp:true });

module.exports = mongoose.model('Order', orderSchema) //users
