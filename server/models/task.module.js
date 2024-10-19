module.exports = (sequelize, Sequelize) => {
	const Task = sequelize.define("task", {
		id: {
			primaryKey: true,
			allowNull: false,
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		complete: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		description: {
			type: Sequelize.STRING(8192),
		},
		deadline: {
			type: Sequelize.DATE,
		},
	});

	return Task;
};
