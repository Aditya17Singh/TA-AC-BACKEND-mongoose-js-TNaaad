var express = require('express');
var mongoose = require("mongoose")

//connect to database
mongoose.connect("mongodb://localhost/sample" , 
{useNewUrlParser: true ,useUnifiedTopology: true},
(err) => {
    console.log(err ? err : "connected to database");
})


var app = express();


//routes
app.get("/" , (req,res) => {
    res.send('Welcome');
})
app.get("/users" , (req,res) => {
    res.send('users page');
})

app.use((req,res,next) =>{
    res.send("page not found")
})

//listening
app.listen(4000 , () => {
    console.log("server is listening on port 4k");
})