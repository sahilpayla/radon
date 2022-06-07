const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData )
router.get("/getRandomBooks", BookController.getRandomBooks )
router.get("/getINRBooks", BookController.getINRBooks )
router.get("/bookInYear", BookController.bookInYear )
router.get('/bookList', BookController.bookList )
router.get('/particularBooks', BookController.particularBooks ) 


router.get("/testme", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;