const express = require("express");
const auth = require("../controllers/auth.controller");
const router = express.Router();
const { checkUser } = require("../middleware/userAuth");

router.post("/signup", checkUser, auth.signUp);
router.post("/signin", auth.signIn);

module.exports = router;
