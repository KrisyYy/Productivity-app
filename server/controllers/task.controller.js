const db = require('../models/index');
const Task = db.tasks;

exports.create = (req, res) => {
    if (!req.body.name) {
        req.status(400).send({
            message: "Task can't be empty"
        })
    }

    const task = {
        userId: "7877345b-65b8-4338-9825-a7cd2850d4b8", // TODO hardcoded userId
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline
    }

    Task.create(task)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        })
    })
}

exports.findAll = (req, res) => {
    Task.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        })
    })
}

exports.findOne = (req, res) => {
     Task.findByPk(req.params.id)
     .then(data => {
        if (data) {
            res.send(data);
        }
        else {
            res.send({
                message: "Task not found"
              });
        }
     })
     .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        })
    })
}

exports.update = (req, res) => {
    Task.update(req.body, { 
        where: {id: req.params.id} 
    })
    .then((num => {
        if (num == 1) {
            res.send({
                message: "Task updated successfully"
              });
        }
        else {
            res.send({
                message: "Task not found"
              });
        }
    }))
    .catch(err => {
        res.status(500).send({
          message: "Could not update task"
        });
      });
}

exports.delete = (req, res) => {
    Task.destroy({ 
        where: {id: req.params.id}
    })
    .then((num => {
        if (num == 1) {
            res.send({
                message: "Task deleted successfully"
              });
        }
        else {
            res.send({
                message: "Task not found"
              });
        }
    }))
    .catch(err => {
        res.status(500).send({
          message: "Could not delete task"
        });
      });
}