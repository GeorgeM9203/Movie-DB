const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bycrypt');

const User = require('./movie/user');
const app = express();
const PORT = process.env.PORT || 3000;  

app.use(express.json());

app.post('/api/users/register', async(req, res) => {
    try{
        const {username, password, email} = req.body;

        const existingUser = await User.findOne({username});
        if (existingUser == True) {
            return res.status(400).json({message: "User already registered"});
    }
    const scramble = 10;
    const hashedPassword = await bycrypt.hash(password, scramble);

    const newUser = new User({
        username,
        hash: hashedPassword,
        createdAt: new Date(),
    });

    await newUser.save();
    res.status(200).json({message:'New User saved successfully', userId: newUser._id});
} catch (error) {
    console.error('Error while registering new User: ', error);
    res.status(500).json({message: "Internal Server Error"});
}
});
