const express = require("express");
const categoryController = require('../controllers/categoryController')

const route = express.Router();

route 
    .route('/create')
    .post(categoryController.create)






module.exports = route;
