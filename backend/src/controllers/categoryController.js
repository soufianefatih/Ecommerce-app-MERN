const { Category} = require("../models");
const {categorySchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');







/**-----------------------------------------------
 * @desc    Create new Category
 * @route   /v1/category
 * @method  Create
 * @access  private (only admin)
 ------------------------------------------------*/
exports.create = async (req, res, next) => {

  const { value, error } = categorySchema.createSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 422);
    return next(err);
  }

  const {name} = value ;
 
  
  const result = await Category.create({
    name
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });
};



/**-----------------------------------------------
 * @desc    Get ALL Category
 * @route   /v1/category
 * @method  all
 * @access  public 
 ------------------------------------------------*/

exports.all = async (req, res,next) => {

  const result = await Category.find();
  if(!result) {
    const err = new AppError('not found category', 404);
    return next(err);
  }

 return res.status(201).json({ status : HttpStatusText.SUCCESS, result });
};





/**-----------------------------------------------
 * @desc    Get oneCategory
 * @route   /v1/category/:id
 * @method  Get
 * @access  public 
 ------------------------------------------------*/

exports.findOneById = async (req, res,next) => {
 const _id = req.params.id
 const result = await Category.findById(_id);
 if(!result) {
  const err = new AppError('not found category', 404);
  return next(err);
}
 return  res.status(201).json({ status : HttpStatusText.SUCCESS, result});

};





/**-----------------------------------------------
 * @desc    delete Category
 * @route   /v1/category/;id
 * @method  delete
 * @access  private (only admin)
 ------------------------------------------------*/
exports.delete = async (req, res,next) => {
  const _id = req.params.id
  const result = await Category.findByIdAndDelete(_id);

  if(!result) {
    const err = new AppError('not found category', 404);
    return next(err);
  }

 return res.status(201).json({ status : HttpStatusText.SUCCESS, data: null });
};






/**-----------------------------------------------
 * @desc    Update Category
 * @route   /v1/category/:id
 * @method  Update
 * @access  private (only admin)
 ------------------------------------------------*/

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


