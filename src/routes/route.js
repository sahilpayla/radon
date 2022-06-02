const express = require('express')
const router = express.Router();
const lodash = require('lodash')

// const externalModule = require('../logger')
const sahil = require('../logger/logger')
const sahil1 = require('../util/helper')
const sahil2 = require('../validator1/formatter')

router.get('/test-me', function (req, res) {
    
    sahil.welcome()
    sahil1.printday()
    sahil1.printmonth()
    sahil1.printInfo()
    sahil2.trim()
    sahil2.tolowercase()
    sahil2.toUpperCase()

    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    // console.log('The current batch is '+ externalModule.welcome())
    // res.send('My first ever api! ')
});

router.get('/hello', function (req, res) {
    const month = ['jan','feb','mar','april','may','june','jul']
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason