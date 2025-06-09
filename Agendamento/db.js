const Sequelize = require('sequelize');
const Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/.database.sqlite'
});

module.exports = sequelize