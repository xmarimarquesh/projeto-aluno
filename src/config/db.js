const sequelize = require ('sequelize');

//configuração da base de dados
const database = new sequelize('AulaJS', 'AulaJavaScript', 'etsps2024401',
{
    dialect: 'mssql', host:'localhost', port: 1433
});

database.sync();

module.exports = database;