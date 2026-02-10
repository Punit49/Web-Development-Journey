import express from "express";
import mysql from "mysql2";
import { count } from "node:console";
import { connect } from "node:http2";
import methodOverride  from "method-override";
import { fileURLToPath } from "url";
import path from "path";
import { v4 as uuid } from "uuid";
const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "public"))); 

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  database: 'delta_app',
  password: "Punit1234!@" 
});

// Show count
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("index.ejs", { count });
        })
    } catch(err){
        console.error(err);
        res.send(`Error - ${err}`);
    }
});

// Get all users details -
app.get("/users", (req, res) => {
    let q = `SELECT * FROM user`;

    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            res.render("users.ejs", { users });
        })
    } catch(err){
        console.error(err);
        res.send(`Error - ${err}`);
    }
})

// Edit username -
app.get("/user/:id/edit", (req, res) => {
    let id = req.params.id;
    let q = `SELECT * FROM user where id = '${id}'`;
    
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch(err){
        console.error(err);
        res.send(`Error - ${err}`);
    }
}) 

app.patch("/user/:id", (req, res) => {
    let username = req.body.username.trim();
    let password = req.body.password.trim();
    let id = req.params.id;

    if(username && password){
        let q = `SELECT * FROM user WHERE id = '${id}'`;
        try{
            connection.query(q, (err, user) => {
                if(err) throw err;
                let pw = user[0].password;
                if(pw === password){
                    let q2 = `UPDATE user SET username ='${username}' WHERE id='${id}'`; 

                    try{
                        connection.query(q2, (err, result) => {
                            if(err) throw err;
                            console.log("Update successful");
                            res.redirect("/users");
                        })
                    } catch(err){ 
                        console.error(err);
                        res.send("Update failed");
                    }

                } else {
                    res.status(401).render("error.ejs", {content: "Incorrect username or password"});
                }
            })       
        } catch (err) { 
            console.error(err); 
            res.send(err);
        }
    } else {
        res.status(401).render("error.ejs", {content: "Incorrect username or password"});
    }
})

// insert new user -
app.get("/user/new", (req, res) => {
    res.render("newUser.ejs");
})

app.post("/user", (req, res) => {
    let {username, email, password} = req.body;
    let q = `INSERT INTO user  (id, username, email, password) VALUES (?, ?, ?, ?)`;
    let data = [uuid(), username, email, password];

    try{
        connection.query(q, data, (err, result) => {
            if(err) {
                console.error(err); 
                return res.render("error.ejs", {content: err});
            }
            console.log("User added!");
            res.redirect("/users");
        })
    } catch (err) {
        console.error(err);
        return res.render("error.ejs", {content: err});
    } 
})

// Delete user -
app.get("/user/:id/delete", (req, res) => {
    let id = req.params.id;
    let q = `SELECT * FROM user where id = '${id}'`;

    try{
        connection.query(q, (err, user) => {
            if(err) throw err;
            if(user[0]) {
                res.render("delete.ejs", { user: user[0] });
            } else {
                throw new Error("User does not exists!");
            } 
        })
    } catch(err) { 
        console.error(err);
        res.send(err);
    }
})

app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    let {email, password} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    if(email !== "" && password !== "") {
        try{
            connection.query(q, (err, user) => {
                if(err) throw err;
                if(email !== user[0].email || password !== user[0].password){
                    res.render("error.ejs", {content: "Email or Password is incorrect"});
                } else { 
                    let q2 = `DELETE FROM user WHERE id='${id}'`;

                    try{
                        connection.query(q2, (err, result) => {
                            if(err) throw err;
                            console.log("Deletion Successful");
                            res.redirect("/users");
                        })
                    } catch(err) {
                        console.error(err);
                        res.send(err);
                    }
                }
            })
        } catch(err) {
            console.error(err);
            res.send(err);
        }
    } else {
        res.render("error.ejs", {content: "Email or Password is incorrect"});
    }
})

app.listen(PORT, () => {
    console.log("Server running on:", PORT);
})
