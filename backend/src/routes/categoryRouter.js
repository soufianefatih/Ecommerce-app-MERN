const express = require("express");
const categoryController = require('../controllers/categoryController')
const checkCategoryExistence  = require('../validator/categoryValidator')

const route = express.Router();

route 
    .route('/create')
    .post(categoryController.create)


route 
    .route('/')
    .get(categoryController.all)

 
route 
    .route('/:id')
    .get( checkCategoryExistence,categoryController.findOneById)    
       



module.exports = route;
