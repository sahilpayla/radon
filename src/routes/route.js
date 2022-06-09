const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const pubController= require("../controllers/publisherController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)
// // new ==================
router.post("/createPublisher", pubController.createPublisher)

router.get("/getPublisherData", pubController.getPublisherData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;