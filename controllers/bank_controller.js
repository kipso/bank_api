const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Branch = require('../models/branch_model');
const Bank = require('../models/bank_model');

exports.get_bank_details = function(req,res,next){
    Branch.findOne({ attributes: ['ifsc', 'branch','address','bank_id'],
        where:{ ifsc: req.params.ifsc},
        raw: true,
    }).then(values => {
        Bank.findOne({ attributes: ['name'],
        where:{id: values.bank_id},
        raw: true,
    }).then(response => {
        res.locals.branch = values.branch;
        res.locals.ifsc = values.ifsc;
        res.locals.address = values.address;
        res.locals.bank_id = values.bank_id;
        res.locals.bank_name = response.name;
        next();
    }).catch(function(err){
            next(err);
        });
    }).catch(function(err){
        next(err);
      });
};