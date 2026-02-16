const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection Successful!");
}).catch(err => {
    console.log("Error - ", err);
})

// Connceting to DB
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Model
const User = mongoose.model("User", userSchema);

// ? Insertion of single data
    const user1 = new User({
        name: "Punit", 
        email: "therealpunit5@gmail.com",
        age: 21, 
    });

    user1.save().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

// ? Insertion of multiple data
    User.insertMany([
        {name: "Tony", email: "tony@gmail.com", age: 49}, 
        {name: "Bruce", email: "bruce@gmail.com", age: 35},
        {name: "Peter", email: "peter@gmail.com", age: 22}
    ]).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

// ? find data - return query instead of promise (thenable)

// find() - get all data
    // User.find().then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

// find() - based on condition
    // User.find({age: {$gte: 35}}).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

// findOne()
    // User.findOne({age: {$gte: 35}}).then(res => {
    //     console.log(res);  
    // }).catch(err => {
    //     console.log(err);
    // })

    // User.findOne({_id: "6992e3627d07c0bde81abe7f"}).then(res => {
    //     console.log(res);  
    // }).catch(err => {
    //     console.log(err);
    // })

// findById()
    // User.findById("6992e3627d07c0bde81abe7f").then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

// ? Update - 
    // User.updateOne({name: "Tony"}, {email: "starkTony@gmail.com", age: 51})
    //     .then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // User.updateMany({age: {$gte: 35}}, {age: 45}).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

// * To get updated data as result, use findOneAndUpdate and findByIdAndUpdate()
    // User.findOneAndUpdate({name: "Bruce"}, {age: 35}).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

    // User.findByIdAndUpdate("6992de624dadf215a3bfd976", {email: "therealpunit5@gmail.com"}, {new: true})
    //     .then(res => {
    //         console.log(res);
    //     }).catch(err => {
    //         console.log(err);
    //     });

// ? Delete

    // User.deleteOne({name: "Bruce"}).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

    // User.deleteMany({age: {$gte: 22}}).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // });

    // User.findByIdAndDelete("6992de624dadf215a3bfd976").then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

    // User.findOneAndDelete({age: {$eq: 35}}).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })

