const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
    checkToken: function(req,res,next){
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        if (token) {
            jwt.verify(token, config.jwt.secret, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
              success: false,
              message: 'Auth token is not supplied'
            });
        }        
    },
    //Send Response to the end user
    sendResponse: function(req,res,next){
        // valid response then send to user. else pass it to error handler
        if(res.locals){
            res.send({
                "branch":res.locals.branch,
                "ifsc":res.locals.ifsc,
                "address":res.locals.address,
                "bank_id":res.locals.bank_id,
                "bank_name":res.locals.bank_name,
                "data": res.locals.data,
                "success":res.locals.success,
                "message":res.locals.message
            });
        } else {
            next();
        }
    },
}