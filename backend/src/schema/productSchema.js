const Joi = require("joi");
const { regExp, message } = require("../constants");

  
const createProductSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Missing required name field",
        "string.base": "Field name must be a string",
      }),
   
      description: Joi.string().required().trim().min(10).messages({
        "any.required": "Missing required description field",
        "string.base": "Field description must be a string",
      }),
      price: Joi.number().integer().messages({
        "any.required": "Missing required description field",
        "string.base": "Field description must be a string",
      }),
      qty: Joi.number().integer().messages({
        "any.required": "Missing required description field",
        "string.base": "Field description must be a string",
      }),
     
  });

  
  module.exports = createProductSchema ;