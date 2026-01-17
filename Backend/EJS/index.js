const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

// Setting view engine to ejs, for converting templates into dynamic pages.
app.set("view engine", "ejs");

// Setting path for views directory - telling express, you'll find all template files here 
app.set("views", path.join(__dirname, "/views"));

// rendering home page using ejs
app.get("/", (req, res) => {
    res.render("home.ejs");
})

// Passing data to ejs -
app.get("/rollDice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceVal });
})

app.listen(PORT, () => {
    console.log("Server Listening on: ", PORT);
}) 