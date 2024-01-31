module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        userId: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.ENUM,
            values: ['pending', 'inprogress', 'onhold', 'completed', 'archived', 'cancelled']
        },
        priority: {
            type: Sequelize.ENUM,
            values: ['low', 'medium', 'high']
        },
        deadline: {
            type: Sequelize.STRING
        }
    })

    return Task;
};