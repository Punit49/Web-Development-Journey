const express = require('express');

const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// For new user registration - 
router.get('/register', (req, res) => {
    console.log(45);
    res.render('register');
});

router.post('/register', 
    // Validators for checking format
    body('email').trim().isEmail().isLength({min: 13}),
    body('username').trim().isLength({min: 5}),
    body('password').trim().isLength({min: 8}),
    
    async (req, res) => {
        console.log(1);
        const errors = validationResult(req);

        // If data is incorrect code will return from here.
        if(!errors.isEmpty()){
            console.log(errors);
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid Data'
            })
        };

        const {username, email, password} = req.body;
        const hashPW = await bcrypt.hash(password, 10); // 10 is no. of hash rounds more rounds means more security with taking more performance.

        const newUser = await userModel.create({
            username,
            email,
            password: hashPW
        });

        res.json(newUser);
    }
);

// For login user
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', 
    body('email').trim().isEmail().isLength({min: 13}),
    body('password').trim().isLength({min: 8}),

    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                error: errors.array(),
                message: "Invalid login data"
            })
        }

        const {username, email, password} = req.body;

        // Finding email of user in DB
        const user = await userModel.findOne({
            email: email 
        })
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch){
            return res.status(400).json({
                message: "Email or password is incorrect"
            })
        }

        if(!user){
            return res.status(400).json({
                message: "Email or password is incorrect"
            });
        }
        
        // Finding password of user in DB

        // if user is valid then we need a token & to generate token use npm i jsonwebtoken
        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username    
        }, 
            process.env.JWT_SECRET,
        )

        // res.json({
        //     token
        // })

        // For using cookies use npm i cookie-parser 
        res.cookie('token', token);
        res.send("logged in");
    }
)
module.exports = router;