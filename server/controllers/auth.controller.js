const bcrypt = require("bcrypt");
const db = require("../models/index");
const jwt = require("jsonwebtoken");

const User = db.users;

exports.signUp = async (req, res) => {
    console.log("Inside auth.controller");
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
    };

    const user = await User.create(userData);

    if (!user) {
        return res.status(409).send({ message: "Error registering user" });
    }

    return res.status(201).send({ message: "User registered successfully" });
}

exports.signIn = async (req, res) => {
    const user = await User.findOne({ where: {
            email: req.body.email
    }})

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid email or password"
        });
    }

    let token = jwt.sign({ id: user.id }, process.env.secretKey, {
        expiresIn: 86400 * 1000
    });

    res.cookie("jwt", token, { maxAge: 86400, httpOnly: true });
    
    return res.status(201).send({...user, accessToken: token});
}