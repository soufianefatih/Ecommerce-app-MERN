const { User } = require('../models'); 
const AppError = require('../utils/HttpError');


const checkEmailExistence = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const err = new AppError('User with this email already exists', 409);
       return next(err); 
    }

    next();
  } catch (error) {
    console.error("Error checking existing user:", error);
    const err = new AppError('Internal Server Error', 500);
     return next(err); 

  }
};

module.exports = checkEmailExistence;
