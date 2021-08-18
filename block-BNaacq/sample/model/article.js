var require = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: String,
    likes: {type: Number , default: 0},
    author: Schema.Types.ObjectId,
    comments: String,
}, {timestamps: true});

var article = mongoose.model('Article' , articleSchema);

module.exports = article;