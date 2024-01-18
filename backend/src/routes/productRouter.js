const express = require("express");
const productController = require('../controllers/productController')
const{photoUpload}= require('../middleware')

const route = express.Router();

route 
    .route('/create')
    .post(photoUpload.single("image"),productController.create)

route 
    .route('/')
    .get(productController.all)    






module.exports = route;
