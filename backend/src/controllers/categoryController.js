const { Category} = require("../models");
const {categorySchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');




// * create  new category 
exports.create = async (req, res, next) => {

  const { value, error } = categorySchema.createSchema.validate(req.body, {
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

// * get all category

exports.all = async (req, res,next) => {

  const result = await Category.find();
  if(!result) {
    const err = new AppError('not found category', 404);
    return next(err);
  }

 return res.status(201).json({ status : HttpStatusText.SUCCESS, result });
};



// * get one  category

exports.findOneById = async (req, res,next) => {
 const _id = req.params.id
 const result = await Category.findById(_id);
 if(!result) {
  const err = new AppError('not found category', 404);
  return next(err);
}
 return  res.status(201).json({ status : HttpStatusText.SUCCESS, result});

};


// * delete category ById

exports.delete = async (req, res,next) => {
  const _id = req.params.id
  const result = await Category.findByIdAndDelete(_id);

  if(!result) {
    const err = new AppError('not found category', 404);
    return next(err);
  }

 return res.status(201).json({ status : HttpStatusText.SUCCESS, data: null });
};



// * update category

exports.update = async (req, res, next) => {
  const { value, error } = categorySchema.updateSchema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }

  const _id = req.params.id;
  const { name: newName } = value || {};

  const result = await Category.findOneAndUpdate(
    { _id },
    { name: newName },
    { new: true, select: "name" } // Options
  );

  return res.status(201).json({ status: HttpStatusText.SUCCESS, result });
};


