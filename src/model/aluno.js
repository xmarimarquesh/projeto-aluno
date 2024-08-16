const sequelize = require('sequelize');
const database = require('../config/db');

const aluno = database.define('Aluno', {
    IDAluno: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Nome: {
        type: sequelize.STRING(100),
        allowNull: false
    },

    Idade: {
        type: sequelize.INTEGER,
        allowNull: false
    },

    Sexo: {
        type: sequelize.STRING(20),
        allowNull: false
    },

    Foto: {
        type: sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = aluno;