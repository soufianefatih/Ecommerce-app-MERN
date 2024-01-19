const express = require("express");
const orderController = require('../controllers/orderController')
const {virifylogin} = require("../middleware")


const route = express.Router();



route 
    .route('/')
    .get(virifylogin,orderController.all)
    .post(virifylogin,orderController.create)

route 
    .route('/:id')
    .delete(virifylogin,orderController.delete)    
       

       


module.exports = route;
