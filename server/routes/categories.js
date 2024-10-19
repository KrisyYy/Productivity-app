const express = require("express");
const categories = require("../controllers/category.controller");
const { verifyToken } = require("../middleware/jwtAuth");
const router = express.Router();

router.use(verifyToken);

router.get("/", categories.findAll);
router.get("/:id/tasks", categories.findTasksByCategory);
router.post("/", categories.create);
router.post("/:categoryId/tasks/:taskId", categories.addTaskToCategory);
router.put("/:id", categories.update);
router.delete("/:id", categories.delete);
router.delete("/:categoryId/tasks/:taskId", categories.removeTaskFromCategory);

module.exports = router;
