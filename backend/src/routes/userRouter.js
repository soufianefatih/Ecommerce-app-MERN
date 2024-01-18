const express = require("express");
const authController = require('../controllers/authController')
const checkEmailExistence = require("../validator/checkEmailExistence")



const route = express.Router();

route 
    .route('/register')
    .post(checkEmailExistence,authController.register)



module.exports = route;
