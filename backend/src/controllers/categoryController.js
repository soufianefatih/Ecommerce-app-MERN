const { Category} = require("../models");
const {createcategorySchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');




// * create  new category 
exports.create = async (req, res, next) => {

  const { value, error } = createcategorySchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const {name} = value ;
 
  
  const result = await Category.create({
    name
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};