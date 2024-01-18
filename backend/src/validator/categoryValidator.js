const { Category } = require('../models'); // Replace with the correct path to your User model
const AppError = require('../utils/HttpError');
const {isValidObjectId} = require("../constants/regExp")



const checkCategoryExistence = async (req, res, next) => {

  try {
    const _id= req.params.id
    
   if (!isValidObjectId(_id)) {
    res.status(500).json({ message: 'the provided id is not valid' });
   }
    const existingCategory = await Category.findById(_id);

    if (!existingCategory ) {
        const err = new AppError('category not exist', 409);
       return next(err); // Pass the error to the next middleware
    }

    // If the user doesn't exist, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error checking category:", error);
    const err = new AppError('Internal Server Error', 500);
     return next(err); // Pass the error to the next middleware

  }
};

module.exports =checkCategoryExistence ;
