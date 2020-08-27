const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    link: String,
    postedAt: {
        type: Date,
        default: Date.now,
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;