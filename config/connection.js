const Sequelize = require('sequelize');

require('dotenv').config();

// create a connection to a database, pass in MySQL info
const sequelize = new Sequelize('just_tech_news_db', 'root', 'falconpunch@++@kk90', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
