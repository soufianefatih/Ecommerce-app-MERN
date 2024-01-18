const express = require("express");
const authController = require('../controllers/authController')



const route = express.Router();

route 
    .route('/register')
    .post(authController.register)



module.exports = route;
