const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sahilpayla:T6cALrdO1y8L5HtJ@sahilpaylacluster.h8dndkb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// ===> global middleware

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );
// ==========================================

app.use (
    function (req, res, next) {

        let ip = req.ip
        let url = req.originalUrl
        let x = Date();

        console.log( `${x} ${ip} ${url}` )
        next();
    }
);

// by this method also can found ip
// const socket.remoteAddress()

// for ip i install ipware libraray

// var getIP = require('ipware')().get_ip;
// app.use(function(req, res, next) {
//     var ipInfo = getIP(req);
//     console.log(ipInfo);
    
//     // { clientIp: '127.0.0.1', clientIpRoutable: false }
//     next();
// });

// ============================================
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
