const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Branch = require('../models/branch_model');
const Bank = require('../models/bank_model');

exports.get_branch_details = function (req,res,next){
    if(req.query.name && req.query.city){
        Bank.findOne({ attributes: ['id'],
        where:{name: req.query.name.toUpperCase()},
        raw: true
    }).then(response => {
        var limit = req.query.limit || 15;
        var page = req.query.page || 1;
        var offset = (page-1)*limit;
        console.log(response)
        Branch.findAll({ attributes: ['ifsc', 'branch','address','bank_id','city','district','state'],
        where: { bank_id: response.id, city: req.query.city.toUpperCase()},
        limit: limit,
        offset: offset,
        raw:true
    }).then( values => {
        res.locals.data = values;
        res.locals.success = true;
        next();
    }).catch(function(err){
        next(err);
    });
    }).catch(function(err){
        next(err);
    });
    } else {
       res.statusCode = 422;
       res.locals.message = "Invalid data";
       next(); 
    }
}