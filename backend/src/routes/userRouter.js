const express = require("express");
const authController = require('../controllers/authController')
const checkEmailExistence = require("../validator/checkEmailExistence")
const {virifylogin} = require("../middleware")
    



const route = express.Router();


route 
    .route('/login')
    .post(authController.login)
    
route 
    .route('/register')
    .post(checkEmailExistence,authController.register)

route 
    .route('/user')
    .get(virifylogin,authController.findOneById)



module.exports = route;
