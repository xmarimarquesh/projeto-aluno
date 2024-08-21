const sequelize = require('sequelize');
const database = require('../config/db');
const sala = require('../model/sala');

const aluno = database.define('Alunos', {
    IDAluno: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },

    Nome: {
        type: sequelize.STRING(100),
        allowNull: true
    },

    Idade: {
        type: sequelize.INTEGER,
        allowNull: true
    },

    Sexo: {
        type: sequelize.STRING(20),
        allowNull: true
    },

    Foto: {
        type: sequelize.STRING(50),
        allowNull: true
    }
});

aluno.belongsTo(sala, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'IDSala'
});

module.exports = aluno;