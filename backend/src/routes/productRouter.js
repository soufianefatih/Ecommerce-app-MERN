const express = require("express");
const productController = require('../controllers/productController')
const{photoUpload}= require('../middleware')

const route = express.Router();

route 
    .route('/')
    .post(photoUpload.single("image"),productController.create)
    .get(productController.all)    


route 
    .route('/:id')
    .get(productController.findOneById)    
    .delete(productController.delete)    


route 
    .route('/category/:id')
    .get(productController.categoryProducts)    






module.exports = route;
