const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
    link: {
        type: String,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;