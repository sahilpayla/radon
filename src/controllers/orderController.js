const orderModel = require("../models/orderModel.js")


const ProductAssign= async function (req, res){
    let data = req.body
    let savedData = await orderModel.create(data)
    let freeappuser = req.headers.isfreeappuser
    console.log(freeappuser)
    let together = await savedData.find().populate('MiddlewareUser','Product')
    // res.send({msg : savedData})
    res.send({msg : together})
}

module.exports.ProductAssign = ProductAssign