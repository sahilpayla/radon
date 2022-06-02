const express = require('express')
const router = express.Router();

// const externalModule = require('../logger')
const sahil = require('../logger/logger')
const sahil1 = require('../util/helper')
const sahil2 = require('../validator1/formatter')

router.get('/test-me', function (req, res) {
    
    console.log(sahil.welcome())
    console.log(sahil1.printday())
    console.log(sahil1.printmonth())
    console.log(sahil1.printInfo())
    console.log(sahil2.trim())
    console.log(sahil2.tolowercase())
    console.log(sahil2.toUpperCase())

    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    // console.log('The current batch is '+ externalModule.welcome())
    // res.send('My first ever api! ')
});

router.get('/test-me1', function (req, res) {
    
    res.send('not your business!')
});
  

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});


router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason