const db = require("../models");

const User = db.users;

exports.checkUser = async (req, res, next) => {
	try {
		const usernameCheck = await User.findOne({ where: { username: req.body.username } });
		if (usernameCheck) {
			return res.json(409).send("Username already taken");
		}

		const emailCheck = await User.findOne({ where: { email: req.body.email } });
		if (emailCheck) {
			return res.json(409).send("Email already taken");
		}

		next();
	} catch (error) {
		next(error);
	}
};
