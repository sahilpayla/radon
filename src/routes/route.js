const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
// const lodash = require('lodash');

const router = express.Router();

// problem 1

router.get('/movies', function (req, res) {
    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movieArr)
});

// problem 2

router.get('/movies/:indexNumber', function (req, res) {
    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let length = movieArr.length
    const index =  req.params.indexNumber
    
    res.send(movieArr[index]);
});

// problem 3

router.get('/movies/:indexNumber', function (req, res) {
    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let length = movieArr.length
    const index =  req.params.indexNumber
    if(index<length){
       movie = movieArr[index]
    }
    else{
        movie = ('you type wrong index number so use a valid number ');
    }

    res.send(movie);
});

// problem 4

router.get('/films', function (req, res) {
    const movieArr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incredibles'
       }, {
        'id': 3,
        'name': 'Rand De Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
    res.send(movieArr);
});


// problem 5

router.get('/films/:indexNumber', function(req, res){
    const movieArr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incredibles'
       }, {
        'id': 3,
        'name': 'Rand De Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
   
    let movieIndex=req.params.indexNumber;
    let finalMovie="";
    if(movieIndex<movieArr.length){
        finalMovie=movieArr[movieIndex];
    } else {
        finalMovie=('No movie exists with this id')
    }
    console.log(movieArr.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movies name is '+req.params.moviesName)
    res.send(finalMovie)
});


module.exports = router;
// adding this comment for no reason