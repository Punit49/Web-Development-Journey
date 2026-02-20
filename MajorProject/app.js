const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/staybnb";

// Database connection
main().then(res => {
    console.log("Connected To DB");
}).catch(err => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

// Configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

// Root Route
app.get("/", (req, res) => {
    res.send("Root");
});

// Index Route
app.get("/listings", async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
}); 
 
// Create Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.post("/listings", async (req, res) => {
    await Listing.create(req.body.listing);
    console.log("Data Stored in DB");
    res.redirect("/listings");
});

// Update Route 
app.get("/listings/:id/edit", async (req, res) => {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
    let id = req.params.id;
    let listing = req.body.listing;
    await Listing.findByIdAndUpdate(id, listing, { runValidators: true });
    console.log("Update Successful");
    res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    console.log("Listing Deleted!");
    res.redirect("/listings");
});

// Read Route
app.get("/listings/:id", async (req, res) => {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}); 

 
// Testing Route
// app.get("/test", async (req, res) => {
//     let newListing = new Listing({
//         title: "all Listing 3",
//         description: "punit sahu",
//         price: 190, 
//         location: "Udaipur",
//         country: "India"
//     })

//     await newListing.save();
//     res.send("Data stored");
// })

app.listen(PORT, () => {
    console.log("Server is running");
})