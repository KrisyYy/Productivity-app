const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];

		if (!token) {
			return res.status(403).send({
				message: "No token provided",
			});
		}

		jwt.verify(token, process.env.secretKey, (err, decoded) => {
			if (err) {
				return res.status(401).send({
					message: "Unauthorized",
				});
			}
			req.userId = decoded.id;
			next();
		});
	} catch (error) {
		next(error);
	}
};
