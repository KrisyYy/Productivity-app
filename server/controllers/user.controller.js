const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

exports.signUp = async (req, res) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
    };

    const user = await User.create(userData);

    if (user) {
        let token = jwt.sign({id: user.id}, process.env.secretKey, {
            expiresIn: 1 * 24 * 60 * 60 * 1000
        })

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });

        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);

        return res.status(201).send(user);
    }
    else {
        return res.status(409).send("Details are not correct");
    }
}

exports.login = async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({ where: {
            email: req.body.email
    }})

    if (user) {
        const passIsEqual = await bcrypt.compare(req.body.password, user.password);

        if (passIsEqual) {
            let token = jwt.sign({ id: user.id }, process.env.secretKey, {
                expiresIn: 1 * 24 * 60 * 60 * 1000
            });

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });

            console.log("user", JSON.stringify(user, null, 2));
            console.log(token);
            
            return res.status(201).send(user);
        }
        else {
            console.log("Pass is not equal")
            return res.status(401).send("Authentication failed");
        }
    }
    else {
        console.log("User not found")
        return res.status(401).send("Authentication failed");
    }
}