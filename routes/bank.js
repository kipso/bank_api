const express = require('express');
const router = express.Router();

const bankController = require('../controllers/bank_controller');
const branchController = require('../controllers/branch_controller');
const middleware = require('../middleware/middleware');



router.get("/bank/:ifsc",middleware.checkToken,bankController.get_bank_details);

router.get("/branch",middleware.checkToken,branchController.get_branch_details);

module.exports = router;