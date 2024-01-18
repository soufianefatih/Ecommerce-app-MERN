const Joi = require("joi");
const { regExp, message } = require("../constants");

const registerSchema = Joi.object({
  userName: Joi.string()
    .min(2)
    .max(32)
    .pattern(regExp.name)
    .required()
    .messages({
      "any.required": message.fieldRequired("name"),
      "string.pattern.base": message.nameInvalid,
    }),
  email: Joi.string()
    .pattern(regExp.email)
    .required()
    .messages({
      "any.required": message.fieldRequired("email"),
      "string.pattern.base": message.emailInvalid,
    }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .required()
    .messages({
      "any.required": message.fieldRequired("password"),
      "string.pattern.base": message.passwordInvalid,
    }),
    adress: Joi.string()
    .trim()
    .min(2)
    .required(),

    zipCode: Joi.string()
    .trim()
    .min(2)
    .required(),
    
    city: Joi.string()
    .trim()
    .min(2)
    .required(),
    
    role: Joi.string()
  
});

  
  module.exports = registerSchema;