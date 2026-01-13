const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: [3, 'Username must be 3 char long'],
        required: true,
        lowercase: true, 
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        minlength: [13, 'Invalid Email'],
        required: true,
        lowercase: true, 
        trim: true,
    },
    password: {
        type: String,
        minlength: [5, 'Invalid PW'],
        required: true,
        trim: true,
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;