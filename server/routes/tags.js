const express = require("express");
const tags = require("../controllers/tag.controller");
const router = express.Router();

router.get("/", tags.findAll);
router.post("/", tags.create);
router.put("/:id", tags.update);
router.delete("/:id", tags.delete);

module.exports = router;
