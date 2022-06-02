
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const today = new Date

const printday = function(){
    const d = new Date();
    // let day = date[d.getDate()];
    console.log(d)
}

const printmonth = function(){
    const d = new Date();
    let name = month[d.getMonth()];
    console.log(name)
}

const printInfo = function(){
    console.log("Radon ,Week 2 day 2 ,the today's topic id Node JS")
}

module.exports.printday = printday
module.exports.printmonth = printmonth
module.exports.printInfo = printInfo