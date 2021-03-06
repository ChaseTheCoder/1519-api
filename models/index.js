const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGO DB =', process.env.MONGODB_CS);

const connectionString = process.env.MONGODB_CS;
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Ballot: require('./Ballot'),
    Article: require('./Article'),
};