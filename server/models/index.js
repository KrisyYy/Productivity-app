const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require('./task.module.js')(sequelize, Sequelize);
db.users = require('./user.module.js')(sequelize, Sequelize);

db.users.hasMany(db.tasks, { 
    onDelete: 'CASCADE',
    foreignKey: {
        type: Sequelize.UUID,
        allowNull: false
    }
});
db.tasks.belongsTo(db.users, { onDelete: 'CASCADE' });

module.exports = db; 