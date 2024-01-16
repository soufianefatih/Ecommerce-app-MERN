const express = require("express");
const productController = require('../controllers/productController')
// const{virifylogin,userRole}= require('../../middleware')


const route = express.Router();


route 
    .route('/create')
    .post(productController.create)






module.exports = route;
