const express = require('express'); // Getting express
const morgan = require('morgan');

const app = express();

// Connecting mongoDB -
const userModal = require('./modals/user');
const dbConnect = require('./config/db');

// ? Routing 
// * Basic
app.get('/', (req, res) => {
    res.render('page'); // Rendering page
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("contact page")
});

//* Dynamic routing
app.get("/user/:username/:age", (req, res) => {
    const username = req.params.username;
    const age = req.params.age;
    res.send(`Hello, ${username} Age is ${age}`);
});

// ? Middlewares [Every route must go through this function] [Custom middleware]
app.use((req, res, next) => {
    console.log("Middleware");
    
    const a = 10;
    const b = 5;
    console.log(a + b);
    
    // It'll keep reloading coz browser is waiting for response from server.
    return next();
})

// ? Morgan [3rd party] - Morgan is a middleware for logging HTTP requests, It helps to monitor incoming requests by automatically logging details like the request method, URL, response status, and response time. 
app.use(morgan('dev'));
// app.use(morgan('combined')); // More detailed

// ? Creating custome middleware for specific route -
app.get("/punit", (req, res, next) => {
    console.log(10+90);
    next(); // Passing control
}, (req, res) => {
    res.render('page');
});

// ? View Engine [Render html] [create views folder and add file (needs to be render) with .ejs]
app.set("view engine", 'ejs');

// ? Form Handling
// post - to fetch data from frontend 
// get - to send data to frontend from server
// By default any form hits get only and post can't read data.
// By default Express can't read data of post's body 

// * To get post's data use 2 inbuilt middleware -
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// * creating route for receiving data - 
app.post('/get-form-data', (req, res) => {
    console.log(req.body); // for post [if it is undefined add 2 builtin middlewares]
    // console.log(req.query); // for get
    res.send("Data recieved");
});

// ? Database
// * for using mongodb here -
// Use - npm i mongoose

// ? How to link css and js - Create a public folder and inside it create files to link and use this builtin middleware. [static files]
app.use(express.static("public"));

// ? Form handling using database - 
// * for rendering page
app.get('/register', (req, res) => {
    res.render('register');
}); 

// * for getting data and storing in db [create]
app.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    const newUser = await userModal.create({
        username: username,
        email: email,
        password: password
    });
    res.send(newUser);
});

// * Reading data from db 
app.get('/getUsers', (req, res) => {
    userModal.find({
        username: "champa" //condition
    }).then((users) => {
        res.send(users);
    })
});

// * Update operation -
app.get('/updateUser', async (req, res) => {
    await userModal.findOneAndUpdate({ //takes 2 objects
        username: "champa"
    }, {
        email: "champa1224@gmail.com"
    });

    res.send("user updated");
})

// *delete operation
app.get('/deleteUser', async (req, res) => {
    await userModal.findOneAndDelete({
        username: "champa"
    })
    res.send("user deleted");
})

app.listen(4000);