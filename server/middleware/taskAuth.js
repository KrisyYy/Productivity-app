const db = require("../models");

const Task = db.tasks;

exports.isTaskCreator = async (req, res, next) => {
	try {
		const id = req.params.id ?? req.params.taskId;
		if (!id) {
			return res.status(404).json({ message: "Task not found" });
		}

		const task = await Task.findByPk(id);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}

		if (task.creatorId !== req.userId) {
			return res.status(403).json({ message: "Unauthorized" });
		}

		next();
	} catch (error) {
		next(error);
	}
};
