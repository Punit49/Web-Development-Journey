import express from "express";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";
import { pipeline } from "stream";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

function dateFormat(date){
    return new Date(date).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })
}

let notes = [
    {
        id: uuidv4(),
        title: "Learn REST APIs",
        content: "Understand CRUD operations using Express without database.",
        createdAt: dateFormat(new Date().toISOString()),
        isPinned: false
    }, 
    {
        id: uuidv4(),
        title:  "Develop a notes app",
        content: "Create a simple notes app to practice REST APIs. The app should allow adding, editing, viewing, and deleting notes without using a database. Focus on clean code, validations, and proper API responses.",
        createdAt: dateFormat(new Date().toISOString()),
        isPinned: false
    }, 
    {
        id: uuidv4(),
        title:  "Express Basics",
        content: "Learn how Express works, including routing, middleware, request and response objects. Practice building simple APIs and understand how data flows through the application.",
        createdAt:  dateFormat(new Date().toISOString()),
        isPinned: false 
    },
]

// All notes (index route)
app.get("/notes", (req, res) => {
    res.status(200).render("index.ejs", { notes });
})

app.get("/notes/new", (req, res) => {
    res.status(200).render("newNote.ejs");
})

app.post("/notes/new", (req, res) => {
    let title = req.body.title.trim();
    let content = req.body.content.trim();
    if(title !== "" && content !== "") {
        notes.push({
            id: uuidv4(),
            title, 
            content, 
            createdAt: dateFormat(new Date().toISOString()),
            isPinned: false
        });
    }

    res.status(200).redirect("/notes");
})

// Dynamic routes - 
app.get("/notes/:id", (req, res) => {
    let id = req.params.id;
    let note = notes.find((note) => note.id === id);
    if(note) {
        res.status(200).render("expand.ejs", { note });
    } else {
        res.status(404).render("error.ejs");
    }
}) 
 
app.get("/notes/:id/edit", (req, res) => {
    let id = req.params.id;
    let note = notes.find((note) => note.id === id);
    if(note) {
        res.status(200).render("edit.ejs", { note });
    } else {
        res.status(404).render("error.ejs");
    }
})

app.patch("/notes/:id/edit", (req, res) => {
    let id = req.params.id;
    let title = req.body.title.trim();
    let content = req.body.content.trim();
    let note = notes.find((note) => note.id === id);

    if(note && note.title !== "" && note.content !== "") {
        note.title = title;
        note.content = content;
        res.status(200).redirect("/notes");
    } else{
        res.status(404).render("error.ejs");
    }
}) 

app.delete("/notes/:id", (req, res) => {
    let id = req.params.id;
    notes = notes.filter((note) => note.id !== id);
    res.redirect("/notes");
})

app.get("/notes/:id/pin", (req, res) => {
    let id = req.params.id;
    let pinItem = notes.find((note) => note.id === id);
    notes = notes.filter((note) => note.id !== id);
    if(!pinItem.isPinned) {
        notes.unshift(pinItem); 
    } else {
        notes.push(pinItem); 
    }
    pinItem.isPinned = !pinItem.isPinned;
    res.status(200).redirect("/notes");
})  
    
app.listen(PORT, () => {
    console.log("Server running on:", PORT)
})  