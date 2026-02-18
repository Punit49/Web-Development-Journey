const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride("_method"));

main().then(() => console.log("Connection Successful"))
      .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Root Route
app.get("/", (req, res) => {
    res.send("Root is working");
});

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
})

// Create route
app.get("/chats/new", (req, res) => {
    res.render("newChat.ejs");
})

app.post("/chats", async (req, res) => {
    let {From, To, Message} = req.body;
    await Chat.insertOne({
        from: From, 
        to: To, 
        message: Message.trim(), 
        created_at: new Date()
    })
    res.redirect("/chats");
})

// Update route
app.get("/chats/:id/edit", async (req, res) => {
    let id = req.params.id;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
    let id = req.params.id;
    let Message = req.body.message; 
    await Chat.findByIdAndUpdate(id, {message: Message}, {runValidators: true});
    res.redirect("/chats");
})

// Destroy Route
app.delete("/chats/:id", async (req, res) => {
    let id = req.params.id;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})
 
app.listen(PORT, () => {
    console.log("Server is listening on:", PORT);
})