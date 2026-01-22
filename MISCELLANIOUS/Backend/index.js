const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    console.log(req.query);
    res.send("Get request");
})

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`Welcome ${user}, your password is ${password}`);
})

app.listen(PORT, () => {
    console.log("server is listening on port: ", PORT);
})