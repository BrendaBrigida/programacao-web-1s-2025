const Sequelize = require('sequelize'); // Importa o Sequelize, que é a biblioteca ORM usada para manipular o banco de dados
const db = require('../db'); //Importa a configuração do banco de dados (arquivo db.js) para conectar

//const nao pode ser mudada, ou seja, imutavel
const AgendamentoConsulta = db.define('agendamento_consulta', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },   
    clinica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_consulta: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora_consulta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    observacao: {
        type: Sequelize.STRING
    }
});

module.exports = AgendamentoConsulta;