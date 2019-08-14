const db = require('../database/database');
const Sequelize = require('sequelize');
const Bank = require('./bank_model');

const Branch = db.define('branches',{
    ifsc: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'ifsc',
        unique: true
    },
    bankId: {
        type:Sequelize.INTEGER,
        allowNull:false,
        field:'bank_id'
    },
    branch:{
        type:Sequelize.STRING,
        field:'branch'
    },
    address:{
        type:Sequelize.STRING,
        field:'address'
    },
    city: {
        type:Sequelize.STRING,
        field:'city'
    },
    district: {
        type:Sequelize.STRING,
        field:'district'
    },
    state: {
        type:Sequelize.STRING,
        field:'state'
    }
},{
    tableName:'branches'
});


Branch.associate = function(models) {
    models.Branch.hasOne(models.Bank);
};

module.exports = Branch;