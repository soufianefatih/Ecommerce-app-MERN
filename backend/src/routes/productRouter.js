const express = require("express");
const productController = require('../controllers/productController')
const{photoUpload}= require('../middleware')
const checkProductExistence = require("../validator/productValidator")
const checkCategoryExistence  = require('../validator/categoryValidator')


const route = express.Router();

route 
    .route('/')
    .post(photoUpload.single("image"),productController.create)
    .get(productController.all)    


route 
    .route('/:id')
    .get(checkProductExistence,productController.findOneById)    
    .delete(checkProductExistence,productController.delete)    


route 
    .route('/category/:id')
    .get(checkCategoryExistence,productController.categoryProducts)    






module.exports = route;
