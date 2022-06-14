
const product = require("../models/productModel.js")

const ProductAssign= async function (req, res){
    let data = req.body
    let savedData = await product.create(data)
    res.send({msg : savedData})
}

module.exports.ProductAssign = ProductAssign
