exports.errorHandler = (err, req, res, next) => {
	console.error("Error:", err.stack);
	return res.status(500).json({ error: "Internal Server Error" });
};
