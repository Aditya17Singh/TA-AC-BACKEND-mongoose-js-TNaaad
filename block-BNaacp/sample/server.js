var express = require('express');
var mongoose = require("mongoose");
var User = require('./model/user');

//connect to database
mongoose.connect("mongodb://localhost/sample" , 
{useNewUrlParser: true ,useUnifiedTopology: true},
(err) => {
    console.log(err ? err : "connected to database");
})


var app = express();

//middleware
app.use(express.json());


//routes
app.get("/" , (req,res) => {
    res.send('Welcome');
})
app.post("/users" , (req,res,next) => {
    //capture the data
    console.log(req.body);
    //save the data to database
    User.create(req.body, (err,user) => {
        console.log(err)
        res.json(user)
    });
    //send response
})

app.get('/users' , (req,res) => {
    User.findOne({"name" : "Aditya1"}, (err,users) => {
        console.log(err)
        res.json(users)
    })
})
app.get('/users/:id' , (req,res) => {
    //capture the id
    var id = req.params.id;
    User.findById(id , (err,user) => {
        console.log(err)
        res.json(user);
    })
})

//update
app.put('/users/:id', (req,res) => {
    console.log(req.body);
    var id = req.params.id;
    User.findByIdAndUpdate({_id:id} , req.body , {new: true} , (err , updateproduct) => {
        console.log(err);
        res.json(updateproduct)
    })
})

//delete
app.delete("/users/:id", (req, res) => {
    var userId = "some id from database";
    User.findByIdAndDelete(req.params.id, (err, delproduct) => {
      if (err) return next(err);
      res.send("user deleted");
    });
  });

//listening
app.listen(4000 , () => {
    console.log("server is listening on port 4k");
})