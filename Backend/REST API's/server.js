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

// Post data -
let id = 4;
let posts = [
  { 
    id: 1,
    username: "@stevejobs",
    content: "Everybody should learn to program a computer, because it teaches you how to think."
  },
  { 
    id: 2,
    username: "@billgates",
    content: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."
  },
  { 
    id: 3,
    username: "@kentbeck",
    content: "I’m not a great programmer; I’m just a good programmer with great habits."
  },
  { 
    id: 4,
    username: "@donaldknuth",
    content: "Premature optimization is the root of all evil."
  }
];

app.get("/", (req, res) => {
    res.send("Root Path");
})

// API for main page (showcasing all posts) -
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// New post form page
app.get("/posts/new", (req, res) => {
    res.render("newForm.ejs")
})

// API for creating new post
app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    posts.push({ id: ++id, username, content });
    res.redirect("/posts");
});

// API for getting specific post details -
app.get("/posts/:id", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log("Server ruuning at: ", PORT);
})