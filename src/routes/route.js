const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
// const _ = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason