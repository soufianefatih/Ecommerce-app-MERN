const { User } = require("../models");
const {authSchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');



/**-----------------------------------------------
 * @desc    Register
 * @route   /v1/auth/register
 * @method  Create
 * @access  public 
 ------------------------------------------------*/

exports.registera = async (req, res, next) => {
  console.log('Request body:', req.body); // Add this line for debugging

  const { value, error } = authSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });

  console.log('Validation result:', { value, error }); // Add this line for debugging

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    const validationError = new AppError(`Validation error: ${errorMessage}`, 422);
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



/**-----------------------------------------------
 * @desc    Login
 * @route   /v1/auth/login
 * @method  Post
 * @access  public
 ------------------------------------------------*/

exports.login = async (req, res, next) => {
    const { value, error } = authSchema.loginSchema.validate(req.body, {
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
      user :{
        _id: user._id,
        userName: user.userName,
        email: user.email,
        address: user.address,
        city: user.city,
        zipCode: user.zipCode
       }
    });
  };


  
/**-----------------------------------------------
 * @desc    find User by token authorization
 * @route   /v1/auth/user
 * @method  Get
 * @access  private
 ------------------------------------------------*/
  
  exports.findOneById = async (req, res,next) => {

    const userId = req.user._id

    const user = await User.findById(userId);
    
    console.log("user",user);
    if(!user) {
     const err = new AppError('not found user', 404);
     return next(err);
   }
    return  res.status(201).json({ status : HttpStatusText.SUCCESS,
       user :{
               _id: user._id,
               userName: user.userName,
               email: user.email,
               address: user.address,
               city: user.city,
               zipCode: user.zipCode
    }});
   
   };
   
  


   // Assuming you have the following import statements at the top of your file
// const AppError = require('./path-to-AppError'); // Import your custom error class
// const HttpStatusText = require('./path-to-HttpStatusText'); // Import your custom HTTP status texts
// const authSchema = require('./path-to-authSchema'); // Import your validation schema
// const User = require('./path-to-User'); // Import your User model

exports.register = async (req, res, next) => {

  try {
    const { value, error } = authSchema.registerSchema.validate(req.body, {
      abortEarly: false,
    });

    console.log('Validation result:', { value, error }); // Add this line for debugging

    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(', ');
      throw new AppError(`Validation error: ${errorMessage}`, 422);
    }

    const { userName, email, password, city, address, zipCode } = value || {};

    // Set the role based on the condition (data.type)
    const data = req.body;
    const role = data.type ? 'admin' : 'user';

    const result = await User.create({
      userName,
      email,
      password,
      role,
      city,
      address,
      zipCode,
    });

    res.status(201).json({ status: HttpStatusText.SUCCESS,message:'User Created successfully', result });
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};
