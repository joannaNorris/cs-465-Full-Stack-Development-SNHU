const mongoose = require('mongoose');
const User = require('../models/user');

//Function to handle user registration
exports.register = async (req, res) => {
    if (!req.body.email || !req.body.name || !req.body.password) {
        return res
            .status(400)
            .json({ "message": 'All fields required.' });
    }

    const user = new User(
        {
            name: req.body.name, //set username
            email: req.body.email, //set email
            password: '' //start with empty password
        });
    user.setPassword(req.body.password); //set password using setPassword method
    const q  = await user.save(); //save user to database

    if (!q) {
        //database returned no data
        return res
            .status(400)
            .json(err);
    }
    else {
        //return new user token
        const token = user.generateJWT(); //generate JWT for new user
        return res
            .status(200)
            .json( token );
    }
};

module.exports = { register };