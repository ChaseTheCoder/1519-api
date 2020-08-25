const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    link: {
        type: String,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    }
});

const ArticleSchema = mongoose.model('Article', articleSchema);

module.exports = Article;