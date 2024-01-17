const { Product} = require("../models");
const {validateCreateProduct} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');
const fs = require("fs");
const path = require("path")
const {cloudinaryUploadImage} = require("../utils/cloudinary")




// * create  new product
// exports.createaaa = async (req, res, next) => {

//   const { value, error } = createProductSchema.validate(req.body, {
//     abortEarly: false,
//   });
//   if (error) {
//     const err = new AppError(error, 404);
//     return next(err);
//   }
//   if (!req.file) {
//     return   res.status(400).json({ status : HttpStatusText.ERROR, message : "no image provided" });

//   }

//   const imagePath = path.join(__dirname,`../images/${req.file.filename}`)
//   const re = await cloudinaryUploadImage(imagePath)

//   const { name,description,price,qty} = value;
//   const image = req.body
  
//   const result = await Product.create({
//     name,description,price,qty,image : {url: re.secure_url,publicId: re.public_id}
//   });

//   res.status(201).json({ status : HttpStatusText.SUCCESS, data: {result} });

//   fs.unlinkSync(imagePath)
// };



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
    console.log("result",result);
     console.log("req.body",req.body);
    // 4. Create new post and save it to DB
    const post = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      qty: req.body.qty,
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });
  
    // 5. Send response to the client
    res.status(201).json(post);
  
    // 6. Remove image from the server
    fs.unlinkSync(imagePath);
  };
  
















  






