module.exports = (sequelize, Sequelize) => {
	const Tag = sequelize.define(
		"tag",
		{
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			color: {
				type: Sequelize.STRING(6),
				defaultValue: "FFFFFF",
				is: /^[0-9a-fA-F]{6}$/i,
			},
		},
		{ timestamps: false }
	);

	return Tag;
};
