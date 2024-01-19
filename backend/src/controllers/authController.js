const { User } = require("../models");
const {registerSchema ,loginSchema} = require("../schema");
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




exports.login = async (req, res, next) => {
    const { value, error } = loginSchema.validate(req.body, {
      abortEarly: false,
    });
  
    if (error) {
      const err = new AppError(error, 404);
      return next(err);
    }
  
    const { email, password } = value;
    const user = await User.findOne({ email });
  
    if (!user) {
      const err = new AppError('Email or password is wrong', 401);
      return next(err);
    }
  
    if (!user.comparePassword || !user.comparePassword(password)) {
      const err = new AppError('Password or password is wrong', 401);
      return next(err);
    }
  
    const accessToken = user.signToken();
  
    await User.findOneAndUpdate({ email }, { accessToken });
    res.json({
      status: HttpStatusText.SUCCESS,
      accessToken,
    });
  };


  


  