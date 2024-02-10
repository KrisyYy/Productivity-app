const db = require('../models/index');
const Task = db.tasks;


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

exports.create = (req, res) => {
    if (!req.body.name) {
        req.status(400).send({
            message: "Task can't be empty"
        })
    }

    const task = {
        creatorId: req.userId,
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline
    }

    console.log(task)
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

// TODO create tag