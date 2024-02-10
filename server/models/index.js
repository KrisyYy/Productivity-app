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
db.categories = require('./category.module.js')(sequelize, Sequelize);
db.tags = require('./tag.module.js')(sequelize, Sequelize);
db.subtasks = require('./subtask.module.js')(sequelize, Sequelize);

db.users.hasMany(db.tasks, { as: 'creator', foreignKey: {
    name: 'creatorId',
    allowNull: false
} })
db.tasks.belongsTo(db.users, { as: 'creator', foreignKey: {
    name: 'creatorId',
    allowNull: false
} })
const TaskParticipants = sequelize.define('task_participants', {}, { timestamps: false });
db.users.belongsToMany(db.tasks, { through: TaskParticipants, foreignKey: 'user_id' });
db.tasks.belongsToMany(db.users, { through: TaskParticipants, foreignKey: 'task_id' });

db.tasks.hasMany(db.subtasks);
db.subtasks.belongsTo(db.tasks);

db.users.hasMany(db.categories);
db.categories.belongsTo(db.users);

const TaskCategories = sequelize.define('task_categories', {}, { timestamps: false });
db.tasks.belongsToMany(db.categories, { through: TaskCategories, foreignKey: 'task_id' });
db.categories.belongsToMany(db.tasks, { through: TaskCategories, foreignKey: 'category_id' });

db.tags.belongsTo(db.tasks);
db.tasks.hasMany(db.tags);

module.exports = db; 