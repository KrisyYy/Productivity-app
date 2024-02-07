const jwt = require('jsonwebtoken');
const db = require("../models");
require('dotenv').config();
const User = db.users;

exports.verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided"
        })
    }

    jwt.verify(token, process.env.secretKey,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }
            req.userId = decoded.id;
            next();
        })
};