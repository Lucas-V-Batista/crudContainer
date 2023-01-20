const Sequelize  = require('sequelize');

const database  = require('./db');

const Container = database.define('Container',
    {
        id:
        {
          type: Sequelize.INTEGER,
          autoIncrement : true,
          allowNull : false,
          primaryKey : true 
        },
        Customer : 
        {
            type: Sequelize.STRING,
            allowNull : false,
        }, 
        Container_number : 
        {
            type: Sequelize.STRING,
            allowNull : false,
        },
        Type : 
        {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        Status : 
        {
            type: Sequelize.STRING,
            allowNull : false,
        },
        Category : 
        {
            type: Sequelize.STRING,
            allowNull : false,
        }    
    
    }, {
        timestamps: false
    }
)

module.exports = Container;