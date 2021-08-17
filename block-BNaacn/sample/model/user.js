var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name : String,
    email:{type: String , lowercase: true},
    age: {type:Number , default: 0},
    password:{type: String , minlength: 5},
    createdAt: {type: Date , default: new Date()},
    favourite: [String]
},{timestamps: true})
var user = mongoose.model('User' , userSchema)

module.exports = user;
