const Sequelize = require('sequelize');

const sequelize = new Sequelize('new_blogs', 'root', 'Root@123', {
    dialect: 'mysql', 
    host: 'localhost'})

    module.exports = sequelize;