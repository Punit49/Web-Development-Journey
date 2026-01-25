const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

// Cofigurations -
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares -
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes -
app.get("/", (req, res) => {
    res.send("Root Path");
})

app.listen(PORT, () => {
    console.log("Server ruuning at: ", PORT);
})