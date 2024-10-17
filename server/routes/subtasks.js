const express = require("express");
const subtasks = require("../controllers/subtask.controller");
const router = express.Router();

router.get("/", subtasks.findAll);
router.post("/", subtasks.create);
router.put("/:id", subtasks.update);
router.delete("/:id", subtasks.delete);

module.exports = router;
