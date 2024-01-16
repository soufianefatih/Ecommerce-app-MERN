const express = require("express");
const productController = require('../controllers/productController')
// const{virifylogin,userRole}= require('../../middleware')
const photoUpload = require('../middleware/photoUpload')

const route = express.Router();

route 
    .route('/create')
    .post(photoUpload.single("image"),productController.create)






module.exports = route;
