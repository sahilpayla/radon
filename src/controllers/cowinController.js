let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// ============== get getDistricts id ==============
let getbydistrictId = async function (req, res) {

    try {
        let id = req.query.id
        let date = req.query.date
        console.log( `query params are: ${id} ${date}` )

        var options = 
        {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        // let result1 = result.data
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// ============== london weather =============
let weather = async function (req, res) {

    try {
        let location = req.query.location
        let appid = req.query.appid

        console.log(`query params are: ${location} ${appid}`)

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// ============== sorted Temperature weather =============

let sortedweather = async function (req, res) {
    try {
        
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newArray = []

        for( i=0 ; i<cities.length ; i++ )
        {
            let obj= { city: cities[i] }
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c5a07a5f1ba8b10f0e5cb28b018f097a`)
            console.log( resp.data.main.temp ) 

            obj.temp = resp.data.main.temp
            newArray.push(obj)
        }
        // ================= sorting start here  ====================

        let sortedArray = newArray.sort( function (a,b) {return a.temp - b.temp }) 
        console.log(sortedArray)
        res.status(200).send({ msg:true, data:sortedArray })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// =============== memes =======================

    let memes = async function (req, res) {

        try {
            let template_id = req.query.template_id
            let text0    = req.query.text0
            let text1    = req.query.text1 
            let username = req.query.username
            let password = req.query.password
    
            console.log(`query params are: ${template_id} ${text0} ${text1} ${username} ${password}`)
    
            var options = 
            {
                method: "get",
                url: `https://api.imgflip.com/caption_image?template_id=${template_id}&&text0=${text0}&&text1=${text1}&&username=${username}&&password=${password}`

            }

            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getbydistrictId = getbydistrictId
module.exports.weather = weather
module.exports.memes = memes
module.exports.sortedweather = sortedweather