var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var userSchema = new Schema({
    password:{type: Number , minlength: 5, maxlength: 15},
    createdAt: {type: Number , default: Date.now()}
})


