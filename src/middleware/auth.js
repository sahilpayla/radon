const jwt = require("jsonwebtoken");

let mid1 = function (req,res,next){

    let token = req.headers["x-Auth-token"];
    console.log(token)

    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token)


    // authorisation started here

    let decodedToken = jwt.verify(token, "functionup-radon");
    const userId = req.params.userId
    const tokenId = decodedToken.userId
    console.log(decodedToken)

    if(tokenId != userId ) {
        res.send({ status: false, msg: "token is invalid" });
    }
    else{
        next()
    }
    // if (!decodedToken)
    // {
    //     return res.send({ status: false, msg: "token is invalid" });
    // }else{
    //     next()
    // }
    // console.log("The Decoded Token Is Here ==> ", decodedToken)
}
module.exports.mid1 = mid1