const express = require("express");
const tasks = require("../controllers/task.controller");
const router = express.Router();
const jwtAuth = require("../middleware/jwtAuth");
const { isTaskCreator } = require("../middleware/taskAuth");

router.get("/", tasks.findAll);

router.get("/:id", tasks.findOne);

router.post("/", jwtAuth.verifyToken, tasks.create);

router.put("/:id", jwtAuth.verifyToken, isTaskCreator, tasks.update);

router.delete("/:id", jwtAuth.verifyToken, isTaskCreator, tasks.delete);

module.exports = router;
