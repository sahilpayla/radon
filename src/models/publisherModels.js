const mongoose = require('mongoose');

const pubSchema = new mongoose.Schema( {

    name: String,
    headQuarter: String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', pubSchema)