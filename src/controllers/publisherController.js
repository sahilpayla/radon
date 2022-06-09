const pubModel= require("../models/publisherModels")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await pubModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publisher = await pubModel.find()
    res.send({data: publisher})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisherData = getPublisherData