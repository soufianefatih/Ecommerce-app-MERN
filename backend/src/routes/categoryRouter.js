const express = require("express");
const categoryController = require('../controllers/categoryController')
const checkCategoryExistence  = require('../validator/categoryValidator')

const route = express.Router();



route 
    .route('/')
    .get(categoryController.all)
    .post(categoryController.create)

route 
    .route('/:id')
    .put( checkCategoryExistence,categoryController.update) 
    .get( checkCategoryExistence,categoryController.findOneById)    
    .delete( checkCategoryExistence,categoryController.delete)    
       

       


module.exports = route;
