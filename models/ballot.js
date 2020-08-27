const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BallotSchema = new Schema({
    question: String,
    type: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]
});

const Ballot = mongoose.model('Ballot', BallotSchema);

module.exports = Ballot;