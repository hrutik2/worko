const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../model/usermodel");
require("dotenv").config();

const userRoutes = express.Router();


userRoutes.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

   
    if (!name || !email || !password) {
        return res.status(400).send({ msg: "All fields are required" });
    }

    try {
       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ msg: "User already exists" });
        }

        else{
        const hashPassword = await bcrypt.hash(password, 5);

        
        const newUser = new User({ email, name, password: hashPassword });
        await newUser.save();

        return res.status(201).send({ msg: "User created successfully" });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
});


userRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;

  
    if (!email || !password) {
        return res.status(400).send({ msg: "Email and password are required" });
    }

    try {
        
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).send({ msg: "User does not exist" });
        }
        else{
        
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).send({ msg: "Invalid password" });
        }

       
        const token = jwt.sign({ userId: existingUser._id }, process.env.KEY, {
            expiresIn: "1d",
        });

        return res.status(200).send({ msg: "Login successful", token });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
});

module.exports = userRoutes;