const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hey, I am Middleware");
//     next(); // use return
//     console.log("after 1st next");
// });

// app.use((req, res, next) => {
//     console.log("Hey i am middleware 2");
//     next();
//     console.log("After 2nd next");
// })

// * Utility Middlewares -


app.get("/", (req, res) => {
    res.send("I am groot");
});

app.get("/temp", (req, res) => {
    console.log("temp")
    res.send("I am Temp");
});

app.listen(3000, () => {
    console.log("Server running on 3000");
})