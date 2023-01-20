const Sequelize = require('sequelize');

const database = require('./db');

const Container = require('./crudContainer');

const Movements = database.define('Movement',
 {
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Movement_type:
    {
        type: Sequelize.toString,
        allowNull: false,
    },
    Input_time_date:
    {
        type: Sequelize.DATE,
        allowNull: false,
    },
    date_time_end:
    {
        type: Sequelize.DATE,
        allowNull: false,
    }
 }, {
    timestamps: false
 }
 )
 Movements.belongsTo(Container, {foreingkey:'Container_id', allowNull: false});
 module.exports = Movements;