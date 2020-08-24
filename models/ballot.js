const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BallotSchema = new Schema({
    question: String,
    type: String
});

const Ballot = mongoose.model('Ballot', BallotSchema);

module.exports = Ballot;