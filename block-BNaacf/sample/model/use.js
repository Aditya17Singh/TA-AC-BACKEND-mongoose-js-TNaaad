var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fields: [String],
    marks:[Number]
}, {timestamps: true})

var address = new Schema({
    village: String,
    city: String,
    state:String,
    pin: Number,
    user: Schema.Types.ObjectId
})

// var user = {
//     name: "Rahul",
//     age: 20,
//     sports: ['cricket' , 'football']
// }
