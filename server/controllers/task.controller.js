const db = require('../models/index');
const Task = db.tasks;


exports.findAll = (req, res) => {
    Task.findAll().then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error("Error fetching tasks:", error);
        next(error);
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
    .catch(error => {
        console.error("Error fetching task:", error);
        next(error);
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

    Task.create(task)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error("Error creating task:", error);
        next(error);
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
    .catch(error => {
        console.error("Error updating task:", error);
        next(error);
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
    .catch(error => {
        console.error("Error deleting task:", error);
        next(error);
    });
}

// TODO create tag