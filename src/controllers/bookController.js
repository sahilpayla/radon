const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/author")
const bookModel= require("../models/book")

const createAuthor = async function (req, res) {

    let data= req.body
    if(!data.author_id){return res.send("author Id Is Required")}
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
const createBook = async function (req, res) {

    let data= req.body
    if(!data.author_id){return res.send("author Id Is Required")}
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

let getBooksByChetanBhagat = async function (req,res) {

    let data = await authorModel.findOne({author_id : 1}).select({author_name : "Chetan Bhagat"})
    console.log(data)
    let list = await bookModel.find({author_id:1})
    res.send({msg:list})
}

let authorOfBook = async function (req,res) {

    let data= await bookModel.findOneAndUpdate(({name:"Two states"}),{$set:{price:100}},{new:true} )
    let authorData= await authorModel.find({author_id:data.author_id}).select("author_name")
    let price = data.price
    res.send({msg:authorData,price})
}

//get books having price between 50-100============================
let bookBetween50_100 = async (req,res) => { 

    let data =await bookModel.find( {price:{$gt:49, $lt:101}} ).select({name:1,author_id:1,_id:0})
    let arr=[]
    for (let i=0;i < data.length;i++){
        let d = await authorModel.find({author_id:data[i].author_id}).select({author_name:1,_id:0})
        arr.push(d)
    }
    res.send({msg:arr})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat
module.exports.authorOfBook =  authorOfBook
module.exports.bookBetween50_100 =  bookBetween50_100

// module.exports.findBook = findBook


module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.deleteBooks = deleteBooks
