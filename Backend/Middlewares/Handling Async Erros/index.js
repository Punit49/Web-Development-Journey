const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const ExpressError = require("./ExpressError.js");
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
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}



// Root Route
app.get("/", (req, res, next) => {
    res.send("Root is working");
});

// Index Route
app.get("/chats", async (req, res, next) => {
    try{
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    } catch(err){
        next(err);
    }
});

// Create route
app.get("/chats/new", (req, res, next) => {
    try{
        // throw new ExpressError(404, "Page Not Found");
        res.render("newChat.ejs");
    } catch(err){   
        next(err);
    }
});

app.get("/test", async (req, res, next) => {
    setTimeout(() => {
        try{
            throw new Error("boom");
        } catch(err){
            next(err);
        }
    }, 1000);
});

app.post("/chats", async (req, res, next) => {
    try{
        let {From, To, Message} = req.body;
        await Chat.insertOne({
            from: From, 
            to: To,  
            message: Message.trim(), 
            created_at: new Date()
        })
        res.redirect("/chats");
    } catch(err) {
        next(err);
    }
})

// Update route
app.get("/chats/:id/edit", async (req, res, next) => {
    try{
        let id = req.params.id;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch(err){
        next(err);
    }
});

app.put("/chats/:id", async (req, res, next) => {
    try {
        let id = req.params.id;
        let Message = req.body.message; 
        if(!Message) throw new Error("Message is Empty");
        await Chat.findByIdAndUpdate(id, {message: Message}, {runValidators: true});
        res.redirect("/chats");
    } catch(err){
        next(err);
    }
})

// Destroy Route
app.delete("/chats/:id", async (req, res, next) => {
    try{
        let id = req.params.id;
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    } catch(err){
        next(err);
    }
});

// Error Handling 
// ? WrapAsync function -
function wrapAsync(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err));
    }
}

app.get("/chats/:id", wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let chat = await Chat.findById(id);

    if(!chat) {
        next(new ExpressError(404, "Invalid Chat"));
    }
    res.render("show.ejs", { chat });
})); 

const handleValidationError = (err) => {
    console.log("This is a validation error, Please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationError(err);
    }
    next(err);
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.log("Error Handler Activated");
    let { status = 500, message = "Internal Server Error!" } = err;
    res.status(status).send(message);
});
 
app.listen(PORT, () => {
    console.log("Server is listening on:", PORT);
})