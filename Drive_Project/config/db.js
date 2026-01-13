const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to db");
    })
}

// mongoose.connection.once('open', async () => {
//     // This code runs after your existing connection is established
//     try {
//       await mongoose.connection.db.collection('users').dropIndex('email_1');
//       console.log('Email index dropped successfully');
//     } catch (error) {
//       // Index might not exist, which is fine
//       console.log('No email index to drop or already dropped:', error.message);
//     }
// });

module.exports = connectToDB;