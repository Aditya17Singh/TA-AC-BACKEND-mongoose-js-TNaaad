var require = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    createdAt: {type: Date , default: new Date()},
    likes: {type: Number, default: 0},
})

var article = mongoose.model('Article' , articleSchema);

module.exports = article;