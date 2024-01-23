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
    .put(checkProductExistence,productController.update)    
  


route 
    .route('/category/:id')
    .get(checkCategoryExistence,productController.categoryProducts)    


route 
    .route('/upload-image/:id')
    .put(checkProductExistence,photoUpload.single("image"),productController.updateProductImage)    


module.exports = route;
