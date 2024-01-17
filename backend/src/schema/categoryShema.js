const Joi = require("joi");

  
const createcategorySchema = Joi.object({
  name: Joi.string()
      .required(),
  

  });

  
  module.exports = createcategorySchema;