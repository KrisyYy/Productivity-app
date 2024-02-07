const express = require("express");
const users = require("../controllers/auth.controller");
const userAuth = require('../middleware/userAuth');
const router = express.Router();

router.post('/signup', userAuth.checkUser, users.signUp);

router.post('/signin', users.signIn);

module.exports = router;