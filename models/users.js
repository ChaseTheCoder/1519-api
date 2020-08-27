const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

let User = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        minlength: 4,
        required: [true, 'Password is required'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;