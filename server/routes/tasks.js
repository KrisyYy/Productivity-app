const express = require("express");
const tasks = require("../controllers/task.controller");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtAuth");
const { isTaskCreator } = require("../middleware/taskAuth");

router.use(verifyToken);

router.get("/", tasks.findAll);
router.get("/:id", isTaskCreator, tasks.findOne);
router.post("/", tasks.create);
router.put("/:id", isTaskCreator, tasks.update);
router.delete("/:id", isTaskCreator, tasks.delete);

module.exports = router;
