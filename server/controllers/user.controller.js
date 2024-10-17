const db = require("../models/index");
const User = db.users;

exports.getUser = (req, res, next) => {
	User.findByPk(req.params.id)
		.then((data) => {
			if (data) {
				res.status(200).send(data);
			} else
				res.status(404).send({
					message: "User not found",
				});
		})
		.catch((error) => {
			next(error);
		});
};
