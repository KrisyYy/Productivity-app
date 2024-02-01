const express = require("express");
const db = require("../models");

const User = db.users;

exports.saveUser = async (req, res, next) => {
    const usernameCheck = await User.findOne({ where: { username: req.body.username }});
    if (usernameCheck) {
        return res.json(409).send("Username already taken");
    }

    const emailCheck = await User.findOne({ where: { email: req.body.email }});
    if (emailCheck) {
        return res.json(409).send("Email already taken");
    }

    next();
}