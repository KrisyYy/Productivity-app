const express = require("express");
const users = require("../controllers/user.controller");
const userAuth = require('../middleware/userAuth');
const router = express.Router();

router.post('/signup', userAuth.saveUser, users.signUp);

router.post('/login', users.login);

module.exports = router;