
const str = "     functionUp      "

const trim = function() {
    console.log(str.trim());
}
const tolowercase = function() {
    console.log(str.toLowerCase());
}
const toUpperCase = function() {
    console.log(str.toLocaleUpperCase());
}
module.exports.trim = trim
module.exports.tolowercase = tolowercase
module.exports.toUpperCase = toUpperCase

