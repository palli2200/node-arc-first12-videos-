var express = require("express")
var app = express()

var products = require("./routes/products")
app.use('/products', products)

var user = require("./routes/users")
app.use('/user', user)

app.get("/getUsers", (rqe,res,next)=>{
    res.send('Hello World')
})

app.get("/getTraining", (rqe,res,next)=>{
    var trainingObj = [{
        trainingID: 10,
        trainingName:"Express JS",
        active:true,
    }]
    res.send(trainingObj)
})


app.listen(3000)