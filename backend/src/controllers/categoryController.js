const { Category} = require("../models");
const {createSchema,updateSchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');




// * create  new category 
exports.create = async (req, res, next) => {

  const { value, error } = createSchema.validate(req.body, {
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

  res.status(201).json({ status : HttpStatusText.SUCCESS, result });
};



// * get one  category

exports.findOneById = async (req, res,next) => {
 const _id = req.params.id
 const result = await Category.findById(_id);
 if(!result) {
  const err = new AppError('not found category', 404);
  return next(err);
}
 res.status(201).json({ status : HttpStatusText.SUCCESS, result});

};


// * delete category ById

exports.delete = async (req, res,next) => {
  const _id = req.params.id
  const result = await Category.findByIdAndDelete(_id);

  if(!result) {
    const err = new AppError('not found category', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: null });
};



// * update category

exports.updatea = async (req, res, next) => {
  const { value, error } = updatecategorySchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }
  const _id = req.params.id
  const {name = newName} = value || {};

  const result = await Category.findOneAndUpdate(
    { _id},
    { name}, 
    { new: true, select: "name" } // Options
  );

  res.status(201).json({ status: HttpStatusText.SUCCESS, result });
};




exports.update = async (req, res, next) => {
  const { value, error } = updateSchema.validate(req.body, {
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

  res.status(201).json({ status: HttpStatusText.SUCCESS, result });
};

