const Sequelize = require('sequelize');
// Cria uma instância de conexão com o banco de dados usando o SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',  // Define que o banco usado será o SQLite
    storage: './database.sqlite' //Caminho do arquivo onde os dados serão salvos
});

module.exports = sequelize;
 