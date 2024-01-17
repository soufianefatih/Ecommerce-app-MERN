const Joi = require("joi");
function validateCreateProduct(obj) {

const schema = Joi.object({
      name: Joi.string().required().messages({
        "any.required": "Missing required name field",
        "string.base": "Field name must be a string",
      }),
   
      description: Joi.string().required().trim().min(10).messages({
        "any.required": "Missing required description field",
        "string.base": "Field description must be a string",
      }),
      price: Joi.number().integer().messages({
        "any.required": "Missing required price field",
        "number.base": "Field price must be a number",
      }),
      qty: Joi.number().integer().messages({
        "any.required": "Missing required quantity field",
        "number.base": "Field quantity must be a number",
      }),
      category: Joi.string().required().messages({
        "any.required": "Missing required category field",
        "string.base": "Field category must be a string",
      }),
     
  });
    return schema.validate(obj);
  }
  
  module.exports = validateCreateProduct;