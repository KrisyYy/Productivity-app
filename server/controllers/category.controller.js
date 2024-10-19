const db = require("../models/index");
const Category = db.categories;
const Task = db.tasks;
const TaskCategories = db.taskcategories;

exports.findAll = async (req, res, next) => {
	try {
		const data = await Category.findAll({ where: { userId: req.userId } });
		return res.status(200).send(data);
	} catch (error) {
		next(error);
	}
};

exports.findTasksByCategory = async (req, res, next) => {
	try {
		const data = await Category.findByPk(req.params.id, { include: [Task] });

		if (data) {
			return res.status(200).send(data.tasks);
		} else {
			return res.status(404).send({ message: "Category not found" });
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

		const category = {
			userId: req.userId,
			name: req.body.name,
		};

		const data = await Category.create(category);
		return res.status(201).send(data);
	} catch (error) {
		next(error);
	}
};

exports.addTaskToCategory = async (req, res, next) => {
	try {
		const { taskId, categoryId } = req.body;

		await TaskCategories.create({ task_id: taskId, category_id: categoryId });
		return res.status(201).send({ message: "Task added to category successfully" });
	} catch (error) {
		next(error);
	}
};

exports.update = async (req, res, next) => {
	try {
		const num = await Category.update(req.body, { where: { id: req.params.id } });

		if (num > 0) {
			return res.status(200).send({ message: "Category updated successfully" });
		} else {
			return res.status(404).send({ message: "Category not found" });
		}
	} catch (error) {
		next(error);
	}
};

exports.delete = async (req, res, next) => {
	try {
		const num = await Category.destroy({ where: { id: req.params.id } });

		if (num == 1) {
			return res.status(200).send({ message: "Category deleted successfully" });
		} else {
			return res.status(404).send({ message: "Category not found" });
		}
	} catch (error) {
		next(error);
	}
};

exports.removeTaskFromCategory = async (req, res, next) => {
	try {
		const { taskId, categoryId } = req.body;
		const num = await TaskCategories.destroy({ where: { task_id: taskId, category_id: categoryId } });

		if (num == 1) {
			return res.status(200).send({ message: "Task removed from category successfully" });
		} else {
			return res.status(404).send({ message: "Task or Category not found" });
		}
	} catch (error) {
		next(error);
	}
};
