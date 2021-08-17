var require = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String
})

var article = mongoose.model('Article' , articleSchema);

module.exports = article;