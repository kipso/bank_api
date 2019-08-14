const db = require('../database/database');
const Sequelize = require('sequelize');
const Branch = require('./branch_model');

const Bank = db.define('banks',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        field:'name'
    }
},{
    tableName:'banks'
})

Bank.associate = function (models) {
    models.Bank.belongsTo(models.Branch, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
};

module.exports = Bank;



