const { User } = require("../models");
const { registerSchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');





exports.register = async (req, res, next) => {
  console.log('Request body:', req.body); // Add this line for debugging

  const { value, error } = registerSchema.validate(req.body, {
    abortEarly: false,
  });

  console.log('Validation result:', { value, error }); // Add this line for debugging

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    const validationError = new AppError(`Validation error: ${errorMessage}`, 400);
    return next(validationError);
  }

  const { userName, email, password ,city,address,zipCode } = value || {};
  
  // Set the role based on the condition (data.type)
    const data = req.body
    const role = data.type ? 'admin' : 'user';


  const result = await User.create({
    userName, email,password,
     role,city,address,zipCode
  });

  res.status(201).json({ status : HttpStatusText.SUCCESS, result});
};