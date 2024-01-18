const Joi = require('joi');

const createSchema = Joi.object({
  name: Joi.string().trim()
      .required(),
  

  });

  const updateSchema = Joi.object({
    name: Joi.string().trim(),
  });
  
  module.exports =createSchema ,updateSchema;