const express = require("express");
const auth = require("../controllers/auth.controller");
const userAuth = require('../middleware/userAuth');
const router = express.Router();

router.post('/signup', userAuth.checkUser, auth.signUp);

router.post('/signin', auth.signIn);

module.exports = router;