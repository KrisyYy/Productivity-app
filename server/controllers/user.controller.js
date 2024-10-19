const db = require("../models/index");
const User = db.users;

exports.getUser = async (req, res, next) => {
	try {
		const data = await User.findByPk(req.params.id);

		if (data) {
			return res.status(200).send(data);
		} else {
			return res.status(404).send({
				message: "User not found",
			});
		}
	} catch (error) {
		next(error);
	}
};
