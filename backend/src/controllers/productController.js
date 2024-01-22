const { Product} = require("../models");
const {validateCreateProduct} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');
const fs = require("fs");
const path = require("path")
const {cloudinaryUploadImage} = require("../utils/cloudinary")



/**-----------------------------------------------
 * @desc    Create new product
 * @route   /v1/product
 * @method  Create
 * @access  private (only admin)
 ------------------------------------------------*/

exports.create = async (req, res) => {
    // 1. Validation for image
    if (!req.file) {
      return res.status(400).json({ message: "no image provided" });
    }
  
    // 2. Validation for data
    const { error } = validateCreateProduct(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  
    // 3. Upload photo
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
    const result = await cloudinaryUploadImage(imagePath);

    // 4. Create new post and save it to DB
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      qty: req.body.qty,
      category: req.body.category,
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });
  
    // 5. Send response to the client
  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {product} });

    // 6. Remove image from the serve
    fs.unlinkSync(imagePath);
  };




/**-----------------------------------------------
 * @desc     get all products
 * @route   /v1/product
 * @method  get
 * @access  public 
 ------------------------------------------------*/

exports.all = async (req, res,next) => {

  try {
    const result = await Product.find();
    res.status(201).json({ status : HttpStatusText.SUCCESS, result });


  } catch (error) {
    
  }

  const result = await Product.find();
  if(!result) {
    const err = new AppError('not found Product', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, result });
};

  


/**-----------------------------------------------
 * @desc     get all products have the some category
 * @route   /v1/product/category/:id
 * @method  get
 * @access  public 
 ------------------------------------------------*/

exports.categoryProducts = async (req, res,next) => {
  const _id = req.params.id
  const result = await Product.find({category:_id});
  if(!result) {
    const err = new AppError('not found Product', 404);
    return next(err);
  }

  res.status(201).json({ status : HttpStatusText.SUCCESS, result });
};




/**-----------------------------------------------
 * @desc     get one products
 * @route   /v1/product/:id
 * @method  get
 * @access  public 
 ------------------------------------------------*/

exports.findOneById = async (req, res,next) => {
  const _id = req.params.id
  const result = await Product.findById(_id);
  if(!result) {
   const err = new AppError('not found product', 404);
   return next(err);
 }
  return  res.status(201).json({ status : HttpStatusText.SUCCESS, result});
 
 };
 
 
 
 /**-----------------------------------------------
 * @desc     delete product ById
 * @route   /v1/product/:id
 * @method  delete
 * @access  private(only admin)
 ------------------------------------------------*/
 
 exports.delete = async (req, res,next) => {
   const _id = req.params.id
   const result = await Product.findByIdAndDelete(_id);
 
   if(!result) {
     const err = new AppError('not found product', 404);
     return next(err);
   }
 
  return res.status(201).json({ status : HttpStatusText.SUCCESS, data: null });
 };

















  






