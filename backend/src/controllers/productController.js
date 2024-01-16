const { Product} = require("../models");
const { createProductSchema } = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');
const fs = require("fs");
const path = require("path")
const {cloudinaryUploadImage} = require("../utils/cloudinary")




// * create  new product
exports.create = async (req, res, next) => {

  const { value, error } = createProductSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const err = new AppError(error, 404);
    return next(err);
  }
  if (!req.file) {
    return   res.status(400).json({ status : HttpStatusText.ERROR, message : "no image provided" });

  }

  const imagePath = path.join(__dirname,`../images/${req.file.filename}`)
  const re = await cloudinaryUploadImage(imagePath)

  const { name,description,price,qty,image} = value;
  
  const result = await Product.create({
    name,description,price,qty,image : {url: re.secure_url,publicId: re.public_id}
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });

  fs.unlinkSync(imagePath)
};



















  






