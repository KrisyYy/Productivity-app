module.exports = (sequelize, Sequelize) => {
    const Subtask = sequelize.define("subtask", {
        id: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        complete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        taskId: {
            type: Sequelize.UUID,
            references: {
                model: 'tasks',
                key: 'id'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }
    })
    
    return Subtask;
}