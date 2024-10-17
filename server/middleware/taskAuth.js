const db = require("../models");

const Task = db.tasks;

exports.isTaskCreator = async (req, res, next) => {
	Task.findByPk(req.params.id)
		.then((task) => {
			if (!task) {
				return res.status(404).json({ message: "Task not found" });
			}
			if (task.creatorId !== req.userId) {
				return res.status(403).json({ message: "Unauthorized" });
			}
			next();
		})
		.catch((error) => {
			next(error);
		});
};
