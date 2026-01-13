const mongoose = require('mongoose');

// In production code we didn't write url like this, instead write in env 
const connection = mongoose.connect('mongodb://0.0.0.0/Backend').then(() => {
    console.log("connected to db");
});

module.exports = connection;