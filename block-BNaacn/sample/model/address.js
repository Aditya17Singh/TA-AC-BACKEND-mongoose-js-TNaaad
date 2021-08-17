var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: {
        type: Schema.Types.ObjectId
    }
},{timestamps: true})

var address = mongoose.model('Address' , addressSchema)

module.exports = address;