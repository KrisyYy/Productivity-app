const db = require("../models/index");
const Task = db.tasks;
const Category = db.categories;

exports.findAll = async (req, res, next) => {
	try {
		const data = await Task.findAll({ where: { creatorId: req.userId } });
		return res.status(200).send(data);
	} catch (error) {
		next(error);
	}
};

exports.findOne = async (req, res, next) => {
	try {
		const data = await Task.findByPk(req.params.id);

		if (data) {
			return res.status(200).send(data);
		} else {
			return res.status(404).send({ message: "Task not found" });
		}
	} catch (error) {
		next(error);
	}
};

exports.findCategoriesOfTask = async (req, res, next) => {
	try {
		const data = await Task.findByPk(req.params.id, { include: [Category] });

		if (data) {
			return res.status(200).send(data.categories);
		} else {
			return res.status(404).send({ message: "Task not found" });
		}
	} catch (error) {
		next(error);
	}
};

exports.create = async (req, res, next) => {
	try {
		if (!req.body.name) {
			return res.status(400).send({ message: "Name can't be empty" });
		}

		const task = {
			creatorId: req.userId,
			name: req.body.name,
			description: req.body.description,
			deadline: req.body.deadline,
		};

		const data = await Task.create(task);
		return res.status(201).send(data);
	} catch (error) {
		next(error);
	}
};

exports.update = async (req, res, next) => {
	try {
		const num = await Task.update(req.body, { where: { id: req.params.id } });

		if (num > 0) {
			return res.status(200).send({ message: "Task updated successfully" });
		} else {
			return res.status(404).send({ message: "Task not found" });
		}
	} catch (error) {
		next(error);
	}
};

exports.delete = async (req, res, next) => {
	try {
		const num = await Task.destroy({ where: { id: req.params.id } });

		if (num == 1) {
			return res.status(200).send({ message: "Task deleted successfully" });
		} else {
			return res.status(404).send({ message: "Task not found" });
		}
	} catch (error) {
		next(error);
	}
};
