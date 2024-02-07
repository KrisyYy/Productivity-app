const express = require('express');
const tasks = require("../controllers/task.controller");
const router = express.Router();
const jwtAuth = require("../middleware/jwtAuth");

router.get('/', tasks.findAll);

router.get('/:id', tasks.findOne);

router.post('/', jwtAuth.verifyToken, tasks.create);

router.put('/:id', jwtAuth.verifyToken, tasks.update);

router.delete('/:id', jwtAuth.verifyToken, tasks.delete);

module.exports = router;