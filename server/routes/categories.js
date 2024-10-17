const express = require("express");
const categories = require("../controllers/category.controller");
const { verifyToken } = require("../middleware/jwtAuth");
const router = express.Router();

router.use(verifyToken);

router.get("/", categories.findAll);
router.get("/:id", categories.findOne);
router.post("/", categories.create);
router.put("/:id", categories.update);
router.delete("/:id", categories.delete);

module.exports = router;
