const { Product} = require("../models");
const { createProductSchema } = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');




// * create  new product
exports.create = async (req, res, next) => {

  const { value, error } = createProductSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const { name,description,price,qty} = value;
  
  const result = await Product.create({
    name,description,price,qty
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};



















  






