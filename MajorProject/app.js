const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const app = express();
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/staybnb";

main().then(res => {
    console.log("Connected To DB");
}).catch(err => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Root");
});

app.get("/test", async (req, res) => {
    let newListing = new Listing({
        title: "all Listing 3",
        description: "punit sahu",
        price: 190, 
        location: "Udaipur",
        country: "India"
    })

    await newListing.save();
    res.send("Data stored");
})

app.listen(PORT, () => {
    console.log("Server is running");
})