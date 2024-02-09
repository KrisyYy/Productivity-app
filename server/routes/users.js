const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.get("/:id", users.getUser);

module.exports = router;