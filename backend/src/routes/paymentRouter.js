const express = require("express");
const paymentController = require('../controllers/paymentController')


const route = express.Router();



route 
    .route('/pay')
    .post(paymentController.payment)


    
module.exports = route;
