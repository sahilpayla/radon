const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const _ = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/hello', function (req, res) {
    const month = ['jan','feb','mar','april','may','june','july','august','sept','oct','nov','dec']
 
    const vishal = _.chunk(month,4)
    console.log(vishal);
    // res.send('Chunk Function Apply Here!')

    const oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    const tail1 = _.tail(oddNumbers)
    console.log(tail1)
    // res.send('Tail Function Apply Here!')

    const dNums = [1,2,3,2,1]
    const union1 = _.union(dNums)
    console.log(union1)
    // res.send('Union Function Apply Here!')

    const movie  =[['horror' , 'annabell'], ['beauty' , 'Titanic'], ['thriller' , 'Island'],['fantasy' ,'Peter Pan']] ;

    const pairs1 = _.fromPairs(movie)
    console.log(pairs1) 
    res.send('fromPairs Function Apply Here!')

 });

module.exports = router;
// adding this comment for no reason