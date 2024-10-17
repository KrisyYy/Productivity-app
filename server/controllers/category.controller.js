const db = require("../models/index");
const Category = db.categories;
const Task = db.tasks;

exports.findAll = (req, res, next) => {
	Category.findAll({ where: { userId: req.userId } })
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((error) => {
			next(error);
		});
};

exports.findOne = (req, res, next) => {
	Category.findByPk(req.params.id, { include: [Task] })
		.then((data) => {
			if (data) {
				res.status(200).send(data.tasks);
			} else {
				res.status(404).send({ message: "Category not found" });
			}
		})
		.catch((error) => {
			next(error);
		});
};

exports.create = (req, res, next) => {
	if (!req.body.name) {
		return req.status(400).send({ message: "Name can't be empty" });
	}

	const category = {
		userId: req.userId,
		name: req.body.name,
	};

	Category.create(category)
		.then((data) => {
			res.status(201).send(data);
		})
		.catch((error) => {
			next(error);
		});
};

exports.update = (req, res, next) => {
	Category.update(req.body, { where: { id: req.params.id } })
		.then((num) => {
			if (num == 1) {
				res.status(200).send({ message: "Category updated successfully" });
			} else {
				res.status(404).send({ message: "Category not found" });
			}
		})
		.catch((error) => {
			next(error);
		});
};

exports.delete = (req, res, next) => {
	Category.destroy({ where: { id: req.params.id } })
		.then((num) => {
			if (num == 1) {
				res.status(200).send({ message: "Category deleted successfully" });
			} else {
				res.status(404).send({ message: "Category not found" });
			}
		})
		.catch((error) => {
			next(error);
		});
};
