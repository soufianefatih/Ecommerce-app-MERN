const { User } = require('../models'); // Replace with the correct path to your User model
const AppError = require('../utils/HttpError');


const checkEmailExistence = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const err = new AppError('User with this email already exists', 409);
       return next(err); // Pass the error to the next middleware
    }

    // If the user doesn't exist, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error checking existing user:", error);
    const err = new AppError('Internal Server Error', 500);
     return next(err); // Pass the error to the next middleware

  }
};

module.exports = checkEmailExistence;
