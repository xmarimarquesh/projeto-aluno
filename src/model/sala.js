//Importação
const sequelize = require('sequelize');
const database = require('../config/db')

const sala = database.define('Sala', {
    IDSala : {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Nome: {
        type: sequelize.STRING(50),
        allowNull: false
    },

    Capacidade: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = sala;