const { Product} = require("../models");
const {validateCreateProduct} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');
const fs = require("fs");
const path = require("path")
const {cloudinaryUploadImage} = require("../utils/cloudinary")




// * create  new product
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
  
















  






