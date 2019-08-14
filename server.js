const express = require('express')
const app = express()
const bankRoutes = require('./routes/bank');
const port = process.env.port || 3000;
var server = require('http').createServer(app);
const bodyParser = require('body-parser');
const middlewares = require('./middleware/middleware');
//const bank = require('./models/branch_model');
// parsing the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// bank Routes:
app.use("/v1", bankRoutes);

// middleware to send response
app.use(middlewares.sendResponse);

//Error handling
app.use(function(req, res, next) {
    const error = new Error("");
    error.status = 404;
    next(error);
});

//Send Error Message Response 
app.use(function(error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
        message: error.message
        }
    });
});

const init = async () => {
    await bank.sync() // force: true will drop the table if it already exists
    console.log("Table synced");
};
// init();

//Start the server
server.listen(port, function(){
    console.log(port);
});