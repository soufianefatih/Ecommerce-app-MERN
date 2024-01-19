const Joi = require("joi");
const { regExp, message } = require("../constants");


const loginSchema = Joi.object({
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
  })


module.exports = loginSchema
