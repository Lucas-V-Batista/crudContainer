const Sequelize  = require('sequelize');

const componenteSequelize = new Sequelize('dbCrud', 'root', '279842',
{
   dialect:'mysql', host:'localhost'
});

module.exports = componenteSequelize;