const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(cookieParser());

// Getting routes file
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');

// For setting env and db url
const dotenv = require('dotenv');
dotenv.config();

// Getting db function - db related work will be handled in this file
const connectToDB = require('./config/db');
connectToDB();

// for rendering html
app.set('view engine', 'ejs');

// Middleware to get post data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Every router in userRouter must start with /user
app.use('/user', userRouter);
app.use('/', indexRouter);

// Port number
app.listen(3000, () => {
    console.log("Runnging on 3000");
});