var express = require('express');

var router = express.Router();


router.get('/', (req, res)=>{
    res.send("Get Request for products")
})

router.get('/get-product-details', (req, res)=>{
    res.send("Get Request for products details")
})


module.exports = router