var express = require('express');
const { route } = require('./products');

var router = express.Router();


// router.get('/', (req, res)=>{
//     res.send("Get Request for user ")
// })

router.get('/', (req, res,next)=>{
    req.headers['content-type']='application/json'
    console.log("API Call REcived "),
    next()
})

router.get('/',(req,res, next)=>{
    res.send("recived heade"+req.headers['content-type']);
    // res.send("middle12");
    
    next(); 
})
router.get('/', (req, res)=>{
    console.log("API Call Ended ")
    
})

router.get('/get-user-details/:id', (req, res)=>{
    res.send("Get Request for user specific  details"+req.params.id)
})

router.get('/search-by-location/:state/:city', (req, res)=>{
    res.send("Get Request for user specific  detail "+req.params.state+ " " + req.params.city)
})

router.get('/search/:key([0-9]{4})', (req,res,next)=>{
    res.send("get limit search "+ req.params.key)
})

router.get('/search-username/:key([a-zA-Z]{4})', (req,res,next)=>{
    res.send("get limit search "+ req.params.key)
})
 
router.get('*', (req,res)=>{
    wildObj = {
        statusCode:404,
        satusMsg: "URL not found"
    }
    // res.send("URL NOT Found")
    res.send(wildObj)
})

module.exports = router