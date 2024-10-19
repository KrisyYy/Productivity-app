module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		id: {
			primaryKey: true,
			allowNull: false,
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			isEmail: true,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		themePreference: {
			type: Sequelize.STRING,
			defaultValue: "light",
			isIn: [["light", "dark"]],
		},
	});

	return User;
};
